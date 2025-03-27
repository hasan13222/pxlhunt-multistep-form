"use client"

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";

export default function ThemeProvider() {
    
  const [dark, setDark] = useState(false);


  useEffect(() => {
    const html = document.querySelector("html");
    const savedTheme = localStorage.getItem('theme');

    html?.classList.remove("dark");
    if(savedTheme === "dark"){
      html?.classList.add("dark");
      setDark(true);
    } else{
      html?.classList.remove("dark")
      setDark(false)
    }
  }, []);

  function themeToggler(){
    const html = document.querySelector("html");
    if(dark){
      setDark(false);
      html?.classList.remove("dark");
      localStorage.setItem("theme", "light")
    } else{
      setDark(true)
      html?.classList.add("dark");
      localStorage.setItem("theme", "dark")
    }
  }

  return (
    <>
    <div className="flex gap-3 items-center mb-4 ">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">PxlHunt Multi Step Form</h1>
        <span onClick={themeToggler} className={`transition p-2 rounded-md ${dark ? "bg-white text-gray-500" : "text-white bg-gray-500"}`}>{dark ? <IoSunnyOutline /> : <FaMoon />}</span>

      </div>
    </>
  )
}
