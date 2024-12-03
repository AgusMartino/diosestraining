"use client";
import React, { useState } from "react";
import { Box, Typography, Button, Select, Option } from "@mui/joy";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const InteractiveCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("10:00"); // Hora predeterminada

  const handleGoogleCalendar = () => {
    // Convertir fecha seleccionada y hora en formato ISO
    const [hours, minutes] = selectedTime.split(":");
    const startDate = new Date(selectedDate);
    startDate.setHours(parseInt(hours), parseInt(minutes));

    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + 30); // Duración: 30 minutos

    // Crear URL para Google Calendar
    const calendarBaseUrl = "https://calendar.google.com/calendar/u/0/r/eventedit";
    const eventDetails = new URLSearchParams({
      text: "Reunión de consulta",
      dates: `${startDate.toISOString().replace(/[-:]/g, "").split(".")[0]}Z/${
        endDate.toISOString().replace(/[-:]/g, "").split(".")[0]
      }Z`,
      details: "Reunión para discutir el proyecto",
      location: "Google Meet",
    });

    const fullUrl = `${calendarBaseUrl}?${eventDetails.toString()}`;
    window.open(fullUrl, "_blank");
  };

  return (
    <Box
      component="section"
      sx={{
        mt: 4,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Título */}
      <Typography
        level="h1"
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          mb: 2,
          textAlign: "center",
        }}
      >
        Selecciona Fecha y Hora
      </Typography>

      {/* Calendario */}
      <Box sx={{ mb: 3 }}>
        <Typography
          level="h2"
          sx={{
            fontSize: "1.25rem",
            mb: 1,
            textAlign: "center",
          }}
        >
          Escoge una fecha
        </Typography>
        <Calendar onChange={setSelectedDate} value={selectedDate} />
      </Box>

      {/* Selector de hora */}
      <Box sx={{ mb: 3, textAlign: "center" }}>
        <Typography
          level="h2"
          sx={{
            fontSize: "1.25rem",
            mb: 1,
          }}
        >
          Escoge una hora
        </Typography>
        <Select
          value={selectedTime}
          onChange={(e, value) => setSelectedTime(value)}
          sx={{
            minWidth: 150,
            textAlign: "center",
          }}
        >
          {[
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
          ].map((time) => (
            <Option key={time} value={time}>
              {time}
            </Option>
          ))}
        </Select>
      </Box>

      {/* Botón para abrir Google Calendar */}
      <Button
        onClick={handleGoogleCalendar}
        sx={{
          fontSize: "1rem",
          fontWeight: "bold",
          py: 1,
          px: 3,
          borderRadius: "lg",
        }}
      >
        Reservar en Google Calendar
      </Button>
    </Box>
  );
};

export default InteractiveCalendar;
