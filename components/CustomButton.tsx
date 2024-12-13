"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";

const Button = ({
  containerStyles,
  title,
  handleClick,
  btnType,
}: CustomButtonProps) => (
  <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span>{title}</span>
  </button>
);

export default Button;
