import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Home() {
  return (
    <main className="w-full px-4 min-h-screen justify-center gap-y-[0.45rem] flex flex-col items-center ">
      <Image
        src={"/image/logo.png"}
        alt="fayhr"
        width={400}
        height={300}
        quality={80}
        className="m-0 w-[5rem] h-[5rem] mb2"
      />
      <h1 className="text-[2rem] font-[800] text-center mb-3">
        Cheaper, Safer <br /> On Foodwish
      </h1>

      <Link href={"/sign-up"} className="w-[90%]">
        <div className="w-full rounded-[3.2rem] flex justify-center items-center h-[3rem] bg-primary text-white text-[0.9375rem] font-[800] ">
          Sign up free
        </div>
      </Link>
      <Link href={""} className="w-[90%]">
        <div className="w-full rounded-[3.2rem] items-center h-[3rem] text-black border-gray-400 px-4 border-[0.1rem] flex justify-start gap-x-4 text-[0.9375rem] font-[500] ">
          <FcGoogle className="w-[1.5rem] h-[1.3rem]" />
          <p>Continue with Google</p>
        </div>
      </Link>
      <Link href={""} className="w-[90%]">
        <div className="w-full rounded-[3.2rem] items-center h-[3rem] text-black border-gray-400 px-4 border-[0.1rem] flex justify-start gap-x-4 text-[0.9375rem] font-[500] ">
          <Image
            src={"/svg/facebook.svg"}
            alt="facebook"
            width={400}
            height={300}
            quality={80}
            className="w-[1.5rem] h-[1.3rem]"
          />

          <p>Continue with Facebook</p>
        </div>
      </Link>

      <Link href={'/log-in'} className="text-[1.0625rem] font-[800] mt-8">Log in</Link>
    </main>
  );
}
