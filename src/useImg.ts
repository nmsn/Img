import { useEffect, useState, useRef } from "react";

export type ImgPromiseType = { decode?: boolean; crossOrigin?: string };

function imgPromise(src: string, options?: ImgPromiseType): Promise<string> {
  const { decode = false, crossOrigin = "" } = options || {};
  return new Promise((resolve, reject) => {
    const i = new Image();
    if (crossOrigin) i.crossOrigin = crossOrigin;
    i.onload = () => {
      decode && i.decode
        ? i
            .decode()
            .then(() => resolve(src))
            .catch(reject)
        : resolve(src);
    };
    i.onerror = reject;
    i.src = src;
  });
}

export interface UseImageParamsType {
  src: string;
  onCallback?: (data: string, err?: Error) => void;
  type?: "eager" | "lazy";
  timing?: boolean;
  decode?: ImgPromiseType["decode"];
  crossOrigin?: ImgPromiseType["crossOrigin"];
}

interface UseImageResultType {
  src: string | undefined;
  loading: boolean;
  error: any;
}

function useImage({
  src,
  onCallback,
  type = "eager",
  timing,
  decode,
  crossOrigin,
}: UseImageParamsType): UseImageResultType {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState<string | undefined>(undefined);

  const valueChange = useRef<string>("");

  useEffect(() => {
    if (type === "eager" && !valueChange.current) {
      setLoading(true);
      imgPromise(src, { decode, crossOrigin })
        .then((src) => {
          setLoading(false);
          setValue(src);
          valueChange.current = src;
          onCallback?.(src);
        })
        .catch((err) => {
          setLoading(false);
          setError(error);
          onCallback?.(src, err);
        });
    }
  }, [src]);

  useEffect(() => {
    if (type === "lazy" && timing && !valueChange.current) {
      setLoading(true);
      imgPromise(src, { decode, crossOrigin })
        .then((src) => {
          setLoading(false);
          setValue(src);
          valueChange.current = src;
          onCallback?.(src);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(err);
          onCallback?.(src, err);
        });
    }
  }, [src, timing, value]);

  return { loading: loading, src: value, error: error };
}
export default useImage;
