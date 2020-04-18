import React from "react";
import "./css/main.css";

export function ScrollablePanelHeader(props: { children: React.ReactNode }) {
  return React.createElement(
    "header",
    {
      className: "jso-ScrollablePanelHeader",
    },
    props.children
  );
}
