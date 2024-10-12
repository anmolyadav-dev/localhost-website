
"use client";
import { ChakraProvider } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

function ChakraProviders({ children }: Props) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export default ChakraProviders;
