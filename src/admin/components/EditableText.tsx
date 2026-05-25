"use client";

import React, { useState, useRef, useEffect } from "react";
import { useContentStore, useAuthStore } from "@/src/admin/store/adminStore";
import { usePathname } from "next/navigation";

interface EditableTextProps {
  // Dot-notation path into the content store, e.g. "home.hero.heading"
  path: string;
  // Fallback value if store doesn't have it
  fallback?: string;
  // Render as: span (inline), div (block), or a heading tag
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  style?: React.CSSProperties;
  multiline?: boolean;
}

function getNestedValue(
  obj: Record<string, unknown>,
  path: string
): string | undefined {
  const keys = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = obj;
  for (const key of keys) {
    if (current == null) return undefined;
    current = current[key];
  }
  return typeof current === "string" ? current : undefined;
}

export default function EditableText({
  path,
  fallback = "",
  as: Tag = "span",
  className = "",
  style,
  multiline = false,
}: EditableTextProps) {
  const { content, updateField } = useContentStore();
  const { isAuthenticated } = useAuthStore();
  const pathname = usePathname();
  const isEditRoute = isAuthenticated && pathname?.startsWith("/administrator");
  const value =
    getNestedValue(content as unknown as Record<string, unknown>, path) ??
    fallback;

  const [editing, setEditing] = useState(false);
  const [localValue, setLocalValue] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  // Keep in sync when store updates externally
  useEffect(() => {
    if (!editing) {
      // eslint-disable-next-line
      setLocalValue(value);
    }
  }, [value, editing]);

  const startEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    setEditing(true);
  };

  const commit = () => {
    if (localValue !== value) {
      updateField(path, localValue);
    }
    setEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!multiline && e.key === "Enter") {
      e.preventDefault();
      commit();
    }
    if (e.key === "Escape") {
      setLocalValue(value);
      setEditing(false);
    }
  };

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      // Select all for quick overwrite
      inputRef.current.select?.();
    }
  }, [editing]);

  // If not in edit mode route, render completely static text matching original styling
  if (!isEditRoute) {
    return (
      <Tag className={className} style={style}>
        {localValue || fallback}
      </Tag>
    );
  }

  if (editing) {
    const sharedClasses = `bg-transparent border-none outline-none resize-none w-full ${className}`;
    return multiline ? (
      <textarea
        ref={inputRef as React.RefObject<HTMLTextAreaElement>}
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={commit}
        onKeyDown={handleKeyDown}
        className={sharedClasses}
        style={{
          ...style,
          boxShadow: "0 0 0 2px var(--color-primary-red), 0 0 0 4px rgba(180,0,1,0.15)",
          borderRadius: 4,
          padding: "2px 4px",
          minHeight: "2em",
        }}
        rows={3}
        onClick={(e) => e.stopPropagation()}
      />
    ) : (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={commit}
        onKeyDown={handleKeyDown}
        className={sharedClasses}
        style={{
          ...style,
          boxShadow: "0 0 0 2px var(--color-primary-red), 0 0 0 4px rgba(180,0,1,0.15)",
          borderRadius: 4,
          padding: "2px 4px",
        }}
        onClick={(e) => e.stopPropagation()}
      />
    );
  }

  return (
    <Tag
      className={`admin-editable-text group/et relative cursor-text ${className}`}
      style={style}
      onClick={startEdit}
      title="Click to edit"
    >
      {/* Hover outline */}
      <span
        className="absolute inset-0 rounded opacity-0 group-hover/et:opacity-100 pointer-events-none transition-opacity duration-200"
        style={{
          outline: "1.5px dashed var(--color-primary-red)",
          outlineOffset: 2,
        }}
      />
      {/* Edit badge on hover */}
      <span
        className="absolute -top-4 right-0 text-[9px] bg-primary-red text-white px-1.5 py-0.5 rounded opacity-0 group-hover/et:opacity-100 transition-opacity duration-200 pointer-events-none z-10 font-medium tracking-wide whitespace-nowrap"
        style={{ lineHeight: 1.4 }}
      >
        ✎ Edit
      </span>
      {localValue || fallback}
    </Tag>
  );
}
