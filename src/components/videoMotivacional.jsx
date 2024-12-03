import React from "react";
import { Box, Typography } from "@mui/joy";

const MainWithVideo = () => {
  return (
    <Box
        component="main"
        sx={{
        position: "relative",
        width: "100%",
        mx: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        }}
    >
        {/* Título principal */}
        <Typography
        level="h1"
        sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            mb: 2,
            textAlign: "center",
        }}
        >
        Título Principal
        </Typography>

        {/* Subtítulos */}
        <Typography
        level="h2"
        sx={{
            fontSize: "1.5rem",
            mb: 1,
            textAlign: "center",
        }}
        >
        Subtítulo 1
        </Typography>
        <Typography
        level="h3"
        sx={{
            fontSize: "1.25rem",
            mb: 2,
            textAlign: "center",
        }}
        >
        Subtítulo 2
        </Typography>

        {/* Box con el video de Instagram */}
        <Box
        sx={{
            width: "100%",
            maxWidth: 500, // Máximo ancho del contenedor del video
            aspectRatio: "16 / 9",
            backgroundColor: "neutral.100",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "lg",
            borderRadius: "lg",
            overflow: "hidden",
        }}
        >
        <video
            controls
            style={{ width: "100%", height: "100%", borderRadius: "8px" }}
        >
            <source src="/video/videomotivacional.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
        </video>
        </Box>
    </Box>
  );
};

export default MainWithVideo;

