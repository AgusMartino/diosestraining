"use client";
import React from "react";
import Link from "next/link";
import {
  Sheet,
} from "@mui/joy";
import Image from "next/image";
import dioses from "@/img/diosesIcon.jpg"; // Imagen del logo
import fondoNavbar from "@/img/fondo2.png"; // Imagen para el fondo


const Navbar = () => {
  return (
    <Sheet
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "10vh",
        background: `
          radial-gradient(circle, #A8A8A8, #7D7D7D)`,
        filter: "contrast(1.2) brightness(0.9)", // Mejora visual
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div
        style={{
          content: "",
          position: "absolute",
          inset: 0,
          background: `url('https://www.transparenttextures.com/patterns/asfalt-dark.png')`,
          opacity: 0.1,
        }}
      ></div>
      <Image src={dioses} alt="Logo" width={75} height={75} />
    </Sheet>
  );
};

export default Navbar;
