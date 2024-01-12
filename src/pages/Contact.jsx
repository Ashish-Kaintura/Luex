// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "../css/contact.css";
import Footer from "../components/Footer";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdPhonePortrait } from "react-icons/io";
import { IoIosMailOpen } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import Whatsapp from "../components/Whatsapp";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormData({
      name: "",
      email: "",
      phone: "",
      companyName: "",
      message: "",
    });
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <main>
        <section className="sm:h-[70vh] h-[50vh] bg-red-500 items-center flex relative">
          <div className="absolute sm:left-[22%] left-6 sm:top-[30%]">
            <h1 className="text-5xl text-[#151515] uppercase font-semibold font-sans">
              Get In Touch
            </h1>
            <h1 className="text-xl text-[#f2f2f2] uppercase font-semibold font-sans pt-2">
              with the ALUXE <span className="text-[#151515]"> All-Stars!</span>
            </h1>
            <h2 className="sm:w-96 pt-4 text-white">
              Thanks for considering ALUXE as your go-to source for aluminium
              products! We're driven to deliver unmatched quality,
              customization, and reliability to each and every order. Ready to
              get the ball rolling? We're here to assist!
            </h2>
          </div>
        </section>
        <section className="py-10 bg-gray-300">
          <div className="relative sm:h-[45vh] h-[100vh] flex justify-center">
            <div className=" absolute sm:top-[-40%] top-[-10%] z-10 sm:left-[-2%] inset-0 flex flex-wrap justify-center">
              <div
                className="sm:w-100 w-full sm:h-[420px] bg-white p-5"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
              >
                <div>
                  <h1 className="text-xl text-red-600 font-sans">
                    Send us a Message
                  </h1>
                </div>
                <form onSubmit={handleSubmit} className="pt-5">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="name">Name:</label>
                      <input
                        className="border-2 p-1 rounded-lg"
                        type="text"
                        id="name"
                        name="name"
                        required={true}
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email">Email:</label>
                      <input
                        className="border-2 p-1 rounded-lg"
                        type="email"
                        id="email"
                        name="email"
                        required={true}
                        placeholder="Email@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="phone">Phone:</label>
                      <input
                        className="border-2 p-1 rounded-lg"
                        type="tel"
                        id="phone"
                        name="phone"
                        required={true}
                        placeholder="9966568965"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="companyName">Company Name:</label>
                      <input
                        className="border-2 p-1 rounded-lg"
                        type="text"
                        id="companyName"
                        name="companyName"
                        required={true}
                        placeholder="Your Company's Name"
                        value={formData.companyName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-wrap flex-col">
                      <label htmlFor="message">Message:</label>
                      <textarea
                        className="border-2 rounded-sm p-2"
                        id="message"
                        name="message"
                        required={true}
                        placeholder="Enter the Message "
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="pt-5">
                    <button type="submit" className="submitbutton bg-red-700">
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span>Submit</span>
                    </button>
                  </div>
                </form>
              </div>
              <div
                className="sm:w-100 w-full sm:h-[420px] bg-red-600 p-5"
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
              >
                <div>
                  <h1 className="text-xl text-white font-sans">
                    Contact Information
                  </h1>
                </div>
                <div>
                  <p className="text-sm pt-4 text-white font-sans">
                    Give us a call, shoot an email, or submit an enquiry through
                    our site - connecting with an ALUXE representative is as
                    easy as can be. Let us know how we can help configure your
                    dream railing system, optimize your office layout or
                    maximize unused space with our sliding partition collection.
                  </p>
                </div>
                <div className="px-2 pt-4">
                  <div className="flex gap-4 items-center">
                    <div>
                      <IoLocationOutline className="text-3xl text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white font-sans">
                        Head Office: 201 Aluminium Avenue Lucknow, UP, 152123
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center pt-6">
                    <div>
                      <IoIosMailOpen className="text-3xl text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white font-sans">
                        info@aluxe.com
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center pt-6">
                    <div>
                      <IoMdPhonePortrait className="text-3xl text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white font-sans">
                        1-800-555-6986
                      </p>
                      <p className=" text-xs text-white font-sans">
                        Our aluminium gurus are on standby Monday to Friday from
                        9AM - 5PM EST. Give us a ring whenever fits best!
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center gap-6 items-center pt-8">
                    <div>
                      <FaFacebook className="text-2xl text-white" />
                    </div>
                    <div>
                      <FaInstagram className="text-2xl text-white" />
                    </div>
                    <div>
                      <FaLinkedinIn className="text-2xl text-white" />
                    </div>
                    <div>
                      <FaTwitter className="text-2xl text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-2 bg-gray-300">
          {/* <div>
            <h1 className="text-center">
              The ALUXE advantage means defining possibilities then streamlining
              each step thereafter. Meet our squad of aluminium experts today.
            </h1>
          </div>
          <div>
            <h1 className="text-center">
              Submit a custom quote request through our online Enquiry Form
              detailing your product type(s), quantity, dimensions, preferred
              finish and any additional notes. We'll craft a personalized
              proposal outlining availability, pricing, delivery and more. We
              can't wait to team up on your next aluminium project! Let the
              games begin here at ALUXE - your one-stop aluminium shop.
            </h1>
          </div> */}
        </section>
      </main>
      <Whatsapp />
      <Footer />
    </>
  );
}
