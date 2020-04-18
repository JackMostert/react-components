import * as React from "react";
import { IScrollablePanelProps } from "./interface";
import "./css/main.css";

export function ScrollablePanel(props: IScrollablePanelProps) {
  return React.createElement(
    "section",
    {
      className: "jso-ScrollablePanel",
    },
    props.children
  );
}
