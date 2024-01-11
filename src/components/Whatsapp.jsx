import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Whatsapp() {
  const handleClick = () => {
    window.open("https://wa.me/7827110079", "_blank");
  };

  return (
    <div>
      <div className="App">
        <Link className="whats-app" to="#" onClick={handleClick}>
          <FaWhatsapp className="icon animate-bounce my-float" />
        </Link>
      </div>
    </div>
  );
}
