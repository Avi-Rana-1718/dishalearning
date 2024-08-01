import Navbar from "./_components/Navbar";
import PrimaryBtn from "./_components/PrimaryBtn";
import { faGraduationCap, faComments, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SecondaryBtn from "./_components/SecondaryBtn";

import { Lato } from "next/font/google";
import Footer from "./_components/Footer";
import Link from "next/link";
import Bento from "./_components/Bento";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function Home() {
  return (
    <>
      <header className="p-5 my-7 md:my-10 md:mb-0 md:p-8 flex justify-between">
        <div>
          <h4 className="text-2xl md:text-3xl">Looking for Quality</h4>
          <h2 className="text-4xl md:text-6xl text-[#21B77C] py-3 font-medium">
            Coaching in
          </h2>
          <h2 className="text-4xl md:text-6xl text-[#21B77C] mb-3 font-medium">
            Chandigarh?
          </h2>
          <p className={"mb-4 text-[#6a6a6a] " + lato.className}>
            We providing coaching services for classes 9th, 10th, 11th & 12th
            for Mathematics and Science.
            <br />
            Look no further, get in touch with us!
          </p>
          <PrimaryBtn link="#contact" label="Get in touch" />{" "}
          <span className="text-[#6a6a6a] ml-2 text-sm">
            or find out more, read{" "}
            <Link
              href="#reviews"
              className="dashed underline hover:text-[#1e1e1e]"
            >
              reviews
            </Link>
            !
          </span>
        </div>
        <div>
          <img
            src="teacher.png"
            className="max-w-[35vw] hidden md:block"
            alt="teacher"
          />
        </div>
      </header>

      <div className="bg-[#69d5ac] p-5 mb-10 md:p-10 md:pb-20">
        <h3 className="text-2xl text-[#313232] flex items-center">
          <FontAwesomeIcon icon={faGraduationCap} className="w-7 mr-2" /> Meet
          the faculty
        </h3>
        <ul className="md:flex text-base">
          <li className="p-1 mt-1 md:p-4">
            <h5 className="text-[#1e1e1e] text-xl">Vandana Rana</h5>
            <p className={lato.className}>
              <small>
                Ex-government teacher <br />
                20 year of teaching experience
              </small>
            </p>
          </li>
          <li className="p-1 mt-1 md:p-4">
            <h5 className="text-[#1e1e1e] text-xl">
              Ajay Rana{" "}
              <span className={"text-sm " + lato.className}>(1969-2022)</span>
            </h5>
            <p className={lato.className}>
              <small>
                Ex-PEC engineer <br />
                15 year of teaching experience
              </small>
            </p>
          </li>
        </ul>
      </div>

      <div className="p-5 md:p-12 text-center" id="reviews">
        <h3 className="text-2xl text-[#1e1e1e] mb-9">Reviews</h3>
        <Bento />
      </div>

      <div className="text-[#F3F3F3] bg-[#F3F6FC] p-5 md:p-12">
        <h3 className="text-2xl text-[#1e1e1e] flex mb-3">
          <FontAwesomeIcon
            icon={faComments}
            className="w-8 mr-2 text-[#FF8800]"
          />
          Forums
        </h3>
        <div className="flex justify-between">
        <p className={"text-[#6a6a6a] mb-4 " + lato.className}>
          103+ questions & answers on your finger tips! <br />
          Verified answers by our faculty. <br />
          Every growing database!
          <br />
          <SecondaryBtn link="/" label="Ask a question" />
        </p>

        <FontAwesomeIcon icon={faQuestion} className="w-20 rotate-12 text-[#FBA748]" />
        </div>
      </div>

      <div className="p-5 md:p-10 bg-[#fff]" id="contact">
        <h3 className="text-2xl text-[#1e1e1e] mb-3">Contact us</h3>
        <div className="md:p-3 md:flex">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d905.4136219952284!2d76.7634665246705!3d30.697314882049962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec4230c95f01%3A0x5d1b19688b9e39d1!2sDisha%20Learning%2CChandigarh!5e0!3m2!1sen!2sin!4v1663610557067!5m2!1sen!2sin"
              className="w-[350px] h-[350px] rounded-sm"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="m-5">
            <h5 className="text-xl">Address</h5>
            <p className="text-sm text-[#6a6a6a]">
              #3449 <br />
              Sector 46/C <br />
              Chandigarh
            </p>

            <h5 className="text-xl mt-4">Mobile</h5>
            <p className="text-sm text-[#6a6a6a]">+91 9779103449</p>
          </div>
        </div>
      </div>
    </>
  );
}
