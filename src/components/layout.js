import React from "react";

export default function Layout({ children }) {
  return (
    <div className="layout" style={{ margin: `0 auto`, maxWidth: 900, padding: `0 1rem` }}>
      {children}
    </div>
  )
}