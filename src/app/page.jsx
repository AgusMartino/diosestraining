// Código actualizado
"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/joy";
import { InlineWidget } from "react-calendly";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SuccessCases = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cases = [
    {
      beforeImg: "image/caso1Antes.jpg",
      afterImg: "image/caso1Despues.jpg",
      title: "Caso 1",
      description: "Descripción del caso de éxito 1.",
    },
    {
      beforeImg: "image/caso2Antes.jpg",
      afterImg: "image/caso2Despues.jpg",
      title: "Caso 2",
      description: "Descripción del caso de éxito 2.",
    },
    {
      beforeImg: "image/caso3Antes.jpg",
      afterImg: "image/caso3Despues.jpg",
      title: "Caso 3",
      description: "Descripción del caso de éxito 3.",
    },
    {
      beforeImg: "image/caso4Antes.jpg",
      afterImg: "image/caso4Despues.jpg",
      title: "Caso 4",
      description: "Descripción del caso de éxito 4.",
    },
    {
      beforeImg: "image/caso5Antes.jpg",
      afterImg: "image/caso5Despues.jpg",
      title: "Caso 5",
      description: "Descripción del caso de éxito 5.",
    },
    {
      beforeImg: "image/caso6Antes.jpg",
      afterImg: "image/caso6Despues.jpg",
      title: "Caso 6",
      description: "Descripción del caso de éxito 6.",
    },
    {
      beforeImg: "image/caso7Antes.jpg",
      afterImg: "image/caso7Despues.jpg",
      title: "Caso 7",
      description: "Descripción del caso de éxito 7.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [cases.length]);

  return (
    <Box sx={{ textAlign: "center", p: 4, width: "100%" }}>
      <Typography level="h2" sx={{ fontSize: "2rem", fontWeight: "bold", mb: 4 }}>
        Casos de Éxito
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <button onClick={() => setActiveIndex((activeIndex - 1 + cases.length) % cases.length)}>⬅</button>
        <Box sx={{ mx: 4, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "1200px", height: "700px" }}>
          <Box sx={{ display: "flex", gap: 2, width: "100%", height: "100%", maxHeight: "700px" }}>
            <img
              src={cases[activeIndex].beforeImg}
              alt="Antes"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <img
              src={cases[activeIndex].afterImg}
              alt="Después"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
          <Typography level="h3" mt={2}>
            {cases[activeIndex].title}
          </Typography>
          <Typography level="body1" mt={1}>
            {cases[activeIndex].description}
          </Typography>
        </Box>
        <button onClick={() => setActiveIndex((activeIndex + 1) % cases.length)}>➡</button>
      </Box>
    </Box>
  );
};

const Redes = () => {
  const newSectionItems = [
    {
      imgSrc: "image/instagram.jpg",
      text: "Instagram",
      url: "https://www.enlace1.com",
    },
    {
      imgSrc: "image/twitter.jpg",
      text: "Twitter",
      url: "https://www.enlace2.com",
    },
    {
      imgSrc: "image/spotify.jpg",
      text: "Spotify",
      url: "https://www.enlace3.com",
    },
    {
      imgSrc: "image/youtube.jpg",
      text: "Youtube",
      url: "https://www.enlace4.com",
    },
  ];

  return (
    <Box sx={{ textAlign: "center", p: 4, width: "40%", mt: 6 , backgroundColor: "#f5f5f5", color: "#000000"}}>
      <Typography level="h2" sx={{ fontSize: "2rem", fontWeight: "bold", mb: 2,color: "#000000" }}>
        Mis redes Sociales
      </Typography>
      <Typography level="h3" sx={{ fontSize: "1.5rem", mb: 4,color: "#000000" }}>
        Este es un subtítulo
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 4 }}>
        {newSectionItems.map((item, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <img
                src={item.imgSrc}
                alt={item.text}
                style={{ width: "50px", height: "50px", borderRadius: "8px", cursor: "pointer" }}
              />
            </a>
            <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography level="body1" sx={{ cursor: "pointer" }}>
                {item.text}
              </Typography>
            </a>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const FormSection = () => {
  return (
    <Box sx={{ textAlign: "center", p: 4, width: "100%", mt: 6 }}>
      <Typography level="h2" sx={{ fontSize: "2rem", fontWeight: "bold", mb: 2 }}>
        Paso 3
      </Typography>
      <Typography level="h3" sx={{ fontSize: "1.5rem", mb: 4 }}>
        ¡Estamos aquí para ayudarte!
      </Typography>
      <a href="https://www.enlaceformulario.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
        <Typography
          level="body1"
          sx={{
            fontSize: "1.25rem",
            color: "primary.500",
            fontWeight: "bold",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          IR AL FORMULARIO
        </Typography>
      </a>
    </Box>
  );
};
const Inicio = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <Box sx={{ width: "100%" }}>
        <Navbar />
      </Box>

      {/* Contenido principal */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", p: 2 }}>
        {/* Sección de video motivacional */}
        <Box sx={{ position: "relative", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Typography level="h1" sx={{ fontSize: "2rem", fontWeight: "bold", mb: 2, textAlign: "center" }}>
            Paso 1
          </Typography>
          <Typography level="h2" sx={{ fontSize: "1.5rem", mb: 1, textAlign: "center" }}>
            Subtítulo 1
          </Typography>
          <Typography level="h3" sx={{ fontSize: "1.25rem", mb: 2, textAlign: "center" }}>
            Subtítulo 2
          </Typography>
          <Box
            sx={{
              width: "100%",
              maxWidth: "1200px",
              height: "700px",
              backgroundColor: "neutral.100",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "lg",
              borderRadius: "lg",
              overflow: "hidden",
            }}
          >
            <video controls style={{ width: "100%", height: "100%", borderRadius: "8px" }}>
              <source src="/video/videomotivacional.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          </Box>
        </Box>

        {/* Sección de Calendly */}
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", mt: 4 }}>
          <Typography level="h1" sx={{ fontSize: "2rem", fontWeight: "bold", mb: 2, textAlign: "center" }}>
            Paso 2
          </Typography>
          <Typography level="h2" sx={{ fontSize: "1.5rem", mb: 1, textAlign: "center" }}>
            Agenda una reunión lo antes posible
          </Typography>
          <Box sx={{ width: "100%", maxWidth: "1200px", boxShadow: "lg", borderRadius: "lg", overflow: "hidden", height: "90%" }}>
            <InlineWidget
              url="https://calendly.com/maxispano1/consultoria"
              styles={{
                height: "800px",  // Aumenta la altura para hacerlo más grande
                width: "100%",    // Mantén el ancho en 100%
              }}
              pageSettings={{
                backgroundColor: "white",
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Sección del Formulario */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", mt: 6 }}>
        <FormSection />
      </Box>

      {/* Casos de Éxito */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", mt: 6 }}>
        <SuccessCases />
      </Box>

      {/* Redes Sociales */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", mt: 6 }}>
        <Redes />
      </Box>

      {/* Footer */}
      <Box sx={{ width: "100%" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Inicio;



