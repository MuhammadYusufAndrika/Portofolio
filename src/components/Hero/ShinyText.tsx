import React from "react";
import "./ShinyText.css";

type ShinyTextProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function ShinyText({ children, className = "", style }: ShinyTextProps) {
  return (
    <span className={`shiny-text${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </span>
  );
}
