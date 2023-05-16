import React, { useRef, forwardRef } from "react";
import useImage, { UseImageParamsType } from "./useImg";
import useIntersection from "./useIntersection";
import { LegacyRef } from "react";

type ImgBaseProps = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  "src" | "dangerouslySetInnerHTML"
>;

type ImgExtraProps = Omit<UseImageParamsType, "src"> & {
  src: UseImageParamsType["src"];
  loader?: JSX.Element | null;
  unloader?: JSX.Element | null;
};

export type ImgProps = ImgBaseProps & ImgExtraProps;

const Img = (
  {
    src,
    loader = null,
    unloader = null,
    decode = false,
    crossOrigin = "",
    width,
    height,
    type,
    ...imgProps
  }: ImgProps,
  ref: LegacyRef<HTMLImageElement> | undefined
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [inView] = useIntersection(containerRef);

  const {
    src: actualSrc,
    loading,
    error,
  } = useImage({
    src,
    decode,
    crossOrigin,
    type,
    timing: inView,
  });

  return (
    <div ref={containerRef} style={{ width, height }}>
      {(() => {
        if (actualSrc)
          return (
            <img
              ref={ref}
              src={actualSrc}
              style={{ width: "100%", height: "100%" }}
              {...imgProps}
            />
          );
        if (loading) return loader;
        if (error) return unloader;
      })()}
    </div>
  );
};

export default forwardRef<HTMLImageElement, ImgProps>(Img);
