import "../styles/Components/Button/ButtonStyle.scss";
import "../styles/Components/Navbar/NavbarStyles.scss";
import "../styles/Components/Grid/Gridstyles.scss";
import * as nextImage from "next/image";
Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
