"use client";

import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
function ForgotPassword() {
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

      <p className="text-[1.0625rem] font-[800] mt-6 mb-12">Recover password</p>

      <div className="w-full relative">
        <MdOutlineMailOutline className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] left-6 text-gray-400" />
        <input
          type="email"
          placeholder="Email address"
          className="w-full h-[3rem] pl-12 bg-gray-100 border-gray-400 border-[0.1rem] rounded-md"
        />
      </div>

      <Link href={"/forgot-password/verify-email"}
        type="submit"
        className="bg-primary w-full text-white font-[500] px-6 py-2 rounded-3xl mt-6"
      >
        Log in
      </Link>
    </form>
  );
}

export default ForgotPassword;
