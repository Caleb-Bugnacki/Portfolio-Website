"use client";
import React from "react";
import { useLottie } from "lottie-react";
import mouseScroll from "../../../../public/mouseScrollAnimation.json";
import ScrollLink from "../ScrollLink";

const style = {
  height: 50,
  width: 50,
};

const MouseScrollAnimation = () => {
  const options = {
    animationData: mouseScroll,
    loop: true,
  };

  const { View } = useLottie(options, style);

  return <>{View}</>;
};

export default MouseScrollAnimation;
