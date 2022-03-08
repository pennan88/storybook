import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import "../styles/Components/Button/Buttonstyle.scss";
import "../styles/globals.css";
import "../styles/Components/Navbar/NavbarStyles.scss";
import "../styles/Components/Grid/Gridstyles.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="globalWrapper">
      <Navbar alt={"Sheesh"} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
