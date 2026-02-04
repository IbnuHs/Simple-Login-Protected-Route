import React from "react";
import { useAuth } from "../context/AuthContext";
import loadingImg from "../assets/bwink_msc_05_single_03.png";
import { FaRegLifeRing } from "react-icons/fa";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center flex-col px-12">
        <img src={loadingImg} alt="" className="max-w-72 w-full" />
        <div className="flex gap-3">
          <FaRegLifeRing className="animate-bounce h-12 text-blue-600" />
          <FaRegLifeRing className="animate-bounce h-12 text-green-500" />
          <FaRegLifeRing className="animate-bounce h-12 text-red-500" />
        </div>
        <p className="font-semibold text-lg">Loading...</p>
      </div>
    );
  }
  console.log(user);
  if (!user) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
};
