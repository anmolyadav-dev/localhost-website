import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbarchoice from "./components/NavbarChoice";
import { AppWrapper } from "@/context";
import AuthProvider from "./provider/AuthProvider";
import RecoilContextProvider from "./provider/RecoilContextProvider";

export const metadata: Metadata = {

  title: "Localhost, Dev Community of IIIT Pune",
  description: "Join the dynamic Dev Community at IIIT Pune, igniting innovation since 2022! Explore coding challenges, hackathons, workshops, and tech talks, fostering creativity and problem-solving skills. Engage with emerging technologies and industry collaborations, shaping the future of tech. Discover a vibrant space for learning and experimentation. Join us on the journey of discovery!",
  twitter:{
    title:"Localhost, Dev Community of IIIT Pune",
    description:"Join IIIT Pune's Dev Community: Igniting innovation since 2022! Explore coding challenges, hackathons, and tech talks. Shape the future of tech with us!"
    
  },
  openGraph:{
    images:[{url:"./opengraph-image.png"}]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <RecoilContextProvider>
            <AppWrapper>
              <Navbarchoice />
              <Toaster position="bottom-right" />
              {children}
            </AppWrapper>
          </RecoilContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
