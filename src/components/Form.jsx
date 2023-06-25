import { uploadFile } from "../firebase/config";
import MainImage from "../assets/image.svg";
import { useRef, useState, useEffect } from "react";

const Form = ({ setFileURL, setCharging }) => {
  const [borderFlag, setBorderFlag] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    setBorderFlag(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBorderFlag(false);
    const { files } = e.dataTransfer;

    if (files && files.length) {
      onUpload(files[0]);
    }
  };

  const onUpload = async (files) => {
    setCharging(true);
    const imageUrl = await uploadFile(files);
    setFileURL(imageUrl);
  };

  const handleFileChange = async (e) => {
    setCharging(true);
    const imageUrl = await uploadFile(e.target.files[0]);
    setFileURL(imageUrl);
  };

  return (
    <form className="font-medium w-[25.125rem] text-center h-[100vh] flex flex-col items-center justify-center mx-auto my-auto">
      <h1 className="text-[1.7rem]">Upload your image</h1>
      <p className="text-[1rem] mb-16 mt-10">File should be Jpeg, Png...</p>
      <div
        className={`border border-dashed box-border bg-bg-gray rounded-[12px] ${
          borderFlag ? "border-border-red" : "border-border-blue"
        } p-20 flex flex-col items-center justify-center`}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <img src={MainImage} alt="image" className="w-[7.125rem] h-[5.5rem]" />
        <p>Drag & drop your image here</p>
      </div>
      <p className="my-5">Or</p>
      <input
        type="file"
        id="file-input"
        name="file-input"
        onChange={handleFileChange}
      />
      <label id="file-input-label" htmlFor="file-input">
        Select a File
      </label>
    </form>
  );
};

export default Form;
