"use client";
import Button from "@/components/Button/Button";
import React from "react";

const Demo = () => {
  const handleCustomButtonClick = (event: React.MouseEvent) => {
    event.preventDefault;
    console.log((event.target as HTMLButtonElement).name);
  };

  return (
    <div>
      Soy el componente Demo
      <Button name="myButton" onClick={handleCustomButtonClick}>
        Soy un boton
      </Button>
    </div>
  );
};

export default Demo;
