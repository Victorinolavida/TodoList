import { useEffect, useRef, useState } from "react";

export default function UseFetch(url) {
  //   if (!url) throw new Error("no url");

  const isMonted = useRef(true);

  useEffect(() => {
    return () => {
      isMonted.current = false;
    };
  }, []);

  const [state, setstate] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    setstate({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((rep) => rep.json())
      .then((data) => {
        // setTimeout(() => {
        if (isMonted.current) {
          setstate({
            error: null,
            loading: false,
            data,
          });
        } else console.log("setstate no se llamó");
        ////
        // }, 5000);
      });
    //   .catch((error) => {
    //     setstate({
    //       error: error.message,
    //       loading: false,
    //       data: undefined,
    //     });
    //   });
  }, [url]);
  return state;
}
