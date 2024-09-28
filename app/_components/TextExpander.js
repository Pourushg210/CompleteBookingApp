"use client";

import { useState } from "react";
function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText =
    isExpanded || children.split(" ").length <= 40
      ? children
      : children.split(" ").slice(0, 40).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      {children.split(" ").length > 40 && (
        <button
          className="text-primary-700 border-b border-primary-700 leading-3 pb-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </span>
  );
}

export default TextExpander;
