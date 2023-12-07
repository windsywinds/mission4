import React, { useState, useEffect } from "react";
import findCarType from "./services/findCarType";
import findCarColor from "./services/findCarColor";

export const DisplayCards = ({ userImage, data, displayMsg }) => {
  const [displayCardsMsg, setDisplayCardsMsg] = useState();
  const [carDb, setCarDbData] = useState([]);

  useEffect(() => {
    // Fetch car data from backend server as soon as the display cards are loaded so that the data can be used to match
    const fetchCarData = async () => {
      try {
        const response = await fetch("http://localhost:8001/cardatabase");
        const carDbData = await response.json();
        setCarDbData(carDbData);
      } catch (error) {
        console.error("Error fetching car data:", error);
      }
    };

    fetchCarData();
  }, []);

  if (
    !data ||
    !data.tagsResult ||
    !data.tagsResult.values.some((item) => item.name === "car")
  ) {
    return (
      <div>
        {displayCardsMsg ? (
          <div>{displayCardsMsg}</div>
        ) : (
          <div>{displayMsg}</div>
        )}
      </div>
    );
  }

  //define some of our parsed data to varibales before using it
  const imgTitle = data.captionResult.text.split(" ").slice(0, 3);
  const tagNames = data.tagsResult.values.map((item) => item.name);

  //send our data to some functions to identify the car's type and colour
  const tagCar = findCarType(tagNames);
  const tagColor = findCarColor(tagNames, imgTitle);

  //store the cars details so we can use it to run a match and display
  const inputCar = {
    carImage: userImage,
    carTitle: "A" + " " + tagColor + " " + tagCar, //combine some varibales to make the car name more accurate
    carType: tagCar,
    carColor: tagColor,
  };

  //I want to conditionally render the way carCards are shown in the grid based on how many entries are returned
  const numEntries = carDb?.filter(
    (entry) =>
      entry.carType === inputCar.carType ||
      entry.carColor === inputCar.carColor,
  ).length;
  let gridColumns;
  if (numEntries === 0) {
    gridColumns = "sm:grid-cols-1 w-1/3 ";
  } else if (numEntries === 1) {
    gridColumns = "sm:grid-cols-2 w-1/2 ";
  } else if (numEntries === 2) {
    gridColumns = "sm:grid-cols-3 w-2/3";
  } else {
    gridColumns = "sm:grid-cols-3 lg:grid-cols-4 w-5/6";
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center ">
      {carDb && data && userImage ? (
        <div className={`grid grid-cols-1 ${gridColumns}  gap-4 pb-12`}>
          <CarCard inputCar={inputCar} />
          {carDb
            ?.filter(
              (entry) =>
                entry.carType === inputCar.carType ||
                entry.carColor === inputCar.carColor,
            )
            .map((entry) => (
              <MatchCard
                key={entry.imgUrl}
                imgUrl={entry.imgUrl}
                carType={entry.carType}
                carColor={entry.carColor}
                carBrand={entry.carBrand}
                carPrice={entry.carPrice}
                inputCar={inputCar}
              />
            ))}
        </div>
      ) : (
        <div>{displayMsg}</div>
      )}
    </div>
  );
};

export const CarCard = ({ inputCar }) => {
  return (
    <div className="flex bg-slate-100 rounded-md text-slate-900 overflow-hidden border-[1px] border-slate-400 drop-shadow-[0_15px_15px_rgba(0,0,0,0.85)]">
      {inputCar.carImage && inputCar && (
        <section className="flex flex-col px-1.5 py-1.5 ">
          <img
            src={inputCar.carImage}
            alt={inputCar.carTitle}
            className="w-full h-auto object-cover curser-pointer px-4 "
          />
          <p className="text-xl font-semibold">
            {inputCar.carTitle.charAt(0).toUpperCase() +
              inputCar.carTitle.slice(1)}
          </p>
          <ul>
            Body Type:{" "}
            {inputCar.carType.charAt(0).toUpperCase() +
              inputCar.carType.slice(1)}
          </ul>
          <ul>
            Colour:{" "}
            {inputCar.carColor.charAt(0).toUpperCase() +
              inputCar.carColor.slice(1)}
          </ul>
          <a href="#" className="text-xs font-semi-bold underline mt-auto">
            Tell us more to improve your matches &gt;&gt;{" "}
          </a>
          <div className="flex flex-row justify-between text-sm pt-2">
          <button className=" transition duration-500 ease-in-out delay-450 bg-none hover:border-[#004a86] hover:text-[#004a86] border-2 border-[#0073cf] text-[#0073cf] font-semibold rounded-md py-1 px-2">
              Modify Search
            </button>
            <button className=" transition duration-500 ease-in-out delay-450 bg-[#0073cf] hover:bg-[#004a86] text-white font-semibold rounded-md py-1 px-2">
              Trade in Quote
            </button>
          </div>
          
        </section>
      )}
    </div>
  );
};

export const MatchCard = ({
  imgUrl,
  carType,
  carColor,
  carBrand,
  inputCar,
  carPrice,
}) => {
  if (!inputCar.carColor || !inputCar.carType) {
    return <div>No Matches Found!</div>;
  }

  return (
    <div className="h-full flex bg-slate-100 rounded-md text-slate-900  overflow-hidden border-[1px] border-slate-400 drop-shadow-[0_15px_15px_rgba(0,0,0,0.85)]">
      {imgUrl && (
        <section className="flex flex-col px-1.5 py-1.5">
          <img
            src={imgUrl}
            alt={imgUrl}
            className="w-full h-26 object-cover curser-pointer px-4"
          />

          <p className="text-xl font-semibold">
            {carBrand.charAt(0).toUpperCase() + carBrand.slice(1)}
          </p>
          <ul>
            Body Type: {carType.charAt(0).toUpperCase() + carType.slice(1)}
          </ul>
          <ul>
            Colour: {carColor.charAt(0).toUpperCase() + carColor.slice(1)}
          </ul>
          <ul className="font-semibold">
            Price: ${carPrice.charAt(0).toUpperCase() + carPrice.slice(1)}
          </ul>
          <div className="text-xs underline mt-auto">
            {inputCar.carColor === carColor && inputCar.carType === carType ? (
              <div>This car has a similar body and color!</div>
            ) : inputCar.carType === carType ? (
              <div>This car has a similar style!</div>
            ) : inputCar.carColor === carColor ? (
              <div>This car has a similar color!</div>
            ) : null}
          </div>
          <div className="flex flex-row justify-between text-sm pt-2">
          <button className=" transition duration-500 ease-in-out delay-450 bg-none hover:border-[#006400] hover:text-[#006400] border-2 border-[#00b000] text-[#00b000] font-semibold rounded-md py-1 px-2">
              Book a Test Drive
            </button>
            <button className=" transition duration-500 ease-in-out delay-450 bg-[#00b000] hover:bg-[#006400] text-white font-semibold rounded-md py-1 px-2">
              View Car
            </button>
          </div>
        </section>
      )}
    </div>
  );
};
