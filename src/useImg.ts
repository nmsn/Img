import { useEffect, useState } from "react";

// TODO 使用 image 加载一遍，真实 img 还会加载么
// decode
function imgPromise(src: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const i = new Image();
    i.onload = () => resolve(src);
    i.onerror = reject;
    i.src = src;
  });
}

export interface useImageParams {
  loadImg?: (src: string) => Promise<string>;
  src: string;
}

function useImage({ loadImg = imgPromise, src }: useImageParams): {
  src: string | undefined;
  loading: boolean;
  error: any;
} {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [value, setValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    loadImg(src)
      .then((src) => {
        setLoading(false);
        setValue(src);
      })
      .catch((err) => {
        setLoading(false);
        setError(error);
      });
  }, [src]);

  return { loading: loading, src: value, error: error };
}
export default useImage;
