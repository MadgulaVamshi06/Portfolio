import React from 'react'
import { photo } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
       className="w-[150px] h-[200px] lgl:w-[280px] lgl:h-[350px] z-10"
        src={photo}
        alt="bannerImg"
      />
    </div>
  );
}

export default RightBanner