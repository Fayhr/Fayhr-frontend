"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { Montserrat } from "next/font/google";



const montserrat = Montserrat({subsets: ["latin"]});

function VerifyEmail() {
  const router = useRouter();

    const [timeLeft, setTimeLeft] = useState(3 * 60);

     useEffect(() => {
      
       setTimeLeft(3 * 60);

  
       const tick = () => {
         setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
       };

  
       const timerId = setInterval(tick, 1000);

    
       return () => clearInterval(timerId);
     }, []);

      const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
          .toString()
          .padStart(2, "0")}`;
      };


  const handleGoBack = () => {
    router.back();
  };

  return (
    <form className="w-full h-full  gap-y-[0.45rem] flex flex-col items-center">
      <MdArrowBackIosNew
        onClick={handleGoBack}
        className="absolute top-4 left-4 cursor-pointer"
      />

      <p className="text-[1.0625rem] font-[800] mt-6 mb-12">Recover password</p>

      <div className="w-full relative">
        <LuLock className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] left-6 text-gray-400" />
        <input
          type="text"
          placeholder="Input OTP"
          className="w-full h-[3rem] pl-12 bg-gray-100 border-gray-400 border-[0.1rem] rounded-md"
        />
      </div>

      <Link
        href={"/forgot-password/verify-email/reset-password"}
        type="submit"
        className="bg-primary w-full text-white font-[500] px-6 py-2 rounded-3xl mt-6"
      >
        next
      </Link>
<p className={`${montserrat.className} font-[500] text-[1rem] text-center`}>Code expires in: <span className="text-red-400">{formatTime(timeLeft)}</span></p>
      
    </form>
  );
}

export default VerifyEmail;
