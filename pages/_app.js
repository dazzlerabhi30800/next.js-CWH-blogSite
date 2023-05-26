import { useState } from "react";
import "@/styles/globals.css";
import "../styles/style.css";
import Navbar from "@/Components/Navbar";

export default function App({ Component, pageProps }) {
  const [color, setColor] = useState("#fb3f68");
  return (
    <>
      <Navbar setColor={setColor} />
      <Component {...pageProps} color={color} />
      <style jsx global>
        {`
          body {
            background-color: ${color} !important;
          }
        `}
      </style>
    </>
  );
}
