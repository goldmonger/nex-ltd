import Composition from "@/components/common/Composition";
import Layer_0 from "@/components/common/Layer_0";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Composition>
      <Layer_0>
        <Component {...pageProps} />
      </Layer_0>
    </Composition>
  );
}
