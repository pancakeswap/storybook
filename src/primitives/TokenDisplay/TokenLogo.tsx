/**
 * TokenLogo — image-with-fallback primitive.
 * Ported from pancakeswap/pancake-frontend packages/uikit/src/components/TokenLogo/TokenLogo.tsx
 */
import { useState } from "react";
import { styled } from "styled-components";
import { DefaultTokenIcon } from "../Icons";

const BAD_SRCS: Record<string, true> = {};

export interface TokenLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  srcs: string[];
  size?: string;
}

const StyledImg = styled.img<{ $isLoaded: boolean; $size: string }>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  transition: opacity 0.3s ease;
  opacity: ${({ $isLoaded }) => ($isLoaded ? 1 : 0)};
`;

const TokenLogo: React.FC<TokenLogoProps> = ({ srcs, size = "40px", alt, ...rest }) => {
  const [, refresh] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const src = srcs.find((s) => !BAD_SRCS[s]);

  if (src) {
    return (
      <StyledImg
        {...rest}
        alt={alt}
        src={src}
        $isLoaded={isLoaded}
        $size={size}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          BAD_SRCS[src] = true;
          setIsLoaded(false);
          refresh((i) => i + 1);
        }}
      />
    );
  }

  return <DefaultTokenIcon width={size} height={size} />;
};

export default TokenLogo;
