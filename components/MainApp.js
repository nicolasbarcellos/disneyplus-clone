import React from "react";
import Brands from "./Brands";
import DataColletion from "./DataColletion";
import SliderHome from "./SliderHome";

export default function MainApp() {
  return (
    <main
      className="relative min-h-screen after:bg-home after:bg-center after:z-[-1]
    after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0"
    >
      <SliderHome />
      <Brands />
      <DataColletion />
    </main>
  );
}
