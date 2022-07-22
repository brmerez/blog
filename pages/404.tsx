import React, { useRef } from "react";
import Anchor from "../components/Anchor";

export default function NotFound() {
  return (
    <div className="w-full h-[70vh] flex items-center justify-center">
      <div>
        <h4 className="text-white text-3xl text-center">
          Ih mané! Tá perdido? (404)
        </h4>
        <Anchor to="/">
          <p className="text-cyan-400 underline text-center mt-4">
            Me tira daqui!
          </p>
        </Anchor>
      </div>
    </div>
  );
}
