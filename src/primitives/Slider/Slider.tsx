import React, { useCallback } from "react";
import type { ChangeEvent } from "react";
import { Box } from "../Box";
import DottedSlider from "./DottedSlider";
import {
  BunnySlider,
  BarBackground,
  BarProgress,
  BunnyButt,
  StyledInput,
  SliderLabel,
  SliderLabelContainer,
} from "./styles";
import type SliderProps from "./types";

const Slider: React.FC<React.PropsWithChildren<SliderProps>> = ({
  name,
  min,
  max,
  value,
  onValueChanged,
  valueLabel,
  step = "any",
  disabled = false,
  variant = "bunny",
  dotStep,
  ...props
}) => {
  // Hooks must run unconditionally in the same order every render — keep
  // `useCallback` above the `variant === "dotted"` early return.
  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      onValueChanged(parseFloat(target.value));
    },
    [onValueChanged]
  );

  if (variant === "dotted") {
    return (
      <DottedSlider
        name={name}
        min={min}
        max={max}
        value={value}
        onValueChanged={onValueChanged}
        step={step}
        disabled={disabled}
        dotStep={dotStep}
        {...props}
      />
    );
  }

  const progressPercentage = (value / max) * 100;
  const isMax = value === max;
  let progressWidth: string;
  if (progressPercentage <= 10) {
    progressWidth = `${progressPercentage + 0.5}%`;
  } else if (progressPercentage >= 90) {
    progressWidth = `${progressPercentage - 4}%`;
  } else if (progressPercentage >= 60) {
    progressWidth = `${progressPercentage - 2.5}%`;
  } else {
    progressWidth = `${progressPercentage}%`;
  }
  const labelProgress = isMax ? "calc(100% - 12px)" : `${progressPercentage}%`;
  const displayValueLabel = isMax ? "MAX" : valueLabel;
  return (
    <Box position="relative" height="48px" {...props}>
      <BunnyButt disabled={disabled} />
      <BunnySlider>
        <BarBackground disabled={disabled} />
        <BarProgress style={{ width: progressWidth }} disabled={disabled} />
        <StyledInput
          name={name}
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleChange}
          $isMax={isMax}
          disabled={disabled}
        />
      </BunnySlider>
      {valueLabel && (
        <SliderLabelContainer>
          <SliderLabel progress={labelProgress}>{displayValueLabel}</SliderLabel>
        </SliderLabelContainer>
      )}
    </Box>
  );
};

export default Slider;
