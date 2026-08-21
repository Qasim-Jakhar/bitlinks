import Image from "next/image";
import localFont from 'next/font/local'
import Link from "next/link";

const font = localFont({
  src: "/font/Poppins-Bold.ttf",
  variable: "--font-poppins",
  weight: "100 900"
})

export default function Home() {
  return (
    <main className="bg-blue-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 justify-center items-center">
        <p className={`text-2xl font-bold ${font.className}`}>
            The best URL shortner in the market
            </p>
          <p className="px-25 text-center">
            BitLink turns long URLs into clean, memorable links quickly and securely. No login required—shorten links for free without sharing personal information.
          </p>
          <div className="flex gap-3 text-white">
            <Link href={"/generate"}>
                <button className='bg-violet-400 p-3 py-1 shadow-lg rounded-lg'>Try Now</button>
                </Link>
                <Link href={"/github"}>
                <button className='bg-violet-400 p-3 py-1 shadow-lg rounded-lg'>GitHub</button>
                </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-hard-light" src={"/vector.jpg"} loading="eager" fill={true} alt="Vector"/>
        </div>
      </section>
    </main>
  );
}
