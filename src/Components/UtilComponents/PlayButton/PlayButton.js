import React from "react";
import { PlayButtonStyled } from "./PlayButtonStyled";

export default function PlayButton() {
  return (
    <>
      <PlayButtonStyled>
        <button className="playBut h-full">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsa="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
            x="0px"
            y="0px"
            width="213.7px"
            height="213.7px"
            viewBox="0 0 213.7 213.7"
            enableBackground="new 0 0 213.7 213.7"
            xmlSpace="preserve"
            style={{ width: "50%", height: "100%", margin: "auto" }}
          >
            <polygon
              className="triangle"
              id="XMLID_18_"
              fill="none"
              strokeWidth={7}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              points="
73.5,62.5 148.5,105.8 73.5,149.1 "
            />
            <circle
              className="circle"
              id="XMLID_17_"
              fill="none"
              strokeWidth={7}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              cx="106.8"
              cy="106.8"
              r="103.3"
            />
          </svg>
        </button>
      </PlayButtonStyled>
    </>
  );
}
