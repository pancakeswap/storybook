import clsx from "clsx";
import { cloneElement, ElementType, isValidElement } from "react";
import { EXTERNAL_LINK_PROPS } from "../_pcs-shims";
import StyledButton from "./StyledButton";
import type { ButtonProps } from "./types";
import { scales, variants } from "./types";

const Button = <E extends ElementType = "button">(props: ButtonProps<E>): JSX.Element => {
  const {
    startIcon,
    endIcon,
    external = false,
    className,
    isLoading = false,
    disabled = false,
    variant = variants.PRIMARY,
    scale = scales.MD,
    children,
    ...rest
  } = props;
  const internalProps = external ? EXTERNAL_LINK_PROPS : {};
  const isDisabled = isLoading || disabled;

  return (
    <StyledButton
      $isLoading={isLoading}
      variant={variant}
      scale={scale}
      className={clsx(className, {
        "pancake-button--loading": isLoading,
        "pancake-button--disabled": isDisabled && !isLoading,
      })}
      disabled={isDisabled}
      {...internalProps}
      {...rest}
    >
      <>
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            // @ts-ignore
            mr: "0.5rem",
          })}
        {children}
        {isValidElement(endIcon) &&
          cloneElement(endIcon, {
            // @ts-ignore
            ml: "0.5rem",
          })}
      </>
    </StyledButton>
  );
};

export default Button;
