// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import video from "../video/aluxe rework 1.mp4";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
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
export default function Services() {
  return (
    <>
      <main>
        <section>
          <div className="flex justify-center bg-center bg-cover object-cover w-full p-8">
            <img src="images/Aluxe banner.jpg" alt="" />
          </div>
        </section>
        <section className="pt-5 pb-12 bg-[whitesmoke]">
          <div className="justify-center text-center py-12">
            <h1 className="font-cormorantgaramond text-5xl uppercase pb-2 text-red-600">
              Services you get with us
            </h1>
            <h2 className="font-cormorantgaramond pt-3 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque in
              saepe reprehenderit, amet odio aliquam omnis vel aperiam dolor
              esse soluta.
            </h2>
            <h3 className="font-cormorantgaramond pt-1 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque in
              saepe reprehenderit,
            </h3>
          </div>
          <div className="flex flex-wrap sm:justify-evenly justify-center sm:pt-12 z-[10] gap-5">
            <div
              className=" hover:-translate-y-4 duration-200 transition-all ease-in rounded-t-2xl overflow-hidden"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div className="w-96 h-64 flex justify-center overflow-hidden">
                <img
                  className="hover:scale-125 transition-all ease-in duration-200"
                  src="https://www.pascotata.com/uploads/cache/cms/3699as-900x500.jpg"
                  alt=""
                />
              </div>
              <div className="bg-white py-5 w-96 px-2">
                <h1 className="text-2xl font-robotoflex   pb-2">Streamlined, Tailor-Made Experiences</h1>
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
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div className="w-96 h-64 flex justify-center overflow-hidden">
                <img
                  className="hover:scale-125 transition-all ease-in duration-200"
                  src="https://www.pascotata.com/uploads/cache/cms/3699as-900x500.jpg"
                  alt=""
                />
              </div>
              <div className="bg-white py-5 w-96 px-2">
                <h1 className="text-2xl font-robotoflex   pb-2">Services</h1>
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
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div className="w-96 h-64 flex justify-center overflow-hidden">
                <img
                  className="hover:scale-125 transition-all ease-in duration-200"
                  src="https://www.pascotata.com/uploads/cache/cms/3699as-900x500.jpg"
                  alt=""
                />
              </div>
              <div className="bg-white py-5 w-96 px-2">
                <h1 className="text-2xl font-robotoflex   pb-2">Services</h1>
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
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div className="w-96 h-64 flex justify-center overflow-hidden">
                <img
                  className="hover:scale-125 transition-all ease-in duration-200"
                  src="https://www.pascotata.com/uploads/cache/cms/3699as-900x500.jpg"
                  alt=""
                />
              </div>
              <div className="bg-white py-5 w-96 px-2">
                <h1 className="text-2xl font-robotoflex   pb-2">Services</h1>
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
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div className="w-96 h-64 flex justify-center overflow-hidden">
                <img
                  className="hover:scale-125 transition-all ease-in duration-200"
                  src="https://www.pascotata.com/uploads/cache/cms/3699as-900x500.jpg"
                  alt=""
                />
              </div>
              <div className="bg-white py-5 w-96 px-2">
                <h1 className="text-2xl font-robotoflex   pb-2">Services</h1>
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
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              }}
            >
              <div className="w-96 h-64 flex justify-center overflow-hidden">
                <img
                  className="hover:scale-125 transition-all ease-in duration-200"
                  src="https://www.pascotata.com/uploads/cache/cms/3699as-900x500.jpg"
                  alt=""
                />
              </div>
              <div className="bg-white py-5 w-96 px-2">
                <h1 className="text-2xl font-robotoflex   pb-2">Services</h1>
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
        <section>
          <div className="flex justify-center p-10 bg-red-600">
            <video autoPlay loop muted src={video}></video>
          </div>
        </section>
        <section className="pt-20 pb-10 bg-gray-100">
          <div className="">
            <div className="flex flex-wrap sm:justify-between justify-center p-10 items-center">
              <div>
                <div className="py-8">
                  <h1 className="font-garamond text-5xl pb-8">
                    <span className="text-red-600">Why</span> Choose Our
                    Services
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
              <div className="block justify-center">
                <div className="flex justify-center gap-8 my-2">
                  <div
                    className="border-2 sm:w-64 sm:h-64 w-48 rounded-xl shadow-3xl"
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                    }}
                  >
                    <img
                      src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                      alt=""
                    />
                  </div>

                  <div
                    className="border-2 sm:w-64 sm:h-64 w-48 rounded-xl shadow-3xl"
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                    }}
                  >
                    <img
                      src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-8 my-2">
                  <div
                    className="border-2 sm:w-64 sm:h-64 w-48  rounded-xl shadow-3xl"
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                    }}
                  >
                    <img
                      src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                      alt=""
                    />
                  </div>
                  <div
                    className="border-2sm:w-64 sm:h-64 w-48 f rounded-xl shadow-3xl"
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                    }}
                  >
                    <img
                      src="images/WhatsApp Image 2023-12-05 at 11.10.19_77c9a0eb-PhotoRoom.png-PhotoRoom.png"
                      alt=""
                    />
                  </div>
                </div>
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
      <Footer />
      <Whatsapp/>
    </>
  );
}
