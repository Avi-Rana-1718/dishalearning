import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
export default function Forum() {
  return (
    <main>
      <header className="bg-[#ceffd8] pb-10">
        <Navbar forum="true" />
        <div className="text-center">
          <h3 className="text-4xl text-[#1e1e1e] mb-3">
            Forums
          </h3>
          <span className="text-[#6a6a6a]">Answers to all your questions</span>
        </div>
      </header>
      <Footer />
    </main>
  );
}
