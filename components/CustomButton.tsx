"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const Button = ({ containerStyles, title, handleClick }: CustomButtonProps) => (
  <button
    disabled={false}
    type={"button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span>{title}</span>
  </button>
);

export default Button;
