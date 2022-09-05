import { useEffect, useState } from "react";
import Image from "next/image";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function BGImage({hrefBg}) {
  const [width, setWidth] = useState();
  const [height, setheight] = useState();

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);

    setheight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);

      setheight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <div className="fixed -z-50 top-2">
        <Image
          src={hrefBg}
          width={width}
          height={height}
          objectFit="cover"
          alt=""
        />
      </div>
    );
  }

  return null;
}

export default BGImage;
