import { useEffect, useState } from "react";

export default function CartLogo({ animation, setAnimation, className }) {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const [transform, setTransform] = useState("translateX(0px)");

  async function runCycle(speed) {
    setTransform("skewX(2.5deg) translate(-4px, 6px) scaleY(90%)");
    await sleep(100 * speed);

    setTransform("skewX(5deg) translateX(-8px)");
    await sleep(600 * speed);

    setTransform("scaleY(90%) translateY(6px)");
    await sleep(100 * speed);

    setTransform("skewX(-5deg) translateX(5px)");
    await sleep(600 * speed);

    setTransform("scaleY(90%) translateY(6px)");
    await sleep(100 * speed);

    setTransform("");
  }

  useEffect(() => {
    if (animation == "seek") {
      runCycle(1);
    }
  }, [animation]);

  return (
    <svg
      className={className}
      strokeLinejoin="round"
      strokeLinecap="round"
      viewBox="-6 -3 110 112"
      width="70px"
      height="70px"
    >
      <g
        id="body"
        style={{
          transform: transform,
          transition: "transform 0.2s ease",
          transformOrigin: "center",
          transformBox: "fill-box",
        }}
      >
        <path
          strokeWidth="6.4"
          stroke="#333"
          d="M10 20 H 20 L 30 75 H 80 M 22 31 H 84 L 75 66 H 28"
          fill="none"
        />
        <g>
          <circle id="cir" r="5" cx="30" cy="85" fill="#333" />
          <use href="#cir" x="47" />
        </g>
        <g>
          <g>
            <g>
              <use href="#cir" x="12" y="-42" />
              <circle r="1.5" cx="43.5" cy="41.5" fill="white" />
            </g>
            <g>
              <use href="#cir" x="33" y="-42" />
              <circle r="1.5" cx="64.5" cy="41.5" fill="white" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
