import Link from "next/link";

export default function Home() {
  return (
    <>
    <header>
    <nav className="flex text-2xl font-normal p-2">
          <Link href="/">
          <img src="/logo.png" className="w-10 inline" alt="Logo" />Disha Learning
          </Link>
      </nav>

    <section className="flex justify-between items-center p-4">
      <div className="md:max-w-[30vw]">
      <h1 className="text-4xl md:text-6xl">
      Boundless<br />
      <span className="text-[#04AA6D] bg-[#BEFFCC] p-1.5">
Knowledge<br/>
      </span>
Solutions
      </h1>
      <small className="text-xs">
      We provide coaching for Maths and Science for classes 9th to 12th in which we prepare students for both board exams and
      different competitive exams such as JEE & NEET. Chapterwise assignments are given to the students and 
      regular weekly tests are taken to ensure that students are doing self study at home.
      </small>
      </div>
    <div>
      <img src="/teacher.png" alt="banner" className="max-w-[30vw] float-right"/>
    </div>
    </section>
    </header>

    <div className="px-4 py-2 m-5 rounded bg-[#F3F6FC] text-left shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px];">
    <small className="text-sm"><i class="fa-solid fa-square-up-right"></i> Head to forum website</small>
    <a href="https://ans.dishalearning.in"><h3 className=" text-lg hover:underline">ans.dishalearning.in</h3></a>
    <a href="https://ans.dishalearning.in"><button className="bg-[#454545] text-[#fff] py-2 px-2 rounded my-3 hover:underline">Go to website <i class="fa-solid fa-arrow-up-right-from-square"></i></button></a>
    </div>

    <section className="bg-[#282A35] p-5 text-[#fff]">
      <h3 className="text-lg">Faculty</h3>
      <div className="mt-4">
        <h5>
          <small className="block text-xs">In memory of</small>
          Ajay Rana <br />
        </h5>

      <p className="text-xs leading-4">
      Ex PEC Engineer <br />
      15 years of experience in teaching
      </p>

      </div>
      <div className="mt-4">

      <h5>Vandana Rana</h5>

      <p className="text-xs leading-4">
      Ex Government Teacher <br />
15 years of experience in teaching
      </p>
      </div>
    </section>
    
    <section className="p-5">
      <h3 className="text-lg mb-2">Contact us</h3>
      <div className="md:flex">
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d905.4136219952284!2d76.7634665246705!3d30.697314882049962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec4230c95f01%3A0x5d1b19688b9e39d1!2sDisha%20Learning%2CChandigarh!5e0!3m2!1sen!2sin!4v1663610557067!5m2!1sen!2sin" className="w-[350px] h-[350px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className="p-4">
      <small>
    <b>Address</b><br/>
    #3449<br />
    Sector 46/C <br />
    Chandigarh, India <br />
    <b>Mobile</b><br />
    +91 8847342181<br />
    +91 9779103449
    </small>
    </div>
      </div>
    </section>
    </>
  );
}
