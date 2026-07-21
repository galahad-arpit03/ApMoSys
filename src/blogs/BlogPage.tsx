"use client";

import React from "react";
import FeaturedPost from "./FeaturedPost/FeaturedPost";
import BlogList from "./BlogList/BlogList";
import TechnicalLibrary from "./TechnicalLibrary/TechnicalLibrary";
import SubscribeBanner from "./SubscribeBanner/SubscribeBanner";

export default function BlogPage() {
  return (
    <>  
      <FeaturedPost />
      <BlogList />
      <TechnicalLibrary />
      <SubscribeBanner />
    </>
  );
}
