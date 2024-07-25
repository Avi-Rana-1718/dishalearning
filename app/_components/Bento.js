import { faStar, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReviewLi from "./ReviewLi";


export default function Bento() {

    let startDate = new Date('10-10-2009');
    let timeY = Math.abs(new Date().getFullYear()-startDate.getFullYear());
    let timeM = new Date().getMonth()-startDate.getMonth();

    if(timeM<0) {
        timeY--;
        timeM=12+timeM;
    }

    return (
        <ul className="grid md:grid-cols-3 grid-cols-2 gap-3">
            <li className="text-left md:row-span-2 outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded">
                Average Rating of <br/>
                <h3 className="text-2xl">4.8 <FontAwesomeIcon icon={faStar}  className="w-7 m-1 text-[#FF8800] inline"/></h3>
                out of 36 reviews! <br/><br/>
                <h3 className="text-2xl">86%</h3>
                of <strong>5</strong> stars reviews.

                

                <small className="text-xs text-[#6a6a6a] block mt-2">on Google (as of 25/07/2024)</small>
            </li>
            <ReviewLi message="Excellent teachers who help student's to go beyond the level. There hardwork , guidance and true motivation has helped a lot of student's. 📚" author="Sara Narula" />
            <ReviewLi message="The best Institute in sec 46. Teachers give amazing output to the parents. There fees is also reasonable. Teachers help the students beyond there limits." author="Gokul Gupta" />
            <ReviewLi message="The best institute in the area, the humor of the teachers is amazing , the way they teach is too amazing the methods of teaching is outstanding." author="Aryan Dadwal" />
            <li className="md:row-span-2 col-span-2 text-left outline oultine-1 outline-2 outline-slate-400/25 p-3 rounded">
            <FontAwesomeIcon icon={faCertificate} className="w-6 m-1 text-[#acd5c4] mb-3 inline" /> Experience <br/>
            <small>
            +14 years of experience <br />
            Started in November of 2009 <br/>
            Thats, {timeY} years and {timeM} months ago!
            </small>
            </li>
            <ReviewLi message="Nice institute it is the path where one can learn more" author="Lakshay_verma" />
            <ReviewLi message="I have improved a lot joining this prestigious institution....thank you sir and ma'am." author="Sheryl Shibu Therattil"/>
        </ul>
    )
}