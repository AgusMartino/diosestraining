import InitColorSchemeScript from "@mui/joy/InitColorSchemeScript";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dioses Training",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body
        className={`${inter.className} max-w-screen flex flex-col min-h-screen`}
      >
        <InitColorSchemeScript />
        <CssVarsProvider defaultMode="dark">
          <CssBaseline />

          {/* Contenedor principal */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh", // Asegura que la página ocupe toda la altura de la pantalla
            }}
          >
            {/* Contenido principal */}
            <main
              style={{
                flex: 1, // Hace que el contenido ocupe el espacio restante
              }}
            >
              {children}
            </main>
          </div>
        </CssVarsProvider>
      </body>
    </html>
  );
}
