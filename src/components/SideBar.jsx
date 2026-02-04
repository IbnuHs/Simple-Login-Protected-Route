import React from "react";
import { SiWebauthn } from "react-icons/si";
import { NavLink, useNavigate } from "react-router-dom";
import { IoLogOut } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { api } from "../api/api";
import { useAuth } from "../context/AuthContext";

export const SideBar = props => {
  const expand = props.expandSidebar;
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await api.post("/auth/logout");
      setUser(null);
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div
      className={`${expand ? "max-w-52 px-4 pb-4" : "max-w-0 w-0 overflow-hidden p-0 md:w-full md:max-w-52  md:px-4 md:pb-4"} absolute ease-in-out duration-150 text-gray-50 w-full min-h-screen bg-gray-800 flex flex-col md:pb-4 md:max-w-52 lg:max-w-64 md:relative`}>
      <button
        type="button"
        onClick={() => props.setExpandSideBar(false)}
        className="absolute right-2 top-2 md:hidden">
        <IoClose className="text-xl" />
      </button>
      <div className="flex gap-3 items-center py-7">
        <SiWebauthn className="text-3xl" />
        <h3 className="font-semibold text-lg">Authentication</h3>
      </div>
      <hr className="h-2 w-full" />
      <div className="flex flex-col mt-3 gap-3 flex-1">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold rounded-md px-4 py-2 ${isActive ? "bg-gray-300 text-gray-800" : ""} hover:bg-gray-300 hover:text-gray-800 flex gap-2 items-center`
          }>
          <TiHome /> HomePages
        </NavLink>
        <NavLink
          to={"/something"}
          className={({ isActive }) =>
            `font-semibold rounded-md px-4 py-2 ${isActive ? "bg-gray-300 text-gray-800" : ""} hover:bg-gray-300 hover:text-gray-800 flex gap-2 items-center`
          }>
          <BsQuestionCircleFill /> Something
        </NavLink>
      </div>
      <div className="">
        <button
          onClick={logout}
          className="border-b text-start px-4 py-1.5 font-semibold w-full flex gap-2 items-center hover:bg-gray-50 hover:text-gray-800 hover:rounded ease-in-out md:py-1 lg:py-2">
          <IoLogOut /> Logout
        </button>
      </div>
    </div>
  );
};
