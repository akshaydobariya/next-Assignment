import "./globals.css";
import Navbar from "@/components/navbar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import "./globals.css";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="flex">
        <div className="flex-none ">
          <Navbar />
        </div>
        <div className="flex-auto w-96">
          <Hero />
        </div>
      </div>
    </div>
  );
}
