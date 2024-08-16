import Link from "next/link";
import Item from "./_components/Item";
import Nav from "./_components/Nav";
import PrimaryBtn from "./_components/PrimaryBtn";

import { faStar, faCertificate, faComments, faLocationDot, faQuestion, faUpRightFromSquare, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Home() {
  let startDate = new Date('10-10-2009');
  let timeY = Math.abs(new Date().getFullYear()-startDate.getFullYear());
  let timeM = new Date().getMonth()-startDate.getMonth();

  if(timeM<0) {
      timeY--;
      timeM=12+timeM;
  }

  return (
    <>
    <Nav />
    <main className="m-4 bg-[radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(134,213,105,1) 100%)]">
      <header className="mb-10 mt-20 md:mt-5 md:mb-3 flex items-center justify-between md:ml-4">
        <div className="leading-loose">
          <small className="text-xl md:text-3xl text-[#8e8d8d] font-semibold leading-loose">Are you looking for</small>
          <h1 className="text-3xl md:text-6xl text-[#21B77C] font-semibold ">Quality Coaching<br /> in Chandigarh?</h1>
            <p className="text-sm text-[#6A6A6A] md:w-[40vw] mt-3 mb-3">
            We providing coaching services for classes 9th, 10th, 11th & 12th for Mathematics and Science.
            We prepare our students for BOARD exams, JEE and NEET by providing them with the best lessons and supplementary learning materials.
            Look no further, get in touch with us!
            </p>
            <PrimaryBtn link="/contact" label="Contact us"/>
            <small className="ml-2 text-sm">or find out more, read <Link href="#reviews" className="underline">reviews</Link>!</small>
        </div>
        <div className="hidden md:flex justify-end flex-col items-end">
          <video src="banner.mp4" autoPlay muted loop className="w-3/4"></video>
        </div>
      </header>

      <div className="bg-[#77e6bd] rounded-xl p-5 text-center flex flex-col justify-between">
          <h4 className="text-2xl mt-10">Best in class coaching for our students!</h4>
          <ul className="flex flex-col md:flex-row items-center justify-around mt-10 text-center">
            <li className="w-60">
            <img src="teacher.png"/>
              <h6>Experienced teachers</h6>
              <small className="text-xs">
                Our teachers have been in the teaching industry for more than 15 years!
              </small>
            </li>
            <li  className="w-60">
            <img src="board.png"/>
              <h6>Interactive lessons</h6>
              <small className="text-xs">
              We offer engaging, interactive lessons that make learning feel more like a conversation, keeping you involved and connected.
              </small>
            </li>
            <li  className="w-60">
            <img src="trophy.png"/>
              <h6>Competition focused</h6>
              <small className="text-xs">
              We are competition-focused, continuously adapting our strategies to keep our students ahead in their exams.
              </small>
            </li>
          </ul>
      </div>
      

    <div className="md:m-4" id="reviews">
    <h4 className="text-2xl mt-10">Reviews</h4>
      <div className="grid grid-cols-2 md:grid-cols-3">
        <div className="rounded p-3 m-2 md:row-span-2 outline outline-2 outline-slate-400/25">
        Average rating of <br/>
        <h3 className="text-2xl">4.8 <FontAwesomeIcon icon={faStar} className="w-7 m-1 text-[#FF8800] inline"/></h3>
        out of 36 reviews!
        <h3 className="text-2xl mt-3">86%</h3>
        of <strong>5</strong> stars reviews.
        <br/>
        <small className="text-xs">on Google (as of 25/07/2024)</small>
       </div>
       <Item text="Excellent teachers who help student's to go beyond the level. There hardwork , guidance and true motivation has helped a lot of student's. 📚" author="Sara Narula" />
        <Item text="Nice institute it is the path where one can learn more." author="Lakshay_verma" />
        <Item text="The best Institute in sec 46. Teachers give amazing output to the parents. There fees is also reasonable. Teachers help the students beyond there limits." author="Gokul Gupta" />
        <div className="p-3 rounded m-2 col-span-2 md:col-span-1 md:row-span-2 text-sm outline outline-2 outline-slate-400/25">
        <FontAwesomeIcon icon={faCertificate} className="w-6 m-1 text-[#acd5c4] mb-3 inline" /> Experience <br/>
            +{timeY} years of experience <br />
            Started in November of 2009 <br/>
            Thats, {timeY} years and {timeM} months ago!
        </div>  
        <Item text="I have improved a lot joining this prestigious institution....thank you sir and ma'am." author="Sheryl Shibu Therattil" />
        <Item text="The best institute in the area, the humor of the teachers is amazing , the way they teach is too amazing the methods of teaching is outstanding." author="Aryan Dadwal" />    
      </div>
    </div>

    <div className="bg-[#F1F3F0] p-5 mt-10 rounded-md">
    <h4 className="text-2xl">
    <FontAwesomeIcon
            icon={faComments}
            className="w-8 mr-2 text-[#FF8800] inline"
          />
      Forums
      </h4>
      <div className="flex justify-between">
      <p className="text-[#6A6A6A] mt-3">
      103+ questions & answers on your finger tips!<br/>
Verified answers by our faculty.<br/>
Every growing database!
<br />
<br />
<Link href="#" className="mt-4 text-[#F3F3F3] rounded-md bg-[#282828] py-2 px-3 hover:underline">Ask a question <FontAwesomeIcon icon={faUpRightFromSquare} className="inline w-3.5 ml-2"/></Link>
      </p>
      <FontAwesomeIcon icon={faQuestion} className="w-20 rotate-12 text-[#FBA748]" />
      </div>

    </div>

    <div className="m-4 text-center">
    <h4 className="text-2xl mt-10">Contact us</h4>
    <div className="md:p-3 md:flex ">
          <div className="md:flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d905.4136219952284!2d76.7634665246705!3d30.697314882049962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec4230c95f01%3A0x5d1b19688b9e39d1!2sDisha%20Learning%2CChandigarh!5e0!3m2!1sen!2sin!4v1663610557067!5m2!1sen!2sin"
              className="w-[350px] h-[350px] rounded-sm"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          <div className="m-5 text-left">
            <h5 className="text-base">Visit us</h5>
            <p className="text-sm text-[#6a6a6a]">
              Come talk to us at our office.<br />+
            <FontAwesomeIcon icon={faLocationDot} className="w-3 m-1 text-[#6A6A6A] inline" /> #3449, Sector 46/C, Chandigarh
            
            </p>

            <h5 className="text-base mt-4">Call us</h5>
            <p className="text-sm text-[#6a6a6a]">
              Mon-Fri from 1pm to 8pm<br />
              +91 9779103449<br />
              +91 8847342181<br />
              <br />
              <a href="tel:+91884732181" className="mt-4 text-[#F3F3F3] rounded-md bg-[#282828] py-2 px-3 hover:underline"><FontAwesomeIcon icon={faPhone} className="w-3.5 mr-2 inline"/>Get in touch</a>
              </p>
          </div>
          </div>

          </div>
    </div>

    </main>
    </>
  )
}