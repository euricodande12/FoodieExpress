import React from "react";

const images = [
  {
    id: 1,
    paragraph1: "Sun's Out, BOGO's Out",
    paragraph2: "Through 8/26",
    src: "https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    paragraph1: "New Restaurants",
    paragraph2: "Added Daily",
    src: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    paragraph1: "High quality food",
    paragraph2: "Everyday",
    src: "https://images.pexels.com/photos/56007/jause-eat-delicious-food-56007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {images.map((image) => (
        /* Card */
        <div key={image.id} className="rounded-xl relative">
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">{image.paragraph1}</p>
            <p className="px-2">{image.paragraph2}</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Order Now
            </button>
          </div>
          <img
            className="rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover"
            src={image.src}
            alt="Food"
          />
        </div>
      ))}
    </div>
  );
};

export default HeadlineCards;
