// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import video from "../video/aluxe rework 1.mp4";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
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
            </div>
            <div className="text-center pt-5 font-merriweather">
              <h1 className="text-5xl text-black">-</h1>
            </div>
            <div className="text-center pt-2 pb-12 font-merriweather">
              <p className="text-normal text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                sed do eiusmod tempor eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <p className="text-normal text-black">
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <p className="text-normal text-black">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                sed do eiusmod tempor labore et dolore magna aliqua.
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
              <div>
                <div className="sm:w-[450px] p-5">
                  <video loop muted src={video}></video>
                </div>
              </div>
              <div>
                <div className="py-8">
                  <h1 className="font-garamond text-5xl pb-8 sm:text-end text-center text-red-600">
                    What We Do
                  </h1>
                </div>
                <div>
                  <p className="text-normal text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing sed do
                    sed do eiusmod tempor eiusmod temporF dolore magna aliqua.
                  </p>
                  <p className="text-normal text-black">
                    dolor sit amet, consectetur adipiscing elit tempor sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p className="text-normal text-black">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut sed do eiusmod tempor labore et dolore magna
                    aliqua.
                  </p>
                  <p className="text-normal text-black">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut sed do eiusmod tempor labore et dolore magna
                    aliqua.
                  </p>
                  <p className="text-normal text-black">
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut sed do eiusmod tempor labore et dolore magna
                    aliqua.
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
              className=" hover:-translate-y-4 duration-200 transition-all ease-in rounded-t-2xl overflow-hidden"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur in totam soluta repellendus. Placeat, assumenda!
                  Animi velit tempora doloribus veritatis praesentium natus
                  quibusdam distinctio, nulla, nihil, maiores aspernatur?
                  Libero, excepturi?
                </p>
              </div>
            </div>
            <div
              className=" hover:-translate-y-4 duration-200 transition-all ease-in rounded-t-2xl overflow-hidden"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur in totam soluta repellendus. Placeat, assumenda!
                  Animi velit tempora doloribus veritatis praesentium natus
                  quibusdam distinctio, nulla, nihil, maiores aspernatur?
                  Libero, excepturi?
                </p>
              </div>
            </div>
            <div
              className=" hover:-translate-y-4 duration-200 transition-all ease-in rounded-t-2xl overflow-hidden"
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur in totam soluta repellendus. Placeat, assumenda!
                  Animi velit tempora doloribus veritatis praesentium natus
                  quibusdam distinctio, nulla, nihil, maiores aspernatur?
                  Libero, excepturi?
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
          </div>
        </section>
        <section>
          <div className="faq-section text-white bg-black pb-12 pt-5 px-2">
            <h2 className="pb-6 font-robotoflex text-3xl pt-4">
              Frequently Asked Questions
            </h2>
            <FaqItem
              question="What is React JS?"
              answer="React JS is an open-source JavaScript library for building user interfaces, especially for single-page applications. It was developed by Facebook and is widely used in the development of modern web applications."
            />
            <FaqItem
              question="What are the benefits of using React JS?"
              answer="React JS offers several benefits such as component-based architecture, reusable UI components, faster rendering, and efficient handling of state changes. These features lead to more efficient, scalable, and maintainable code."
            />
            <FaqItem
              question="Is React JS the same as Angular JS or Vue JS?"
              answer="No, React JS is a different JavaScript library for building user interfaces. However, it shares some similarities with other popular libraries like Angular JS and Vue JS, as they are all designed to handle complex UI rendering tasks in a more efficient manner."
            />
            <FaqItem
              question="Can React JS be used for building mobile applications?"
              answer="While React JS is primarily used for building web applications, it can also be used to create mobile applications using tools like React Native. React Native allows developers to build native mobile applications for iOS and Android using only JavaScript."
            />
          </div>
        </section>
      </main>
      <Whatsapp />
      <Footer />
    </>
  );
}
