import React, { useState } from "react";
import { BsPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaPhotoVideo, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import img from "../assets/bwink_bld_03_single_03.png";

export const LoginPages = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = e => {
    e.preventDefault();
    console.log({ username, password });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex  border items-center md:shadow-md">
        <div className="bg-gray-700 flex-1 py-20 hidden md:inline-block">
          <img src={img} alt="" className="h-full max-w-sm" />
        </div>
        <div className="border-2 border-gray-400 shadow-md px-8 py-16 md:border-none md:shadow-none">
          <div className="flex flex-col">
            {/* <h3 className="text-center font-semibold text-2xl">Login</h3> */}
            <div className="text-5xl border-2 w-fit m-auto border-gray-700 rounded-full p-2 lg:text-5xl">
              <BsPersonFill className="text-gray-700" />
            </div>
            <p className="text-center font-semibold text-xs text-gray-600 my-5">
              Welcome Back, Log In To Your Account
            </p>
          </div>
          <form
            onSubmit={submitForm}
            className="flex flex-col gap-3 md:px-8 lg:px-12">
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-semibold text-gray-600">
                Username
              </label>
              <div className=" rounded overflow-hidden flex items-center">
                <div className="p-1.5 h-full border rounded-l border-gray-600 bg-gray-600 text-gray-50">
                  <BsPersonFill />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  className="focus:outline-none py-0.5 border flex-1 border-gray-400  rounded-r px-2"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="" className="font-semibold text-gray-600">
                Password
              </label>
              <div className=" rounded overflow-hidden flex items-center">
                <div className="p-1.5 h-full border rounded-l border-gray-600 bg-gray-600 text-gray-50">
                  <RiLockPasswordFill />
                </div>
                <input
                  type={hidePassword ? "password" : "text"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="focus:outline-none py-0.5 border-y border-gray-400 px-2"
                />

                <button
                  className="p-1.5 border rounded-r border-gray-400 cursor-pointer"
                  type="button"
                  onClick={() => setHidePassword(!hidePassword)}>
                  {hidePassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center mt-5">
              <button
                type="submit"
                className="bg-gray-700 text-gray-50 rounded-md font-semibold text-sm px-5 py-1">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
