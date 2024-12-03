"use client";
import React from "react";
import { Box, Typography, Sheet } from "@mui/joy";

const Footer = () => {
  return (
    <Sheet
      sx={{
        display: "flex",
        justifyContent: "center", // Centra los elementos horizontalmente
        alignItems: "center", // Centra los elementos verticalmente
        padding: "16px",
        height: "120px", // Ajusta la altura según sea necesario
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
        background: `
        radial-gradient(circle, #A8A8A8, #7D7D7D)`,
      }}
    >
      <Box
        sx={{
          textAlign: "center", // Centra el texto horizontalmente
        }}
      >
        <Typography 
          variant="h6" // Texto superior con tamaño más grande
          sx={{ 
            fontSize: "1.25rem", // Ajusta el tamaño de letra
            fontWeight: "bold", // Opción para destacar
            marginBottom: "4px",
            color: "Black" 
          }}
        >
          DIOSES TRAINING
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ fontSize: "0.875rem", color: "Black" }}
        >
          TODOS LOS DERECHOS RESERVADOS
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ fontSize: "0.875rem", color: "Black" }}
        >
          POLÍTICAS DE PRIVACIDAD - TÉRMINOS Y CONDICIONES - DESCARGO DE RESPONSABILIDAD
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ fontSize: "0.875rem", color: "Black" }}
        >
          © 2024 EXPANSION
        </Typography>
      </Box>
    </Sheet>
  );
};

export default Footer;
