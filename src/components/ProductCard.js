import React, { useState } from "react";
import Image from "next/legacy/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
function ProductCard({ product }) {
  const { id, title, price, description, category, image } = product;
  const [rating] = useState(3);
  const [hasPrime] = useState(Math.random()<0.5);
  return (
    <div className="relative flex flex-col bg-white m-5 z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} 
        currency="INR" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5 ">
        <img className="w-12" src="/images/prime-tag.png"/>
        <p className="text-xs text-gray-500 ">FREE Next-day Delivery</p>
      </div>
      )}


      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default ProductCard;
