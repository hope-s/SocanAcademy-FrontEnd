import React from "react";
import Card from "../../theme/components/CardsGlass";
import { data } from "./headerData/data";

export default function HeaderCards() {
  return (
    <div className="flex justify-center pb-4 md:py-8 min-w-800">
      {data.map((i, index) => (
        <Card key={index}>
          <h6>{i.title}</h6>
          {i.icon}
          <p>{i.description}</p>
        </Card>
      ))}
    </div>
  );
}
