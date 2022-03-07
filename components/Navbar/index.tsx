import React, { HTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import { Button } from "../Button";
import brand from "../../public/images/images.jpg";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  alt: string;
}

const Navbar = ({ alt, ...props }: Props) => {
  return (
    <div {...props} className="navbarContainer">
      <div className="brandContainer">
        <Image src={brand} alt={alt} height={50} width={50} />
      </div>
      <div className="childContainer">
        <Button children={"Home"} variant={"Small"} />
        <Button children={"About"} variant={"Small"} />
        <Button children={"Contact"} variant={"Small"} />
      </div>
    </div>
  );
};

export default Navbar;
