import React from "react";
import GridLoader from "react-spinners/GridLoader";

export default function Loader() {
  return (
    <div className='loading'>
      <GridLoader size={20} margin={5} color={"#040714"} />
    </div>
  );
}
