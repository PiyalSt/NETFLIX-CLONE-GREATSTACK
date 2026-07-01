import React, { useEffect, useRef } from "react";
import cards_data from "../assets/cards/Cards_data";
import ScrollContainer from "react-indiana-drag-scroll";

const TitleCards = ({ title, category}) => {
  return (
    <>
      <div className="mt-12 mb-8">
        <h2 className="mb-2 font-semibold text-xl">{title ? title : "Popular on Netflix"}</h2>
        <ScrollContainer className="flex gap-4 overflow-x-scroll scrollbar-none">
          {cards_data.map((item, index) => (
            <div className="relative shrink-0" key={index}>
              <img
                className="w-60 rounded-sm cursor-pointer"
                src={item.image}
                alt={item.name}
              />
              <p className="absolute bottom-2 right-2 font-medium">
                {item.name}
              </p>
            </div>
          ))}
        </ScrollContainer>
      </div>
    </>
  );
};

export default TitleCards;
