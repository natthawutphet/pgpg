import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./home/header";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>



<div className="container-fluid">
<Header/>



</div>


    </>
  );
}
