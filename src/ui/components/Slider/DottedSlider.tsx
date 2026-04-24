import React, { useCallback, useRef } from "react";
import { Box } from "../Box";
import { DottedBunnyBar, DottedBunnyBack, DottedBunnyFront, DottedRail, DottedRoot, DottedStop } from "./styles";
import type SliderProps from "./types";

/**
 * Dotted-rail Slider variant — pixel-ported from the perps storybook's
 * `.op-slider` (see `~/Code/storybook/src/perps/OrderPanel.css`). Renders
 * a grey rail with clickable stops at `0, dotStep, 2×dotStep, … 100` percent.
 * Values between stops are still reachable via drag; clicking a stop snaps
 * exactly to it.
 *
 * The "bunny" is a two-piece SVG — a fixed back body anchored at 0%, and a
 * draggable front face that rides the fill bar. The back stays put so the
 * visual identity matches the bunny slider at 0%.
 */
const SLIDER_TRACK_INSET = 10;

const BunnyBack: React.FC = () => (
  <svg width="17.3" height="17.3" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#ds-bb-clip)">
      <path
        d="M9.58803 5.86481C7.72935 6.36284 8.02539 9.03328 8.76388 11.7894C9.50238 14.5455 10.5812 17.0061 12.4399 16.5081C14.2986 16.0101 15.2334 13.0098 14.4949 10.2538C13.7564 7.49766 11.4467 5.36678 9.58803 5.86481Z"
        fill="#0098A1"
      />
      <path
        d="M13 12.9999H9.89844C10.3225 14.3783 10.2142 15.7127 9.43848 16.4911C8.07787 17.8558 5.91305 16.2597 3.89551 14.2362C3.00718 13.3453 2.20188 12.4252 1.69434 11.5585C1.25854 10.9692 1 10.2403 1 9.45108C1.00024 5.8883 3.88839 3.00015 7.45117 2.99991H13V12.9999Z"
        fill="#1FC7D4"
      />
      <path
        d="M6.11115 2.22486C6.79693 3.41267 5.77784 4.33455 4.52793 5.05618C3.27802 5.77782 1.97011 6.19944 1.28433 5.01163C0.598546 3.82382 1.1635 2.11536 2.41341 1.39373C3.66332 0.67209 5.42537 1.03705 6.11115 2.22486Z"
        fill="#1FC7D4"
      />
    </g>
    <defs>
      <clipPath id="ds-bb-clip">
        <rect width="17.3" height="17.3002" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const BunnyFront: React.FC = () => (
  <svg width="32" height="48" viewBox="0 0 32 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.5 22.75C21.5316 23.0706 22.5877 23.6902 23.4512 24.5537C25.4684 26.5711 26.1589 29.6363 24.7988 30.9971C23.6131 32.1828 21.8166 31.1265 20.0391 29.5H19.25C19.6789 30.8788 19.5722 32.2149 18.7939 32.9932C17.434 34.3529 15.2704 32.7626 13.2539 30.7461C12.8424 30.3346 12.4503 29.9156 12.0957 29.5H3.5V19.5H20.5V22.75Z"
      fill="#1FC7D4"
    />
    <g filter="url(#ds-fb-shadow)">
      <path
        d="M18.3877 1.5C20.6586 1.5 22.4999 2.67164 22.5 7.13379C22.5 8.24905 22.3847 9.31189 22.1768 10.2783C25.3091 12.1981 27.4999 15.3491 27.5 18.7695C27.5 24.3293 21.7148 25.5 15.5 25.5C9.28518 25.5 3.5 24.3293 3.5 18.7695C3.50008 15.7911 5.16094 13.0162 7.6582 11.0811C7.3631 10.7389 7.07092 10.4055 6.7832 10.0918C4.31102 7.39601 4.41517 4.62435 6.48828 3.5127C8.56166 2.40114 10.8965 2.55076 13.3848 6.55273C13.7698 7.17196 14.1028 7.79487 14.3838 8.40918C14.7477 8.37547 15.1143 8.35796 15.4824 8.35742C15.4146 7.93774 15.3458 7.52624 15.2695 7.13379C14.6158 3.77111 16.117 1.50023 18.3877 1.5Z"
        fill="url(#ds-fb-grad)"
      />
    </g>
    <path
      d="M16.2842 17.4463C16.5593 17.4678 16.7655 17.7082 16.7441 17.9834C16.7159 18.3475 16.7793 18.8899 17.0352 19.3213C17.2705 19.7178 17.6844 20.0556 18.4756 20.0557C18.7517 20.0557 18.9756 20.2795 18.9756 20.5557C18.9754 20.8317 18.7516 21.0557 18.4756 21.0557C17.376 21.0556 16.6566 20.5718 16.2363 19.9287C15.8159 20.5715 15.0975 21.0557 13.998 21.0557C13.722 21.0557 13.4982 20.8317 13.498 20.5557C13.498 20.2795 13.7219 20.0557 13.998 20.0557C14.7895 20.0557 15.2031 19.7179 15.4385 19.3213C15.6944 18.8899 15.7577 18.3476 15.7295 17.9834C15.7081 17.7082 15.9143 17.4678 16.1895 17.4463H16.2842ZM11.5 14.5C12.0523 14.5 12.5 14.8954 12.5 16C12.5 17.1046 12.0523 17.5 11.5 17.5C10.9477 17.5 10.5 17.1046 10.5 16C10.5 14.8954 10.9477 14.5 11.5 14.5ZM20.5 14.5C21.0523 14.5 21.5 14.8954 21.5 16C21.5 17.1046 21.0523 17.5 20.5 17.5C19.9477 17.5 19.5 17.1046 19.5 16C19.5 14.8954 19.9477 14.5 20.5 14.5Z"
      fill="black"
    />
    <defs>
      <filter
        id="ds-fb-shadow"
        x="1.5"
        y="0"
        width="28"
        height="28"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="0.5" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <linearGradient id="ds-fb-grad" x1="15.5" y1="1.5" x2="15.5" y2="25.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="#53DEE9" />
        <stop offset="1" stopColor="#1FC7D4" />
      </linearGradient>
    </defs>
  </svg>
);

const DottedSlider: React.FC<React.PropsWithChildren<SliderProps>> = ({
  min,
  max,
  value,
  onValueChanged,
  disabled = false,
  dotStep = 25,
  step: _ignored,
  name: _nameIgnored,
  valueLabel: _labelIgnored,
  variant: _variantIgnored,
  ...props
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const clampPct = (pct: number) => Math.max(0, Math.min(100, pct));

  const range = max - min;
  const pct = range > 0 ? clampPct(((value - min) / range) * 100) : 0;
  // Front bunny drifts -16px at 100% so its head stays inside the rail.
  const bunnyShift = Math.round((-16 * pct) / 100);

  const pctFromClientX = useCallback((clientX: number) => {
    if (!rootRef.current) return 0;
    const { left, width } = rootRef.current.getBoundingClientRect();
    const trackLeft = left + SLIDER_TRACK_INSET;
    const trackWidth = width - SLIDER_TRACK_INSET * 2;
    if (trackWidth <= 0) return 0;
    return clampPct(Math.round(((clientX - trackLeft) / trackWidth) * 100));
  }, []);

  const setFromPct = useCallback(
    (nextPct: number) => {
      const clamped = clampPct(nextPct);
      onValueChanged(min + (range * clamped) / 100);
    },
    [min, range, onValueChanged]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      e.preventDefault();
      setFromPct(pctFromClientX(e.clientX));
      const onMove = (ev: MouseEvent) => setFromPct(pctFromClientX(ev.clientX));
      const onUp = () => {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    },
    [disabled, pctFromClientX, setFromPct]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (disabled) return;
      setFromPct(pctFromClientX(e.touches[0].clientX));
      const onMove = (ev: TouchEvent) => setFromPct(pctFromClientX(ev.touches[0].clientX));
      const onEnd = () => {
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("touchend", onEnd);
      };
      window.addEventListener("touchmove", onMove);
      window.addEventListener("touchend", onEnd);
    },
    [disabled, pctFromClientX, setFromPct]
  );

  const stops: number[] = [];
  for (let i = 0; i <= 100; i += dotStep) stops.push(Math.min(100, i));
  if (stops[stops.length - 1] !== 100) stops.push(100);

  return (
    <Box position="relative" {...props}>
      <DottedRoot ref={rootRef} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart} aria-disabled={disabled}>
        <DottedRail $disabled={disabled} />
        <DottedBunnyBar $width={`calc(${pct / 100} * (100% - 20px))`} $disabled={disabled} />
        <DottedBunnyBack>
          <BunnyBack />
        </DottedBunnyBack>
        {stops.map((m) => (
          <DottedStop
            key={m}
            type="button"
            $filled={pct >= m}
            $disabled={disabled}
            style={{ left: `calc(${m / 100} * (100% - 20px) + 6px)` }}
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              if (disabled) return;
              setFromPct(m);
            }}
            aria-label={`${m}%`}
          />
        ))}
        <DottedBunnyFront style={{ left: `calc(${pct / 100} * (100% - 20px) + ${bunnyShift}px)` }} $disabled={disabled}>
          <BunnyFront />
        </DottedBunnyFront>
      </DottedRoot>
    </Box>
  );
};

export default DottedSlider;
