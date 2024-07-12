import React from "react";
import { Html } from "@react-three/drei";
export default function Loader() {
  return (
    <Html className="absolute top-0 left-0 w-full h-full justify-center items-center">
      <div className="w-[10vw] h-[10vw] rounded-full">Loading...</div>
    </Html>
  );
}
