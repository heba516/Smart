import Image from "next/image";
import React from "react";

interface IProps {
  src: string;
  info: string;
}

const TheftImage = ({ src, info }: IProps) => {
  return (
    <div className="space-y-1">
      <Image src={src} alt="live camera feed" width={300} height={222} />
      <p className="font-medium">{info}</p>
    </div>
  );
};

export default TheftImage;
