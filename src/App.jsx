import { useState, useEffect } from "react";
import { DisplayCards } from "./components/displayCards";
import { DisplayInput } from "./components/displayInput";

function App() {
  //We can use setState to define the state of changing variables
  const [data, setData] = useState();
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [displayMsg, setDisplayMsg] = useState(
    "Share your dream car and let us do the hard work!",
  ); //set a display message that can be updated

  //Pass these to the children components so that they can be called to update the useStates defined here and passed to other child components
  const updateData = (newData) => {
    setData(newData);
  };
  const updateImage = (newImage) => {
    setImage(newImage);
  };
  const updateDisplayMsg = (newMsg) => {
    setDisplayMsg(newMsg);
  };
  const updateLoading = (props) => {
    setIsLoading(props);
  }

  return (
    <div className={`bg-[#eeeeee] text-stone-900 min-h-screen w-full font-inter flex flex-col overflow-hidden top-0 left-0 right-0 items-center ${isLoading ? 'cursor-progress' : ''}`}>
      <div className="flex bg-white flex-row w-[100%] pt-10 pb-10 justify-between items-center">
        <div className="ml-32 w-1/5">
          <img
            src="https://www.turners.co.nz/contentassets/3e15c8546917474ca0a150b18e9fd64e/turnerscars_logo_1line_horz_true-rgb-desktop.png"
            className="w-full h-auto object-cover curser-pointer px-4 "
          />
        </div>
        <div className="flex flex-row space-x-8 mr-32">
          <div className="flex flex-row space-x-0.5">
            <a href="#" className="text-[#0073cf] font-semibold hover:text-red-600 transition duration-500 ease-in-out delay-450">
              LOGIN
            </a>
            <p className="text-stone-700 italic ">OR</p>
            <a href="#" className="text-[#0073cf] font-semibold hover:text-red-600 transition duration-500 ease-in-out delay-450">
              REGISTER
            </a>
          </div>
          <div className="flex flex-row space-x-1 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="10"
              width="10"
              viewBox="0 0 512 512"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <a
              href="#"
              className="font-semibold items-center justify-center flex flex-row hover:text-red-600 transition duration-500 ease-in-out delay-450"
            >
              0800 887 637
            </a>
          </div>
          <div className="flex flex-row space-x-1 items-center ">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="12"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
            </svg>
            <a
              href="#"
              className="font-semibold items-center justify-center flex flex-row hover:text-red-600 transition duration-500 ease-in-out delay-450"
            >
              Find Us
            </a>
          </div>

          <a href="#" className="text-red-700 font-semibold hover:text-red-900 transition duration-500 ease-in-out delay-450">
            中文
          </a>
        </div>
      </div>

      <nav className="bg-[#0073cf] w-full h-[50px] text-white font-bold flex flex-row justify-between items-center ">
        <div className="grid grid-cols-5 divide-x divide-none w-[60%] ml-8 h-full  ">
          <a
            href="#"
            className="hover:bg-[#004a86] h-full w-full text-center justify-center items-center space-x-2 flex flex-row transition duration-500 ease-in-out delay-450"
          >
            <svg
              className="pt-1"
              xmlns="http://www.w3.org/2000/svg"
              height="1.2em"
              viewBox="0 0 512 512"
            >
              <path
                fill="#ffffff"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
              />
            </svg>
            <p>Find a car</p>
          </a>
          <a
            href="#"
            className="hover:bg-[#004a86] h-full w-full text-center items-center gap-1.5 justify-center flex flex-row transition duration-500 ease-in-out delay-450"
          >
            <p>How to Buy</p>
            <svg className="h-full pt-1.5 " xmlns="http://www.w3.org/2000/svg" height="9" width="9" viewBox="0 0 512 512"><path fill="#ababab" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
          </a>
          <a
            href="#"
            className="hover:bg-[#004a86] h-full w-full text-center items-center gap-1.5 justify-center flex flex-row transition duration-500 ease-in-out delay-450"
          >
            <p>Sell your Car</p>
            <svg className="h-full pt-1.5 " xmlns="http://www.w3.org/2000/svg" height="9" width="9" viewBox="0 0 512 512"><path fill="#ababab" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
          </a>
          <a
            href="#"
            className="hover:bg-[#004a86] h-full w-full text-center items-center gap-1.5 justify-center flex flex-row transition duration-500 ease-in-out delay-450"
          >
            <p>Finance & Insurance</p>
            <svg className="h-full pt-1.5 " xmlns="http://www.w3.org/2000/svg" height="9" width="9" viewBox="0 0 512 512"><path fill="#ababab" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
          </a>
          <a
            href="#"
            className="hover:bg-[#004a86] h-full w-full text-center items-center gap-1.5 justify-center flex flex-row transition duration-500 ease-in-out delay-450"
          >
            <p>Turners Subscription</p>
            <svg className="h-full pt-1.5 " xmlns="http://www.w3.org/2000/svg" height="9" width="9" viewBox="0 0 512 512"><path fill="#ababab" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
          </a>
        </div>
        <div className="grid grid-cols-2 divide-x divide-none w-[20%] mr-28  h-full  justify-items-center">
          <a
            href="#"
            className="hover:bg-[#004a86] h-full w-full text-center items-center gap-1.5 justify-center flex flex-row transition duration-500 ease-in-out delay-450"
          >
            <p>Auctions</p>
            <svg className="h-full pt-1.5 " xmlns="http://www.w3.org/2000/svg" height="9" width="9" viewBox="0 0 512 512"><path fill="#ababab" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
          </a>
          <a
            href="#"
            className="hover:bg-[#004a86] h-full w-full text-center items-center gap-1.5 justify-center flex flex-row transition duration-500 ease-in-out delay-450"
          >
            <p>Services & Info</p>
            <svg className="h-full pt-1.5 " xmlns="http://www.w3.org/2000/svg" height="9" width="9" viewBox="0 0 512 512"><path fill="#ababab" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
          </a>
        </div>
      </nav>

      <DisplayInput
        updateData={updateData}
        updateImage={updateImage}
        updateDisplayMsg={updateDisplayMsg}
        updateLoading={updateLoading}
      />

      {/* Start of results area */}
      <DisplayCards userImage={image} data={data} displayMsg={displayMsg} />
    </div>
  );
}

export default App;
