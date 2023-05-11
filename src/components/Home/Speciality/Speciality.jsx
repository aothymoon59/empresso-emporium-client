import React, { useEffect, useState } from "react";

const Speciality = () => {
  const [special, setSpecial] = useState([]);
  useEffect(() => {
    fetch("/speciality.json")
      .then((res) => res.json())
      .then((data) => setSpecial(data));
  }, []);
  return (
    <div className="bg-[#ECEAE3]">
      <div className="container mx-auto px-5  grid sm:grid-cols-2 lg:grid-cols-4 gap-9 py-14">
        {special.map((card, i) => {
          return (
            <div key={i}>
              <img src={card.img} alt="" />
              <h3 className="sub-title mt-4 mb-2">{card.title}</h3>
              <p className="raleway-font text-[#1B1A1A]">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Speciality;
