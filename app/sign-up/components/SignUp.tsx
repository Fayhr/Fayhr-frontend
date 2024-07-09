"use client";
import { useState } from "react";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { LuUnlock } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useRouter } from "next/navigation";

function SignUp() {
  const [seePassword, setSeePassword] = useState(false);
    const router = useRouter();

    const handleGoBack = () => {
      router.back();
    };

  return (
    <form className="w-full h-full  gap-y-[0.45rem] flex flex-col items-center">
      <MdArrowBackIosNew
        onClick={handleGoBack}
        className="absolute top-4 left-4 cursor-pointer"
      />
      <p className="text-[1.0625rem] font-[800] mt-6 mb-12">Create account</p>

      <div className="w-full relative">
        <BsPerson className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] left-6 text-gray-400" />
        <input
          type="text"
          placeholder="Full name"
          className="w-full h-[3rem] pl-12 bg-gray-100 border-gray-400 border-[0.1rem] rounded-md"
        />
      </div>

      <div className="w-full relative">
        <MdOutlineMailOutline className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] left-6 text-gray-400" />
        <input
          type="email"
          placeholder="Email address"
          className="w-full h-[3rem] pl-12 bg-gray-100 border-gray-400 border-[0.1rem] rounded-md"
        />
      </div>

      <div className="w-full relative">
        {seePassword ? (
          <LuUnlock className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] left-6 text-gray-400" />
        ) : (
          <LuLock className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] left-6 text-gray-400" />
        )}

        <input
          type={seePassword ? "text" : "password"}
          placeholder="Email address"
          className="w-full h-[3rem] pl-12 bg-gray-100 border-gray-400 border-[0.1rem] rounded-md"
        />
        {seePassword ? (
          <FaRegEyeSlash
            className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] right-4 cursor-pointer text-gray-400"
            onClick={() => setSeePassword(false)}
          />
        ) : (
          <FaRegEye
            className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] right-4 cursor-pointer text-gray-400"
            onClick={() => setSeePassword(true)}
          />
        )}
      </div>

      <div className="w-full flex items-center  gap-x-4 text-primary font-[500] text-[1rem] mt-4">
        <input type="checkbox" className="accent-primary" />
        <p>Accept terms & Condition</p>
      </div>

      <button
        type="submit"
        className="bg-primary text-white font-[500] px-6 py-2 rounded-3xl mt-12"
      >
        Next
      </button>
    </form>
  );
}

export default SignUp;
