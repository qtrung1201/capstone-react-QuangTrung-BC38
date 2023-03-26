import { Button } from "antd";
import React, { useLayoutEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const content = "Rất tiếc! Tetris không tìm thấy trang bạn đang cần... ";

const DelayP = styled.p`
width: ${(props) => props.width};
max-width: ${(props) => props.width}; 
position: relative;
top: 50%;  
margin: 0 auto;
border-right: 2px solid rgba(255,255,255,.75);
text-align: center;
white-space: nowrap;
overflow: hidden;

animation: typewriter 4s steps(${(props) =>
  props.contentLength}) 1s 1 normal both,
blinkTextCursor 500ms steps(${(props) => props.contentLength}) infinite normal;
}

@keyframes typewriter{
from{width: 0;}
to{width: ${(props) => props.width};}
}
@keyframes blinkTextCursor{
from{border-right-color: black;}
to{border-right-color: transparent;}
}
`;

const P = styled.p`
  animation: showDescription 0.25s 4.5s both;

  @keyframes showDescription {
    from {
      color: white;
    }
    to {
      color: rgb(107, 114, 128);
    }
  }
`;

export default function NotFoundPageContent() {
  const p = useRef(null);
  const [width, setWidth] = useState();
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });

  useLayoutEffect(() => {
    if (p.current) {
      setWidth(p.current.offsetWidth);
    }
  }, [isMd]);

  return (
    <>
      <div>
        <p ref={p} className="w-0 md:w-max h-0 overflow-hidden text-3xl">
          {content}
        </p>

        {width ? (
          <>
            <DelayP
              className="text-3xl"
              width={width + "px"}
              contentLength={content.length}
            >
              {content}
            </DelayP>

            <P className="p-3 text-center">
              Trang web bạn tìm kiếm không tồn tại hoặc hiện chưa phát triển.
            </P>

            <NavLink to="/" className="flex justify-center">
              <Button type="dash" shape="round">
                Quay về trang chủ.
              </Button>
            </NavLink>
          </>
        ) : (
          <>
            <p className="px-3 whitespace-normal text-red-700 text-2xl">
              {content}
            </p>

            <p className="p-3">
              Trang web bạn tìm kiếm không tồn tại hoặc hiện chưa phát triển.
            </p>

            <NavLink to="/" className="flex justify-center">
              <Button type="dash" shape="round">
                Quay về trang chủ.
              </Button>
            </NavLink>
          </>
        )}
      </div>
    </>
  );
}
