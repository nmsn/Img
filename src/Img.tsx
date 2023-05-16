import React from "react";
import useImage, { UseImageParamsType, ImgPromiseType } from "./useImg";

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

export default function Img({
  src,
  loader = null,
  unloader = null,
  decode = false,
  crossOrigin = "",
  ...imgProps
}: ImgProps) {
  const {
    src: actualSrc,
    loading,
    error,
  } = useImage({
    src,
    decode,
    crossOrigin,
  });

  if (actualSrc) return <img src={actualSrc} {...imgProps} />;
  if (loading) return loader;
  if (error) return unloader;

  return null;
}
