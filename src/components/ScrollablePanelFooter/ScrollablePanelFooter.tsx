import React from "react";
import "./css/main.css";

export function ScrollablePanelFooter(props: { children: React.ReactNode }) {
  return React.createElement(
    "footer",
    {
      className: "jso-ScrollablePanelFooter",
    },
    props.children
  );
}
