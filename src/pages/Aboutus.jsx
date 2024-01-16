// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import video from "../video/aluxe rework 1.mp4";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import "../css/aboutswiper.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// eslint-disable-next-line react/prop-types
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
export default function Aboutus() {
  return (
    <>
      <main>
        <section>
          <div className="flex justify-center bg-center bg-cover object-cover w-full p-8">
            <img src="images/Aluxe banner 2.jpg" alt="" />
          </div>
        </section>
        <section>
          <div className="bg-[#EFF2F6]">
            <div className="text-center pt-20 font-merriweather">
              <h1 className="text-5xl text-black uppercase text-red-600">
                About US
              </h1>
              <h1 className="text-xl text-black uppercase pt-2">
                The Game Changers of Aluminium - Introducing ALUXE
              </h1>
            </div>
            <div className="text-center font-merriweather">
              <h1 className="text-5xl text-black">-</h1>
            </div>
            <div className="text-center pt-2 pb-12 font-merriweather">
              <p className="text-normal text-black  sm:px-8">
                Tired of the endless back-and-forth with suppliers? Fed up with
                inconsistent quality and unreliable delivery times? We feel you.
                The world of aluminium sourcing can feel like a high-stakes game
                of ping pong, with businesses and consumers alike left bouncing
                from vendor to vendor. Well, it's time to stop keeping up and
                start taking the lead. We're ALUXE - the progressive pioneers
                flipping the script on aluminium products across the nation.
                From construction railings to office partitions and everything
                in between, we're the passionate all stars driving simplicity,
                consistency and convenience into the industry. No more loose
                balls or false fouls - just streamlined sourcing with service to
                match.
              </p>
            </div>
          </div>
        </section>
        <section className="h-[100vh">
          <div className="bg-red-600">
            <div className="flex justify-center p-10 items-center">
              <div>
                <div className="py-8 text-center flex justify-center">
                  <h1 className="font-garamond text-5xl pb-2 text-white border-b-2">
                    Who We Are
                  </h1>
                </div>
                <div className="flex justify-center pt-10"></div>
                <div className="sm:w-[850px] overflow-hidden rounded-xl border-2 shadow-2xl">
                  <video autoPlay={true} muted loop src={video}></video>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-gray-100 py-12">
            <div className="flex flex-wrap  sm:justify-between justify-center p-10 items-center">
              <div className="sm:w-[50%]">
                <div className="sm:w-[450px] p-5">
                  <video loop muted src={video}></video>
                </div>
              </div>
              <div className="sm:w-[50%]">
                <div className="py-8">
                  <h1 className="font-garamond text-5xl pb-8 sm:text-end text-center text-red-600">
                    What We Do
                  </h1>
                </div>
                <div>
                  <p className="text-normal text-black text-xl font-semibold">
                    Ready to discover everything ALUXE has redefined? Let’s
                    huddle up.
                  </p>
                  <p className="text-normal text-black pt-5">
                    ALUXE Aluminium Railings Our specialty aluminium railings
                    strike the ideal balance of form and function. With multiple
                    profile offerings boasting smooth or decorative detailing,
                    this versatile system complements any outdoor setting from
                    gardens to balconies and beyond. Select from various colors
                    or opt for durable powder-coated finishes to achieve your
                    ideal aesthetic that withstands the elements in style.
                  </p>
                  <p className="text-normal text-black">
                    Features: Sleek, low-profile design Customizable heights and
                    layouts Effortless DIY installation Resilient construction
                    stands the test of time
                  </p>
                  <p className="text-normal text-black">
                    ALUXE Slimline Sliding Partitions Invisible design meets
                    flawless functionality within our Slimline Sliding Partition
                    series - the barely-there divider disguising small spaces in
                    sophistication. Offering concealed storage in gaps as thin
                    as 50mm, this versatile system tucks full-height walls away
                    when privacy is not required. From sleek glass to elegant
                    timber or textured metal facades, personalize then watch
                    your room transform before your eyes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-red-600">
          <div className="pt-5 pb-20 text-center font-robotoflex sm:text-6xl text-xl text-white">
            <h1>Our Goals</h1>
          </div>
          <div className="flex flex-wrap justify-evenly gap-5">
            <div
              className=" hover:-translate-y-4 duration-200 sm:h-[555px] bg-white   transition-all ease-in rounded-t-2xl overflow-hidden"
              style={{
                boxShadow:
                  " rgba(217, 64, 71, 0.25) 0px 50px 100px -20px, rgba(245, 234, 234, 0.3) 0px 30px 60px -30px, rgba(209, 47, 47, 0.35) 0px -2px 6px 0px inset;",
              }}
            >
              <div className="w-96 h-64 flex justify-center">
                <img
                  src="https://www.pascotata.com/uploads/cache/cms/3699as-900x500.jpg"
                  alt=""
                />
              </div>
              <div className="bg-white py-5 w-96 px-2">
                <h1 className="text-2xl font-robotoflex   pb-2">Our Vision</h1>
                <p>
                  The vision of ALUXE is an aluminum utopia that provides no
                  hassles, addictive convenience and delights to every buyer. We
                  see a world where creators can easily access the best aluminum
                  materials and components so they’re able to convert their
                  imaginative ideas into revolutionary products. Above all, we
                  dream of a reliable place where aluminum dreams are realized.
                </p>
              </div>
            </div>
            <div
              className=" hover:-translate-y-4 duration-200 sm:h-[555px] bg-white  transition-all ease-in rounded-t-2xl overflow-hidden"
              style={{
                boxShadow:
                  " rgba(217, 64, 71, 0.25) 0px 50px 100px -20px, rgba(245, 234, 234, 0.3) 0px 30px 60px -30px, rgba(209, 47, 47, 0.35) 0px -2px 6px 0px inset;",
              }}
            >
              <div className="w-96 h-64 flex justify-center">
                <img
                  src="https://www.pascotata.com/uploads/cache/cms/3699as-900x500.jpg"
                  alt=""
                />
              </div>
              <div className="bg-white py-5 w-96 px-2">
                <h1 className="text-2xl font-robotoflex   pb-2">Our Mision</h1>
                <p>
                  Our mission is to be the aluminum industry's knight in shining
                  armor. We are on a quest to slay the beasts of buyer
                  frustration including unreliable suppliers, inconsistent
                  quality, unexpected delays, and inexplicable price hikes! We
                  take immense pride in vetting partners, streamlining supply
                  channels, and consolidating buyer power so we can provide
                  aluminum goods that dazzle on time, every time.
                </p>
              </div>
            </div>
            <div
              className=" hover:-translate-y-4 duration-200 sm:h-[555px] bg-white  transition-all ease-in rounded-t-2xl overflow-hidden"
              style={{
                boxShadow:
                  " rgba(217, 64, 71, 0.25) 0px 50px 100px -20px, rgba(245, 234, 234, 0.3) 0px 30px 60px -30px, rgba(209, 47, 47, 0.35) 0px -2px 6px 0px inset;",
              }}
            >
              <div className="w-96 h-64 flex justify-center">
                <img
                  src="https://www.pascotata.com/uploads/cache/cms/3699as-900x500.jpg"
                  alt=""
                />
              </div>
              <div className="bg-white py-5 w-96 px-2">
                <h1 className="text-2xl font-robotoflex   pb-2">Our Value</h1>
                <p>
                  Aluminum Passion: We're obsessed with aluminum—its properties,
                  manufacturing, and all things metal. Quality Mastery:
                  Meticulously ensuring metal magic in every product. Customer
                  Delight: Your joy is our mission, from seamless purchases to
                  top-notch service. Metal Community: Building connections with
                  experts, creators, and manufacturers for shared insights and
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="sm:py-28 py-5 border-2 bg-gray-200">
          <div className="flex justify-center text-center text-4xl">
            <h2 className=" border-b-2 border-gray-600 pb-4 ">
              Customer Testimonials
            </h2>
          </div>
          <div className="flex flex-wrap sm:justify-evenly justify-center gap-5 pt-12  ">
            {/* <div
              className="p-2 w-96 border-2 flex flex-col justify-center items-center rounded-lg hover:-translate-y-4 duration-200 transition-all ease-in bg-white "
              style={{
                boxShadow: "0 8px 30px -7px #c9dff0",
              }}
            >
              <div className="w-28 h-28 rounded-full border-2 overflow-hidden ">
                <img
                  className=" hover:scale-110 transition-all ease-in duration-150"
                  src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                  alt=""
                  style={{
                    boxShadow: "0 8px 30px -7px #c9dff0",
                  }}
                />
              </div>
              <div className="text-center pt-5 text-sky-400 text-xl font-merriweather">
                <h1>Name</h1>
              </div>
              <div className="text-center px-5 pt-2 pb-5 font-merriweather ">
                <p>
                  " Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima, possimus laboriosam saepe earum nostrum magni
                  inventore quasi incidunt, vero laudantium deleniti sunt illo
                  officia ducimus quis autem soluta nulla officiis? "
                </p>
              </div>
            </div>
            <div
              className="p-2 w-96 border-2 flex flex-col justify-center items-center rounded-lg hover:-translate-y-4 duration-200 transition-all ease-in bg-white "
              style={{
                boxShadow: "0 8px 30px -7px #c9dff0",
              }}
            >
              <div className="w-28 h-28 rounded-full border-2 overflow-hidden ">
                <img
                  className=" hover:scale-110 transition-all ease-in duration-150"
                  src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                  alt=""
                  style={{
                    boxShadow: "0 8px 30px -7px #c9dff0",
                  }}
                />
              </div>
              <div className="text-center pt-5 text-sky-400 text-xl font-merriweather">
                <h1>Name</h1>
              </div>
              <div className="text-center px-5 pt-2 pb-5 font-merriweather ">
                <p>
                  " Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima, possimus laboriosam saepe earum nostrum magni
                  inventore quasi incidunt, vero laudantium deleniti sunt illo
                  officia ducimus quis autem soluta nulla officiis? "
                </p>
              </div>
            </div>
            <div
              className="p-2 w-96 border-2 flex flex-col justify-center items-center rounded-lg hover:-translate-y-4 duration-200 transition-all ease-in bg-white "
              style={{
                boxShadow: "0 8px 30px -7px #c9dff0",
              }}
            >
              <div className="w-28 h-28 rounded-full border-2 overflow-hidden ">
                <img
                  className=" hover:scale-110 transition-all ease-in duration-150"
                  src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                  alt=""
                  style={{
                    boxShadow: "0 8px 30px -7px #c9dff0",
                  }}
                />
              </div>
              <div className="text-center pt-5 text-sky-400 text-xl font-merriweather">
                <h1>Name</h1>
              </div>
              <div className="text-center px-5 pt-2 pb-5 font-merriweather ">
                <p>
                  " Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minima, possimus laboriosam saepe earum nostrum magni
                  inventore quasi incidunt, vero laudantium deleniti sunt illo
                  officia ducimus quis autem soluta nulla officiis? "
                </p>
              </div>
            </div> */}
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              autoplay={{
                delay: 2500, // Set the delay in milliseconds between slides
                disableOnInteraction: false, // Autoplay will not be disabled after user interactions
              }}
              className="mySwiper flex justify-center ps-4 py-2"
              // breakpoints={{
              //   // when window width is <= 480px
              //   480: {
              //     slidesPerView: 1,
              //     spaceBetween: 10,
              //   },
              //   // when window width is <= 768px
              //   768: {
              //     slidesPerView: 1,
              //     spaceBetween: 20,
              //   },
              // }}
            >
              <SwiperSlide className="">
                {" "}
                <div
                  className="p-2 w-96  border-2 flex flex-col justify-center items-center rounded-lg hover:-translate-y-4 duration-200 transition-all ease-in bg-white "
                  style={{
                    boxShadow: "0 8px 30px -7px #c9dff0",
                  }}
                >
                  <div className="w-28 h-28 rounded-full border-2 overflow-hidden ">
                    <img
                      className=" hover:scale-110 transition-all ease-in duration-150"
                      src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                      alt=""
                      style={{
                        boxShadow: "0 8px 30px -7px #c9dff0",
                      }}
                    />
                  </div>
                  <div className="text-center pt-5 text-sky-400 text-xl font-merriweather">
                    <h1>Name</h1>
                  </div>
                  <div className="text-center px-5 pt-2 pb-5 font-merriweather ">
                    <p>
                      " Lorem ipsum, dolor sit amet consectetur adipisicing
                      elit. Minima, possimus laboriosam saepe earum nostrum
                      magni inventore quasi incidunt, vero laudantium deleniti
                      sunt illo officia ducimus quis autem soluta nulla
                      officiis? "
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                {" "}
                <div
                  className="p-2 w-96  border-2 flex flex-col justify-center items-center rounded-lg hover:-translate-y-4 duration-200 transition-all ease-in bg-white "
                  style={{
                    boxShadow: "0 8px 30px -7px #c9dff0",
                  }}
                >
                  <div className="w-28 h-28 rounded-full border-2 overflow-hidden ">
                    <img
                      className=" hover:scale-110 transition-all ease-in duration-150"
                      src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                      alt=""
                      style={{
                        boxShadow: "0 8px 30px -7px #c9dff0",
                      }}
                    />
                  </div>
                  <div className="text-center pt-5 text-sky-400 text-xl font-merriweather">
                    <h1>Name</h1>
                  </div>
                  <div className="text-center px-5 pt-2 pb-5 font-merriweather ">
                    <p>
                      " Lorem ipsum, dolor sit amet consectetur adipisicing
                      elit. Minima, possimus laboriosam saepe earum nostrum
                      magni inventore quasi incidunt, vero laudantium deleniti
                      sunt illo officia ducimus quis autem soluta nulla
                      officiis? "
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                {" "}
                <div
                  className="p-2 w-96  border-2 flex flex-col justify-center items-center rounded-lg hover:-translate-y-4 duration-200 transition-all ease-in bg-white "
                  style={{
                    boxShadow: "0 8px 30px -7px #c9dff0",
                  }}
                >
                  <div className="w-28 h-28 rounded-full border-2 overflow-hidden ">
                    <img
                      className=" hover:scale-110 transition-all ease-in duration-150"
                      src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                      alt=""
                      style={{
                        boxShadow: "0 8px 30px -7px #c9dff0",
                      }}
                    />
                  </div>
                  <div className="text-center pt-5 text-sky-400 text-xl font-merriweather">
                    <h1>Name</h1>
                  </div>
                  <div className="text-center px-5 pt-2 pb-5 font-merriweather ">
                    <p>
                      " Lorem ipsum, dolor sit amet consectetur adipisicing
                      elit. Minima, possimus laboriosam saepe earum nostrum
                      magni inventore quasi incidunt, vero laudantium deleniti
                      sunt illo officia ducimus quis autem soluta nulla
                      officiis? "
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="">
                {" "}
                <div
                  className="p-2 w-96  border-2 flex flex-col justify-center items-center rounded-lg hover:-translate-y-4 duration-200 transition-all ease-in bg-white "
                  style={{
                    boxShadow: "0 8px 30px -7px #c9dff0",
                  }}
                >
                  <div className="w-28 h-28 rounded-full border-2 overflow-hidden ">
                    <img
                      className=" hover:scale-110 transition-all ease-in duration-150"
                      src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                      alt=""
                      style={{
                        boxShadow: "0 8px 30px -7px #c9dff0",
                      }}
                    />
                  </div>
                  <div className="text-center pt-5 text-sky-400 text-xl font-merriweather">
                    <h1>Name</h1>
                  </div>
                  <div className="text-center px-5 pt-2 pb-5 font-merriweather ">
                    <p>
                      " Lorem ipsum, dolor sit amet consectetur adipisicing
                      elit. Minima, possimus laboriosam saepe earum nostrum
                      magni inventore quasi incidunt, vero laudantium deleniti
                      sunt illo officia ducimus quis autem soluta nulla
                      officiis? "
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section>
          <div className="faq-section text-white bg-black pb-12 pt-5 px-2">
            <h2 className="pb-6 font-robotoflex text-3xl pt-4">
              Frequently Asked Questions
            </h2>
            <FaqItem
              question="Who is ALUXE and why should I care? "
              answer="ALUXE is your new best friend for all things aluminum! We make the mind-numbing world of aluminum buying fun and hassle-free. Stick with us and say goodbye to frustrating suppliers and flakey quality."
            />
            <FaqItem
              question="Why is ALUXE any better than the other 50 aluminum companies I see ads for? "
              answer="We're gluttons for aluminum punishment who have dealt with all the BS so you don't have to. We vet suppliers, quality check everything, and have mega buying power for deals. Plus we're kinda fun to hang with!
              "
            />
            <FaqItem
              question=" How did ALUXE get started on its quest for aluminum domination? "
              answer="One fateful day our founder was stood up by yet another unreliable aluminum supplier. In a caffeine-fueled rage, ALUXE was born to right the wrongs of the industry. We've been angrily improving it ever since!
              "
            />
            <FaqItem
              question=" Does ALUXE really offer the best aluminum pricing? "
              answer="You bet your sweet patootie we do! By consolidating buyer power and eliminating middlemen we can pass killer savings to you. Take that ridiculous aluminum markup!"
            />
          </div>
        </section>
      </main>
      <Whatsapp />
      <Footer />
    </>
  );
}
