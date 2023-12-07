import { useState } from "react";
import { getData, getFileData } from "./services/getData";
import getRandom from "./services/getRandom";

export const DisplayInput = ({ updateData, updateImage, updateDisplayMsg, updateLoading }) => {
  const [image, setImage] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  //we  want to ensure we manage the user changing the input field so this will update the image useState
  const handleOnChange = (e) => {
    setImage(e.target.value);
  };

  //handle the file upload and set the input message to let the user know they can run the service
  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
    setImage("File ready.");
  };

  //when the user clicks the button, we will initiate our call to the API
  //once the data has been fetched, it will setData with the data useState
  const onButtonClick = async (e) => {
    try {
      // Prevent default stops the buttons from acting like a default button as we are using it asynchronously
      e.preventDefault();
      updateData(); // clear the data to reset display messages
      updateLoading(true)//set the cursor loading animation
      updateDisplayMsg("Loading..."); // Let the user know something is happening!

      if (selectedFile) {
        setImage(selectedFile.name);
        const reader = new FileReader();
        reader.onload = async (event) => {
          try {
            const parsedData = await getFileData(selectedFile);
            const imageUrl = URL.createObjectURL(selectedFile);
            updateImage(imageUrl);
            updateData(parsedData);
            console.info("Image complete:", parsedData);
            setSelectedFile(null);
            updateLoading(false)//reset cursor
          } catch (error) {
            console.error("Error processing file content:", error);
            updateDisplayMsg("There was an error.");
          }
        };
        reader.readAsArrayBuffer(selectedFile);

        //else if the user enters a URL, first check the URL is valid so we don't waste API quota
      } else if (
        !image ||
        !(
          image.endsWith(".jpg") ||
          image.endsWith(".jpeg") ||
          image.endsWith(".png") ||
          image.endsWith(".webp")
        )
      ) {
        console.error("There is an error with the image format or URL:");
        updateDisplayMsg("Invalid image format or URL!");
      } else {
        updateImage(image); // send the image back to app.jsx so it can be passed to child components for use
        console.log("Click registered and ready to fetch!");
        try {
          const parsedData = await getData(image);
          updateData(parsedData);
          updateLoading(false)
        } catch (error) {
          console.error("Error fetching data:", error);
          updateDisplayMsg("There was an error.");
        }
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    }
  };

  //If the user clicks the button for a random car, this will call the getRandom function to return an image from the api
  const onRandomClick = async (e) => {
    updateData();
    e.preventDefault();
    try {
      updateLoading(true)
      updateDisplayMsg("Loading...");
      const image = await getRandom();
      setImage(image);
      try {
        const parsedData = await getData(image);
        updateImage(image);
        updateData(parsedData);
        updateLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error);
        updateDisplayMsg("There was an error.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setImage("No image found");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center py-6 space-y-4 w-full text-white">
      <div className="flex flex-row justify-center items-center space-x-4 w-full">
        <input
          className="bg-slate-300 text-black inline-block px-2 py-1 rounded-xl w-1/3 "
          placeholder="Enter image URL"
          value={image}
          onChange={handleOnChange}
        />

        <label
          htmlFor="file-upload"
          className="inline-block px-4 py-1 font-semibold bg-[#0073cf] hover:bg-[#004a86] rounded-lg drop-shadow-md cursor-pointer transition duration-500 ease-in-out delay-450"
        >
        Upload File
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
      <div className="flex flex row space-x-6 w-1/3 items-center justify-center">
        <button
          className="inline-block w-1/3 px-2 py-1 font-semibold bg-[#0073cf] hover:bg-[#004a86] rounded-lg drop-shadow-md mt-2 md:mt-0 transition duration-500 ease-in-out delay-450"
          onClick={onRandomClick}
        >
          Roll Random
        </button>
        <button
          className="inline-block w-1/3 px-2 py-1 font-semibold bg-[#0073cf] hover:bg-[#004a86] rounded-lg drop-shadow-md mt-2 md:mt-0 transition duration-500 ease-in-out delay-450"
          onClick={onButtonClick}
        >
          Run Service
        </button>
      </div>
    </div>
  );
};
