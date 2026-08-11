// ============================================================
// Strait of Hormuz — Oil Export Flows (MapSankeySeries Demo)
// Gulf Producers → Asian & European Importers
// ============================================================

var root = am5.Root.new("chartdiv");

// Remove amCharts watermark logo
if (root._logo) {
  root._logo.dispose();
}

var oilTheme = am5.Theme.new(root);
oilTheme.rule("InterfaceColors").setAll({
  primaryButton: am5.color(0x1e293b),
  primaryButtonHover: am5.color(0x334155),
  primaryButtonDown: am5.color(0x0f172a),
  primaryButtonActive: am5.color(0x960018),
  primaryButtonText: am5.color(0xffffff),
  secondaryButton: am5.color(0x1e293b),
  secondaryButtonHover: am5.color(0x334155),
  secondaryButtonDown: am5.color(0x0f172a),
  secondaryButtonText: am5.color(0xffffff),
  background: am5.color(0x0b192c),
  text: am5.color(0xffffff)
});
root.setThemes([am5themes_Animated.new(root), oilTheme]);

// ApMoSys Theme Palette
var deepCrude = am5.color(0x0b192c);      // ocean — dark blue
var slick = am5.color(0x334155);          // land — slate (default)
var pipeline = am5.color(0x334155);       // accents — slate
var amber = am5.color(0x960018);          // primary — carmine red
var sulfur = am5.color(0x94a3b8);         // secondary — light gray text
var flare = am5.color(0xffffff);          // text/highlights — white text

// ---- Chart (start zoomed out at home) ----
var chart = root.container.children.push(am5map.MapChart.new(root, {
  panX: "rotateX",
  panY: "rotateY",
  wheelY: "none",
  wheelX: "none",
  pinchZoom: false,
  projection: am5map.geoOrthographic(),
  homeGeoPoint: { longitude: 0, latitude: 0 },
  homeRotationX: 0,
  homeRotationY: 0,
  homeZoomLevel: 0.85,
  minZoomLevel: 0.85,
  maxZoomLevel: 0.85,
  zoomLevel: 0.85
}));

// ---- Ocean background ----
var bgSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
bgSeries.mapPolygons.template.setAll({
  fill: deepCrude,
  fillOpacity: 0,
  strokeOpacity: 0,
  strokeWidth: 0
});
bgSeries.data.push({ geometry: am5map.getGeoRectangle(90, 180, -90, -180) });

// ---- Graticule ----
var graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(root, {}));
graticuleSeries.mapLines.template.setAll({
  stroke: pipeline,
  strokeOpacity: 0.25,
  strokeWidth: 0.5
});

// ---- Countries ----
var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
  geoJSON: am5geodata_worldIndiaLow
}));
polygonSeries.mapPolygons.template.setAll({
  fill: slick,
  stroke: pipeline,
  strokeWidth: 0.5,
  strokeOpacity: 0.6
});

// Highlight India, UAE & Canada
var highlightIds = ["IN", "AE", "CA"];

polygonSeries.events.on("datavalidated", function() {
  am5.array.each(polygonSeries.dataItems, function(di) {
    var id = di.get("id");
    if (highlightIds.includes(id)) {
      di.get("mapPolygon").setAll({ fill: am5.color(0xffffff) });
    }
  });
});

// ---- MapSankeySeries — Oil flows through Hormuz ----
var sankeySeries = chart.series.push(am5map.MapSankeySeries.new(root, {
  polygonSeries: polygonSeries,
  maxWidth: 0.2,
  controlPointDistance: 0.4,
  resolution: 60,
  nodePadding: 0.1
}));

sankeySeries.mapPolygons.template.setAll({
  fill: amber,
  fillOpacity: 0.4,
  strokeOpacity: 0
});

sankeySeries.nodes.mapPolygons.template.setAll({
  fill: amber,
  stroke: flare,
  strokeWidth: 1.5,
  fillOpacity: 0.95,
  strokeOpacity: 1
});

