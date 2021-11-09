import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
const root = document.querySelector("#root");

render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  root
);
