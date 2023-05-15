import React from "react";
import useImage, { useImageParams } from "./useImg";

export type ImgProps = Omit<
  React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >,
  "src"
> &
  Omit<useImageParams, "src"> & {
    src: useImageParams["src"];
    loader?: JSX.Element | null;
    unloader?: JSX.Element | null;
  };

export default function Img({
  src,
  loadImg,
  loader = null,
  unloader = null,
  ...imgProps
}: ImgProps) {
  const {
    src: actualSrc,
    loading,
    error,
  } = useImage({
    src,
    loadImg,
  });

  if (actualSrc) return <img src={actualSrc} {...imgProps} />;
  if (loading) return loader;
  if (error) return unloader;

  return null;
}
