import React, { useState } from "react";
import { Data } from "./data";

const Profiles = () => {
  const [details, setDetails] = useState(Data[0]);
  const [activeIndex, setActiveIndex] = useState(0);
 

  const handleClick = (id) => {
    setActiveIndex(id);
    console.log("active index id", activeIndex);
    const getText = Data.find((act) => act.id === id);

     console.log("name of person", getText.name);

     setDetails(getText);
  };

  return (
    <div className=" !text-2xl text-red-700 my-5 text-center">
            <div>
    ID:    {activeIndex}
    </div>
        <div  >
        {details.name}
      
      </div>
      <div>
        {details.text}
      </div>


      <div className="flex  justify-center items-center !mx-3">
        {Data.map((item, index) => (
          <img
            key={index}
            src={item.image}
            onClick={() => handleClick(index)}
            className="mx-5 my-5"
          />
        ))}
      </div>
    </div>
  );
};

export default Profiles;