// ---- Animated oil drop bullets ----
sankeySeries.bullets.push(function() {
  return am5.Bullet.new(root, {
    locationX: 0,
    autoRotate: true,
    autoRotateAngle: -90,
    sprite: am5.Graphics.new(root, {
      // Oil drop shape
      svgPath: "M0,-7 C2,-4 5,0 5,3 C5,6 3,8 0,8 C-3,8 -5,6 -5,3 C-5,0 -2,-4 0,-7 Z",
      fill: amber,
      stroke: am5.color(0xffffff),
      strokeWidth: 0.5,
      centerX: am5.p50,
      centerY: am5.p50,
      scale: 0.45,
      visible: false
    })
  });
});

sankeySeries.events.on("datavalidated", function() {
  // Find the longest path to scale durations proportionally
  var maxLength = 0;
  am5.array.each(sankeySeries.dataItems, function(dataItem) {
    var len = sankeySeries.getPathLength(dataItem);
    if (len > maxLength) maxLength = len;
  });

  var baseDuration = 3000; // longest path duration
  var minDuration = 1000;

  am5.array.each(sankeySeries.dataItems, function(dataItem) {
    var pathLength = sankeySeries.getPathLength(dataItem) || maxLength;
    var dur = maxLength > 0 ? Math.max(minDuration, (pathLength / maxLength) * baseDuration) : baseDuration;

    var bullets = dataItem.bullets;
    if (bullets) {
      am5.array.each(bullets, function(bullet) {
        var randomDur = dur * (0.8 + Math.random() * 0.4);
        var delay = Math.random() * randomDur;
        setTimeout(function() {
          var sprite = bullet.get("sprite");
          if (sprite) sprite.set("visible", true);
          bullet.animate({
            key: "locationX",
            from: 0,
            to: 1,
            duration: randomDur,
            easing: am5.ease.linear,
            loops: Infinity
          });
        }, delay);
      });
    }
  });
});

// ---- Oil Export Data — through Strait of Hormuz ----
// Coordinates: actual oil port / terminal locations
// Values in thousands of barrels per day (approximate)

function flow(src, srcName, tgt, tgtName, value, wp) {
  var result = {
    sourceLongitude: src.lon, sourceLatitude: src.lat,
    targetLongitude: tgt.lon, targetLatitude: tgt.lat,
    source: srcName, target: tgtName, value: value
  };
  if (wp) result.waypoints = wp;
  return result;
}

// Locations
var uae = { lon: 55.27, lat: 25.20 };
var mumbai = { lon: 72.88, lat: 19.08 };
var chennai = { lon: 80.27, lat: 13.08 };
var bhubaneswar = { lon: 85.82, lat: 20.29 };
var canada = { lon: -79.38, lat: 43.65 }; // Toronto

sankeySeries.data.setAll([
  flow(mumbai, "Mumbai (HQ)", uae, "UAE", 1000),
  flow(mumbai, "Mumbai (HQ)", canada, "Canada", 900),
  flow(mumbai, "Mumbai (HQ)", chennai, "Chennai", 800),
  flow(mumbai, "Mumbai (HQ)", bhubaneswar, "Bhubaneswar", 600)
]);

// Titles and controls removed

chart.set("projection", am5map.geoOrthographic());
chart.set("panX", "rotateX");
chart.set("panY", "rotateY");
chart.set("rotationX", -74);
chart.set("rotationY", -23.5);
chart.set("zoomLevel", 0.85);
bgSeries.mapPolygons.template.set("fillOpacity", 0);

// Managed auto-rotation that allows for user interaction
var animation;

function startRotation() {
  if (animation) {
    animation.stop();
  }
  animation = chart.animate({
    key: "rotationX",
    from: chart.get("rotationX"),
    to: chart.get("rotationX") - 360,
    duration: 30000,
    loops: Infinity
  });
}

// Start rotation after initial load
setTimeout(startRotation, 500);

// Pause rotation when user clicks to drag
chart.chartContainer.events.on("pointerdown", function() {
  if (animation) {
    animation.stop();
  }
});

// Resume rotation when user releases mouse, even if outside iframe (globalpointerup)
chart.chartContainer.events.on("globalpointerup", function() {
  startRotation();
});

chart.appear(1000, 100);
