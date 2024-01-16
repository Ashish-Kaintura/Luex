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
              Tired of lackluster customer service and unreliable product
              delivery plaguing your aluminum purchases? We fully understand the
              frustration. ALUXE was created to right those wrongs through our
            </h2>
            <h3 className="font-cormorantgaramond pt-1 text-lg">
              suite of value-driven services designed to simplify and enhance
              your experience.
            </h3>
          </div>
          <div className="flex flex-wrap sm:justify-evenly justify-center sm:pt-12 z-[10] gap-5">
            <div
              className=" hover:-translate-y-4 duration-200 transition-all ease-in rounded-t-2xl overflow-hidden h-100 bg-[#FEFEFE] w-96"
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
              <div className=" py-5  rounded-b-lg  px-2">
                <h1 className="text-2xl font-robotoflex   pb-2">
                  We Offer Unparalleled Product Customization
                </h1>
                <p>
                  With our broad product portfolio, you can choose the best
                  aluminum products that suit your preferences. Modify the
                  dimensions, finishes and configurations to design unique
                  railings, partitions and sliding walls that fit your exact
                  needs.
                </p>
              </div>
            </div>
            <div
              className=" hover:-translate-y-4 duration-200 transition-all ease-in rounded-t-2xl overflow-hidden h-100 bg-[#FEFEFE] w-96"
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
              <div className=" py-5  rounded-b-lg  px-2">
                <h1 className="text-2xl font-robotoflex pb-2">
                  We Lift the Legwork While You Reap Rewards
                </h1>
                <p>
                  Leave the ping-pong match behind. We handle the tedious
                  back-and-forth communication with manufacturers so you don’t
                  have to. Lean on our established industry relationships and
                  streamlined quoting process while enjoying wholesale pricing
                  advantages.
                </p>
              </div>
            </div>
            <div
              className=" hover:-translate-y-4 duration-200 transition-all ease-in rounded-t-2xl overflow-hidden h-100 bg-[#FEFEFE] w-96"
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
              <div className=" py-5  rounded-b-lg  px-2">
                <h1 className="text-2xl font-robotoflex   pb-2">
                  We Pass Convenience and Reliability Straight to You
                </h1>
                <p>
                  Our intuitive online shopping experience consolidates aluminum
                  browsing, custom ordering, and purchasing into one seamless
                  process. Accurately configure projects in real time while
                  checking stock availability in just a few clicks.
                </p>
              </div>
            </div>
            <div
              className=" hover:-translate-y-4 duration-200 transition-all ease-in rounded-t-2xl overflow-hidden h-100 bg-[#FEFEFE] w-96"
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
              <div className=" py-5  rounded-b-lg  px-2">
                <h1 className="text-2xl font-robotoflex   pb-2">
                  We Offer White Glove Delivery and Installation
                </h1>
                <p>
                  Take full service to the next level with our optional White
                  Glove delivery and installation. Let our skilled team handle
                  the entire process from coordinating courier services to
                  managing product transfers and carrying out full
                  start-to-finish installation.
                </p>
              </div>
            </div>
            <div
              className=" hover:-translate-y-4 duration-200 transition-all ease-in rounded-t-2xl overflow-hidden h-100 bg-[#FEFEFE] w-96"
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
              <div className=" py-5  rounded-b-lg  px-2">
                <h1 className="text-2xl font-robotoflex   pb-2">
                  We Pride Ourselves on Premium Design Services
                </h1>
                <p>
                  Stuck envisioning the perfect layout? Our in-house design
                  experts offer complementary consultations, 3D renderings, and
                  layout illustrations to crystallize project visions.
                </p>
              </div>
            </div>
            <div
              className=" hover:-translate-y-4 duration-200 transition-all ease-in rounded-t-2xl overflow-hidden h-100 bg-[#FEFEFE] w-96"
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
              <div className=" py-5  rounded-b-lg  px-2">
                <h1 className="text-2xl font-robotoflex   pb-2">
                  We Provide Unparalleled Customer Service and Support
                </h1>
                <p>
                  We don’t just deliver premium products – we offer an
                  exceptional experience from inquiry to installation and
                  beyond. Rely on our aluminum specialists for tailored guidance
                  every step while monitoring order status through proactive
                  tracking updates
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
              <div className="sm:w-[50%]">
                <div className="py-8">
                  <h1 className="font-garamond text-5xl pb-8">
                    <span className="text-red-600">Why</span> Choose Our
                    Services
                  </h1>
                </div>
                <div>
                  <div>
                    <h1 className="pb-2 font-sans text-xl font-semibold">
                      Unmatched Quality Control
                    </h1>
                    <li className="text-normal text-black">
                      All products hand-selected & rigorously tested for safety
                      and longevity
                    </li>
                    <li className="text-normal text-black">
                      Thorough factory audits guarantee only premium components
                      used
                    </li>
                    <li className="text-normal text-black">
                      Strict performance benchmarks products must meet
                      pre-approval
                    </li>
                  </div>
                  <div>
                    <h1 className="pb-2 font-sans text-xl font-semibold pt-2">
                      Extreme Customization Capabilities
                    </h1>
                    <li className="text-normal text-black">
                      Customize dimensions, finishes and configurations
                    </li>
                    <li className="text-normal text-black">
                      In-house design team translates unique visions into
                      reality
                    </li>
                    <li className="text-normal text-black">
                      All specialty orders accommodated; sky's the limit
                    </li>
                  </div>
                  <div>
                    <h1 className="pb-2 font-sans text-xl font-semibold pt-2">
                      White Glove Delivery & Installation
                    </h1>
                    <li className="text-normal text-black">
                      Full service optional delivery and installation.
                    </li>
                    <li className="text-normal text-black">
                      A professional team handles the process from start to
                      finish.
                    </li>
                    <li className="text-normal text-black">
                      Continuous process from order to working product
                    </li>
                  </div>
                  <div>
                    <h1 className="pb-2 font-sans text-xl font-semibold pt-2">
                      Unrivaled Customer Experience
                    </h1>
                    <li className="text-normal text-black">
                      Personalized guidance throughout entire process
                    </li>
                    <li className="text-normal text-black">
                      Proactive tracking and active delivery communication.
                    </li>
                    <li className="text-normal text-black">
                      Specialist team gladly helps with any questions/concerns
                    </li>
                  </div>
                </div>
              </div>
              <div className="block justify-center sm:w-[50%]">
                <div className="flex justify-around sm:gap-0 gap-4">
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
                <div className="flex justify-around mt-6 sm:gap-0 gap-4">
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
              question="How many aluminum products does ALUXE actually stock?  "
              answer="A gazillion! Well actually over 5,000 SKUs and counting. From architectural cladding to precision machined components, we've got all your needs covered. Browse our online catalog now and get ready to drool!"
            />
            <FaqItem
              question="Who are ALUXE's clients and what do they rave about most?  "
              answer="Ourqueryset tells us they love the convenience of our intuitive website, rapid order processing, and responsive customer support. From global corporations to indie makers, we make procurement sweet for all levels of buyers."
            />
            <FaqItem
              question="What types of customization are possible with your aluminum products?"
              answer="The possibilities are nearly endless! We offer full customization of dimensions, finishes, configurations, and more. Tell us what you're envisioning and our design team will make it a reality - any style railing, partition layout, sliding wall aesthetic, or specialty creation you desire, we can customize it. Feel free to get creative!"
            />
            <FaqItem
              question="Do you provide installation services?  "
              answer="For added convenience, we offer optional White Glove installation by our highly skilled aluminum craftsmen. Simply let us know at checkout if you'd like us to handle to complete start-to-finish process - from delivery coordination to materials transport, full assembly, and finalizing any finishing touches to perfection. We'll translate your order into fully-functioning installations.
              "
            />
          </div>
        </section>
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
