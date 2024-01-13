// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import myImage from "../images/Aluxe banner.jpg";
import { Link } from "react-router-dom";
import "../css/Home.css";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
const FaqItem = ({ question, answer }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <div className="faq-item border-2 mt-4 px-2 shadow-2xl shadow-inner">
      <h3
        className=" cursor-pointer py-2 font-sans -2 mt-2"
        onClick={handleClick}
      >
        {question}
      </h3>
      {visible && <p className=" font-robotoflex  ">{answer}</p>}
    </div>
  );
};
AOS.init();

export default function Home() {
  return (
    <div>
      <main>
        <section className="bg-gray-200">
          <div className="p-5">
            <img src={myImage} alt="" />
          </div>
        </section>
        <section className="py-20 bg-[whitesmoke]">
          <div className="flex justify-center items-center gap-8">
            <div className="h-[2px] sm:w-64 w-12 bg-black"></div>
            <div className="flex justify-center">
              <h1 className="text-center sm:text-4xl text-xl uppercase">
                Our Product Catalogue
              </h1>
            </div>
            <div className="h-[2px] sm:w-64 w-12 bg-black"></div>
          </div>
          <div className="sm:pt-20 pt-12">
            <div className="flex flex-wrap justify-evenly px-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div
                  className="sm:w-64 sm:h-64 w-[160px] h-48 bg-white mt-4"
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  }}
                >
                  <img
                    src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                    alt=""
                  />
                </div>
                <div className="text-center border-2 p-2 text-white bg-red-600">
                  <h1>Product Name</h1>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <div
                  className="sm:w-64 sm:h-64 w-[160px] h-48 bg-white mt-4"
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  }}
                >
                  <img
                    src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                    alt=""
                  />
                </div>
                <div className="text-center border-2 p-2 text-white bg-red-600">
                  <h1>Product Name</h1>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <div
                  className="sm:w-64 sm:h-64 w-[160px] h-48 bg-white mt-4"
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  }}
                >
                  <img
                    src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                    alt=""
                  />
                </div>
                <div className="text-center border-2 p-2 text-white bg-red-600">
                  <h1>Product Name</h1>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <div
                  className="sm:w-64 sm:h-64 w-[160px] h-48 bg-white mt-4"
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  }}
                >
                  <img
                    src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                    alt=""
                  />
                </div>
                <div className="text-center border-2 p-2 text-white bg-red-600">
                  <h1>Product Name</h1>
                </div>
              </div>
            </div>
          </div>
          <div
            className="pt-12 flex justify-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-red-700 bg-opacity-100 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                height="24px"
                width="24px"
              >
                <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Interface / Download">
                    {" "}
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      stroke="#f1f1f1"
                      d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                      id="Vector"
                    ></path>{" "}
                  </g>{" "}
                </g>
              </svg>
              Download Catalogue
              <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                Download
              </div>
            </button>
          </div>
        </section>
        <section className="sm:py-20 py-8 bg-[#CC1704]">
          <div className="flex flex-wrap sm:justify-between justify-center items-center p-5">
            <div className="sm:flex hidden justify-center">
              <div
                className="sm:w-[550px] overflow-hidden border-4 bg-gray-200 rounded-lg "
                style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <img
                  className="hover:scale-125 transition-all ease-in duration-200"
                  src="../images/WhatsApp Image 2023-12-06 at 12.27.11_172f339e-PhotoRoom.png-PhotoRoom.png"
                  alt=""
                />
              </div>
            </div>
            <div className="block justify-center">
              <div className="text-center py-12">
                <h1 className="uppercase text-4xl border-b-2 pb-2 text-white font-sans">
                  Best Seller
                </h1>
              </div>
              <div className="flex flex-wrap sm:justify-evenly justify-center gap-5">
                <div
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  }}
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="sm:w-64 w-64 h-38 border-2 bg-white overflow-hidden">
                    <img
                      className="hover:scale-125 transition-all ease-in duration-150"
                      src="images/WhatsApp Image 2023-12-06 at 12.27.11_ced082fe-PhotoRoom.png-PhotoRoom.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center border-2 p-2 bg-red-600 text-white">
                    <h1>Product Name</h1>
                  </div>
                </div>
                <div
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  }}
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  <div className="sm:w-64 w-64 h-38 border-2 bg-white overflow-hidden">
                    <img
                      className="hover:scale-125 transition-all ease-in duration-150"
                      src="images/WhatsApp Image 2023-12-06 at 12.27.11_ced082fe-PhotoRoom.png-PhotoRoom.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center border-2 p-2 bg-red-600 text-white">
                    <h1>Product Name</h1>
                  </div>
                </div>
                <div
                  style={{
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                  }}
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <div className="sm:w-64 w-64 h-38 border-2 bg-white overflow-hidden">
                    <img
                      className="hover:scale-125 transition-all ease-in duration-150"
                      src="images/WhatsApp Image 2023-12-06 at 12.27.11_ced082fe-PhotoRoom.png-PhotoRoom.png"
                      alt=""
                    />
                  </div>
                  <div className="text-center border-2 p-2 bg-red-600 text-white">
                    <h1>Product Name</h1>
                  </div>
                </div>
              </div>
              <div className="pt-12 flex justify-center">
                <Link to={"/Products"}>
                  {" "}
                  <button className="cursor-pointer flex gap-1.5 px-8 py-4 bg-black bg-opacity-100 text-[#f1f1f1] rounded-3xl hover:bg-opacity-90 transition font-semibold shadow-md">
                    View All
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 relative">
          <div className=" absolute inset-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#CC1704"
                fillOpacity="1"
                d="M0,64L1440,96L1440,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="text-center py-12">
            <h1 className="uppercase text-4xl border-b-2 pb-4 font-sans">
              <span className="text-red-600"> EXPLORE</span> Our New Launched
              Product
            </h1>
          </div>
          <div className="sm:px-5 py-12 flex flex-wrap justify-center gap-5 overflow-x-hidden">
            <div
              className="w-64"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              <div className="w-64 h-64 border-2">
                <img
                  src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                  alt=""
                />
              </div>
              <div className="text-center border-2 p-2 bg-red-600 text-white">
                <h1>Product Name</h1>
              </div>
            </div>
            <div
              className="w-64"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="600"
            >
              <div className="w-64 h-64 border-2">
                <img
                  src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                  alt=""
                />
              </div>
              <div className="text-center border-2 p-2 bg-red-600 text-white">
                <h1>Product Name</h1>
              </div>
            </div>
            <div
              className="w-64"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
            >
              <div className="w-64 h-64 border-2">
                <img
                  src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                  alt=""
                />
              </div>
              <div className="text-center border-2 p-2 bg-red-600 text-white">
                <h1>Product Name</h1>
              </div>
            </div>
            <div
              className="w-64"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="800"
            >
              <div className="w-64 h-64 border-2">
                <img
                  src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                  alt=""
                />
              </div>
              <div className="text-center border-2 p-2 bg-red-600 text-white">
                <h1>Product Name</h1>
              </div>
            </div>
            <div
              className="w-64"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="900"
            >
              <div className="w-64 h-64 border-2">
                <img
                  src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                  alt=""
                />
              </div>
              <div className="text-center border-2 p-2 bg-red-600 text-white">
                <h1>Product Name</h1>
              </div>
            </div>
          </div>
          <div
            className=" relative flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <Link to={"/Products"}>
              <button className="border-2 px-6 py-4 rounded-2xl bg-red-600 text-white font-sans shadow-2xl cursor-pointer hover:opacity-100 opacity-90 transition-all ease-in duration-150">
                View More
              </button>
            </Link>
          </div>
        </section>
        <section className="py-20 bg-[#DADADA]">
          <div className="flex justify-center gap-5 items-center">
            <div className="h-[2px] w-64 bg-black"></div>
            <div>
              <h1 className="text-center text-4xl py-8 uppercase">
                Trending Products
              </h1>
            </div>
            <div className="h-[2px] w-64 bg-black"></div>
          </div>
          <div className="flex justify-center gap-6 flex-wrap pt-20">
            <div
              className="card"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <div className="w-64 h-64 bg-white rounded-full flex justify-center text-center p-8 subcard overflow-hidden">
                <img
                  className="foto"
                  src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center pt-5 text-center font-cormorantgaramond text-xl uppercase productdiv">
                <h1 className="producttitle opacity-0 bg">Product Name</h1>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <div className="w-64 h-64 bg-white rounded-full flex justify-center text-center p-8 subcard overflow-hidden">
                <img
                  className="foto"
                  src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center pt-5 text-center font-cormorantgaramond text-xl uppercase productdiv">
                <h1 className="producttitle opacity-0 bg">Product Name</h1>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <div className="w-64 h-64 bg-white rounded-full flex justify-center text-center p-8 subcard overflow-hidden">
                <img
                  className="foto"
                  src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center pt-5 text-center font-cormorantgaramond text-xl uppercase productdiv">
                <h1 className="producttitle opacity-0 bg">Product Name</h1>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <div className="w-64 h-64 bg-white rounded-full flex justify-center text-center p-8 subcard overflow-hidden">
                <img
                  className="foto"
                  src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center pt-5 text-center font-cormorantgaramond text-xl uppercase productdiv">
                <h1 className="producttitle opacity-0 bg">Product Name</h1>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-out-up"
              data-aos-duration="1000"
            >
              <div className="w-64 h-64 bg-white rounded-full flex justify-center text-center p-8 subcard overflow-hidden">
                <img
                  className="foto"
                  src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center pt-5 text-center font-cormorantgaramond text-xl uppercase productdiv">
                <h1 className="producttitle opacity-0 bg">Product Name</h1>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="faq-section text-white bg-black pb-12 pt-5 px-2">
            <h2 className="pb-6 font-robotoflex text-3xl pt-4">
              Frequently Asked Questions
            </h2>
            <FaqItem
              question=" What makes ALUXE aluminum experts?"
              answer="We geek out hard on all things aluminum. Metallurgy, manufacturing techniques, anodizing - we love it all! Our team has ridiculous combined aluminum experience from across the industry. We're kind of aluminum know-it-alls (but in a good way)."
            />
            <FaqItem
              question="Why should I trust ALUXE for my first aluminum buy?"
              answer="Don't just take our word for it - check our 5 star customer reviews! We've helped hundreds of first-timers fall in love with hassle-free aluminum purchasing. Give us one order and we promise you'll stick around. "
            />
            <FaqItem
              question=" Does ALUXE really offer reliable shipping and order support?"
              answer="You betcha! We have an awesome logistics team focused on getting orders RIGHT and on time. We also have aluminum-obsessed customer support ready to answer any material questions. Buy with total peace of mind.  
              "
            />
            <FaqItem
              question="What's with the weird name? What does ALUXE even mean?"
              answer="ALUXE mashes up aluminum and deluxe because that's what we provide - luxury aluminum purchasing! The name reminds us everyday to offer our clients nothing less than aluminum excellence."
            />
          </div>
        </section>
      </main>
      <Footer />
      <Whatsapp />
    </div>
  );
}
