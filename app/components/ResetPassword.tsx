"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowBackIosNew } from "react-icons/md";
import { LuLock, LuUnlock } from "react-icons/lu";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/navigation";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const montserrat = Montserrat({ subsets: ["latin"] });

const numberRegex = /[0-9]/;
const specialCharRegex = /[^A-Za-z0-9]/;

function ResetPassword() {
  const [seePassword, setSeePassword] = useState(false);
  const [isLengthGreaterThanEight, setIsLengthGreaterThanEight] = useState(false);
  const [containsNumber, setContainsNumber] = useState(false);
  const [constainSpecialCharacters, setContainsSpecialCharacters] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();

     const handleGoBack = () => {
       router.back();
     };

     const CheckLength = (eventValue : any) => {
      setPassword(eventValue);
      setIsLengthGreaterThanEight(eventValue.length >= 8);
      setContainsNumber(numberRegex.test(eventValue));
      setContainsSpecialCharacters(specialCharRegex.test(eventValue));
     }

  return (
    <form className="w-full h-full  gap-y-[0.45rem] flex flex-col items-center  transition-all duration-300">
      <MdArrowBackIosNew
        onClick={handleGoBack}
        className="absolute top-4 left-4 cursor-pointer"
      />

      <p className="text-[1.0625rem] font-[800] mt-6 mb-12">Reset password</p>

      <div className="w-full relative">
        {seePassword ? (
          <LuUnlock className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] left-6 text-gray-400" />
        ) : (
          <LuLock className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] left-6 text-gray-400" />
        )}

        <input
          type={seePassword ? "text" : "password"}
          placeholder="New Password"
          className="w-full h-[3rem] pl-12 bg-gray-100 border-gray-400 border-[0.1rem] rounded-md"
          onChange={(e) => CheckLength(e.target.value)}
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

      <div
        className={`${montserrat.className} w-full flex gap-x-4 px-1 mt-6 items-center`}
      >
        <Image
          src={
            isLengthGreaterThanEight ? "/svg/checked.svg" : "/svg/unchecked.svg"
          }
          alt="unchecked"
          quality={80}
          width={500}
          height={500}
          className="w-[1.2rem] h-[1.2rem]"
        />
        <p
          className={isLengthGreaterThanEight ? "text-black" : "text-[#979797]"}
        >
          At least 8 characters
        </p>
      </div>
      <div
        className={` ${montserrat.className} w-full flex gap-x-4 px-1 items-center`}
      >
        <Image
          src={containsNumber ? "/svg/checked.svg" : "/svg/unchecked.svg"}
          alt="unchecked"
          quality={80}
          width={500}
          height={500}
          className="w-[1.2rem] h-[1.2rem]"
        />
        <p className={containsNumber ? "text-black" : "text-[#979797]"}>
          Contains a number
        </p>
      </div>
      <div
        className={` ${montserrat.className} w-full flex gap-x-4 px-1 items-center`}
      >
        <Image
          src={
            constainSpecialCharacters
              ? "/svg/checked.svg"
              : "/svg/unchecked.svg"
          }
          alt="unchecked"
          quality={80}
          width={500}
          height={500}
          className="w-[1.2rem] h-[1.2rem]"
        />
        <p className={constainSpecialCharacters ? "text-black" : "text-[#979797]"}>
          Contains a special character
        </p>
      </div>

      <Link
        href={"/"}
        type="submit"
        className="bg-primary w-full text-white font-[500] text-center px-6 py-2 rounded-3xl mt-6"
      >
        next
      </Link>
    </form>
  );
}

export default ResetPassword;
