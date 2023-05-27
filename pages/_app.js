import { useEffect, useState } from "react";
import "@/styles/globals.css";
import "../styles/style.css";
import Navbar from "@/Components/Navbar";

export default function App({ Component, pageProps }) {
  const isServer = typeof window === "undefined";
  const [color, setColor] = useState(
    !isServer ? localStorage.getItem("bgcolor") : "#fb3f68"
  );
  useEffect(() => {
    localStorage.setItem("bgcolor", color);
  }, [color]);

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
