import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbarchoice from "./components/NavbarChoice";
import { AppWrapper } from "@/context";

export const metadata: Metadata = {
  title: "Localhost",
  description: "Dev Community of IIIT Pune",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          <Navbarchoice />
          <Toaster position="bottom-right" />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
