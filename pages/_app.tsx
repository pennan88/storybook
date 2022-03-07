import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import "../styles/Button/Buttonstyle.scss";
import "../styles/globals.css";
import "../styles/Navbar/NavbarStyles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="globalWrapper">
      <Navbar alt={"Sheesh"} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
