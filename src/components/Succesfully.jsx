import { useState } from "react";
import Alert from "./Alert";

const Succesfully = ({ fileURL }) => {
  const [copy, setCopy] = useState(false);
  const copiar = () => {
    navigator.clipboard.writeText(fileURL);
    setCopy(true);
  };

  return (
    <section className="w-[90%] mx-auto my-0 h-[100vh] flex flex-col justify-center items-center ">
      <div className=" bg-white sm:w-full md:w-[25rem] flex flex-col justify-center items-center rounded-[10px] p-[1.563rem] shadow-md">
        <article className="text-center pb-[1.563rem]">
          <i className="fa-solid fa-circle-check text-ok-green text-[42px]"></i>
          <h2>Uploaded Succesfully!</h2>
        </article>
        <article className=" h-[14rem]">
          <img
            src={fileURL}
            alt="uploaded file"
            className="w-full h-full object-contain hover:scale-105 cursor-pointer hover:ease-in-out duration-150"
          />
        </article>
        <article className="text-center mt-[1.563rem]">
          <span className="bg-[#F6F8FB] rounded-[8px] h-[3rem] box-border p-1 flex flex-row border border-[#E0E0E0]">
            <input
              type="text"
              name="url"
              id="url"
              readOnly
              value={fileURL}
              className="w-[70%] bg-transparent font-thin"
            />
            <button
              onClick={copiar}
              className="bg-[#2F80ED] text-white rounded-[8px] box-border px-4 w-[30%] text-sm"
            >
              Copy link
            </button>
          </span>
        </article>
      </div>
      {copy && <Alert />}
    </section>
  );
};

export default Succesfully;
