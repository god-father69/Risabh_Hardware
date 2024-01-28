import React, { useState } from "react";

import pvcImg from "../assets/hero/pvc.jpg";

import side2 from "../assets/hero/side2.jpg";

import pic1 from "../assets/brands/pic1.jpg";
import pic2 from "../assets/brands/pic2.jpg";
import pic3 from "../assets/brands/pic3.jpg";
import pic4 from "../assets/brands/pic4.jpg";
import pic5 from "../assets/brands/pic5.png";
import pic6 from "../assets/brands/pic6.png";
import pic7 from "../assets/brands/pic7.jpeg";
import pic8 from "../assets/brands/pic8.jpg";
import pic9 from "../assets/brands/pic9.png";
import pic10 from "../assets/brands/pic10.jpg";
import pic11 from "../assets/brands/pic11.jpg";
import pic12 from "../assets/brands/pic12.png";

import SubHead from "../components/Heading/SubHead";
import Button from "../components/Buttons/Button";
// import { useGetAllMembershipPlanQuery } from "../redux/api/membership/membershipApi";
import SectionHead from "../components/Heading/SectionHead";
import HeroVideo from "../components/Video/HeroVideo";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./home1.css";
// import process from 'process';
const Home = () => {
  // Handle Our Plans
  // const { data, isLoading } = useGetAllMembershipPlanQuery();

  // Testimonials
  // const testimonials = [
  //   {
  //     name: "Sarah Turner",
  //     feedback:
  //       "I love this gym! The trainers are knowledgeable and motivating, the equipment is top-notch, and the atmosphere is always welcoming. I've seen fantastic results since I joined.",
  //     title: " Fitness Enthusiast",
  //   },
  //   {
  //     name: "David Rodriguez",
  //     feedback:
  //       "I've been a member of this gym for a year, and I couldn't be happier. The cleanliness and hygiene standards are excellent, and the staff is friendly and helpful.",
  //     title: "Loyal Member",
  //   },
  //   {
  //     name: "Emily Foster",
  //     feedback:
  //       "The group fitness classes at this gym are outstanding. The instructors are passionate and energetic, and the variety of classes keeps me engaged and motivated to work out regularly. ",
  //     title: "Group Fitness Fanatic",
  //   },
  // ];

  // const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const [video, setVideo] = useState(false);
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully"
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        })
      });
    e.target.reset()
  };
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-fixed bg-cover bg-center pt-40 pb-6 md:pb-40 xl:h-screen md:flex items-center justify-between"
        style={{ backgroundImage: `url(${pvcImg})` }}
      >
        <div className="px-4 md:px-10 ppx">
          {/* <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="white" title="With Patric Potter" />
          </div> */}
          <h2
            className="text-white text-extraLarge md:text-[70px] md:leading-none md:w-[80%] xl:w-[70%] font-bold uppercase py-16"
            style={{ fontFamily: "'Teko', sans-serif" }}
          >
            RISABH HARDWARE
          </h2>
          <Button className="btnxx">
            <a href="#contact_us" className="md:px-2">
              Contact us
            </a>
          </Button>
        </div>
        {/* Play button */}
        {/* <div className="relative py-10 flex justify-end">
          <div className="cursor-pointer relative bg-main h-16 w-16 lg:h-20 lg:w-20  rounded-full flex items-center justify-center mx-6 md:mx-14 lg:mx-20  ">
            <span
              onClick={() => {
                setVideo(!video);
              }}
              className="animate-ping absolute inline-flex h-full w-full rounded-full bg-main opacity-75"
            ></span>
            <FaPlay className="text-white text-[20px]" />
          </div>
        </div> */}
      </div>
      {/* Video */}
      {video && <HeroVideo video={video} setVideo={setVideo}></HeroVideo>}
      {/* Service Section */}
      <div
        className="bg-fixed bg-cover bg-center pt-20 pb-10"
        style={{ backgroundColor: `black`, }}
        // style={{ backgroundImage: `url(${serviceImage})` }}
        id="brands"
      >
        <div className="px-5 ">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-white"></div>
            <SubHead color="main" title="Brands we deal in" />
          </div>
          <div className="lg:flex items-center justify-between">
            <SectionHead
              color="white"
              title="Uncover a world of top-notch brands, tailored for you!"
            ></SectionHead>
            {/* <div className="lg:w-3/12">
              <Button>
                <Link to="/dashboard" className="md:px-2">
                  Become A Member
                </Link>
              </Button>{" "}
            </div> */}
          </div>
        </div>
        <div
          className="md:flex justify-center"
          
          style={{ backgroundColor: "black", height: "8vh" }}
        >
          <div className="ticker-wrap">
            <div className="ticker">
              {/* {logos.map((item)=>{
                <img src={item} alt="j" className="ticker__item" />
              })} */}
              <img src={pic1} alt="" className="ticker__item" />
              <img src={pic2} alt="" className="ticker__item" />
              <img src={pic3} alt="" className="ticker__item" />
              <img src={pic4} alt="" className="ticker__item" />
              <img src={pic5} alt="" className="ticker__item" />
              <img src={pic6} alt="" className="ticker__item" />
              <img src={pic7} alt="" className="ticker__item" />
              <img src={pic8} alt="" className="ticker__item" />
              <img src={pic9} alt="" className="ticker__item" />
              <img src={pic10} alt="" className="ticker__item" />
              <img src={pic11} alt="" className="ticker__item" />
              <img src={pic12} alt="" className="ticker__item" />
            </div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div className="my-20 lg:flex items-center justify-between xl:my-40">
        <div className="px-5 lg:w-1/2">
          <img
            style={{ width: "76%" }}
            className="block mx-auto"
            src={side2}
            alt="Fitness one About"
          />
        </div>
        <div className="py-10 px-4 md:px-10 lg:w-1/2">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-orange"></div>
            <SubHead color="main" title="About our shop" />
          </div>
          <SectionHead
            color="black"
            title="Your One-Stop Shop for all Hardware Needs"
          ></SectionHead>
          <p className="text-base text-blackGray">
            We deal in all kind of hardware items , GI/MS/SS Fittings,
            CPVC/PVC/UPVC Fittings, Bath Accessories, Valves(CI/BRASS/GM),
            Motors in all ranges from light to heavy
          </p>
          {/* <p className="text-base text-blackGray my-6">
            Brook presents your services with flexible, convefnient and chient
            anipurpose layouts. You can select your favorite layouts.
          </p> */}
          <div className="my-10">
            <Button>
              <a href="#contact_us" className="md:px-2">
                Contact now
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      {/* <div className="my-20 lg:flex items-center justify-between xl:my-40">
        <div className="px-5 lg:w-1/2">
          <img
            className="block mx-auto"
            src={FeedbackImage}
            alt="Fitness one Feedback"
          />
        </div>
        <div className="py-10 px-4 md:px-10 lg:w-1/2">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Client Feedback" />
          </div>

          <SectionHead
            color="black"
            title="What Our Client Think About Our Gym"
          ></SectionHead>
          <div>
            <ClientReviewCard
              {...testimonials[currentTestimonialIndex]}
            ></ClientReviewCard>
            <div className="flex  space-x-4 my-10">
              <button onClick={previousTestimonial}>
                <Icon
                  IconName="fa-solid fa-arrow-left"
                  color="main"
                  size="xl"
                />
              </button>
              <button onClick={nextTestimonial}>
                <Icon
                  IconName="fa-solid fa-arrow-right"
                  color="main"
                  size="xl"
                />
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* Our Gellary */}
      {/* <section className="overflow-hidden text-gray-700 mb-10">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={gellary1}
              />
            </div>
            <div className="w-full sm:w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg"
                src={gellary2}
              />
            </div>
            <div className="w-full sm:w-full p-1 md:p-2 h-[400px]">
              <img
                alt="gallery"
                className="block object-cover object-center w-full h-full rounded-lg "
                src={gellary3}
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Plans */}
      {/* <div className="bg-white pt-20 pb-10 px-5">
        <div className="flex justify-center   mb-10">
          <div>
            <div className="flex items-center">
              <div className="h-[2px] w-[100px] bg-main"></div>
              <SubHead color="main" title="Be Our Member" />
            </div>
            <SectionHead color="black" title="Our Plans"></SectionHead>
          </div>
        </div>
        <div className=" lg:flex justify-center">
          {data &&
            data.map((plan) => (
              <PlanCard key={plan._id} data={plan}></PlanCard>
            ))}
        </div>
      </div> */}

      {/* Team Members */}
      {/* <div className="bg-white pt-20 pb-10">
        <div className="px-5 ">
          <div className="flex items-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Our Team Members" />
          </div>
          <div className="lg:flex items-center justify-between">
            <SectionHead
              color="black"
              title="Our Most Exprienced Trainers"
            ></SectionHead>
            <div className="lg:w-3/12">
              <Button>
                <Link className="px-2" to="/services">
                  More Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:flex justify-around">
          <TrainnerCard
            name="Michael Johnson"
            title="Certified Fitness Coach"
            image={team1}
          ></TrainnerCard>
          <TrainnerCard
            name="John Davis"
            title="Strength and Conditioning Specialist"
            image={team2}
          ></TrainnerCard>
          <TrainnerCard
            name="David Martinez"
            title="Personal Trainer and Nutrition Expert"
            image={team3}
          ></TrainnerCard>
        </div>
      </div> */}
      {/* Time Schedule */}
      {/* <div className="bg-white pt-20 pb-10">
        <div className="px-5 text-center ">
          <div className="flex items-center justify-center">
            <div className="h-[2px] w-[100px] bg-main"></div>
            <SubHead color="main" title="Our Time Schedule" />
          </div>
          <div className="w-full lg:w-[60%] mx-auto">
            <SectionHead
              color="black"
              title="Select The Perfect Time You Need Now "
            ></SectionHead>
          </div>
        </div>
        <div className="my-20 font-popins">
          <ul className="bg-sky px-4 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:px-20 gap-4">
            <li className="px-6 py-2 text-[24px]  text-center">Suturday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Sunday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Monday</li>
            <li className="px-6 py-2 text-[24px] bg-main text-white text-center">
              Tuesday
            </li>
            <li className="px-6 py-2 text-[24px]  text-center">Wednesday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Thursday</li>
            <li className="px-6 py-2 text-[24px]  text-center">Friday</li>
          </ul>
          <ul className="bg-sky px-4 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:px-20 gap-4">
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center bg-main ">
              <div className="text-white">
                <h5 className="bg-white text-black px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
            <li className="px-6 py-6 text-[24px]  text-center  ">
              <div>
                <h5 className="bg-black text-white px-4 py-2">8am-10am</h5>
                <h2 className="text-[30px]">Kick Boxing</h2>
                <p>by Jhon Doe</p>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="my-10 lg:flex items-center justify-between s:my-10" style={{marginTop:"0"}} id="contact_us">
        <div className="container" style={{marginTop:"0"}}>
          <div className="row">
            <h1>Send your query here!</h1>
          </div>
          <div className="row">
            <h4 style={{textAlign:"center"}}>We'd love to answer your query.</h4>
          </div>
          <form className="row input-container" onSubmit={handleOnSubmit}>
            <div className="col-xs-12">
              <div className="styled-input wide">
                <input type="text" name="from_name" required />
                <label>Name</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input">
                <input type="text" name="email_id" required />
                <label>Email</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input" style={{ float: 'right'}}>
                <input type="text" name="phone_no" required />
                <label>Phone Number</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="styled-input wide">
                <textarea name="message" required></textarea>
                <label>Message</label>
              </div>
            </div>
            <div className="col-xs-12">
              <input className="btn-lrg submit-btn" type="submit"  value="Send Message"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
