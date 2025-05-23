import { useState } from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CardList from "./Components/Card";
import VideoPlayer from "./Components/VideoPlayer";
import GetInTouch from "./Components/GetInTouch";

const App = () => {
  const [isPaid, seIisPaid] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white text-center p-4">
      {isPaid ? (
        <main className="w-full shadow-xl rounded-xl">
          {/* Hero Section */}
          <section className="relative rounded-lg overflow-hidden mb-8">
            <div className="relative w-full aspect-w-16 aspect-h-9 md:aspect-w-16 md:aspect-h-9">
              <VideoPlayer />

              {/* Social Media Icons */}
              <div className="absolute top-4 left-4 flex space-x-4 text-white z-10">
                <a
                  href="https://www.instagram.com/propertywallah_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/propertywallah_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition duration-300"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://wa.me/917770017997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition duration-300"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.youtube.com/c/propertywallah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500 transition duration-300"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://twitter.com/propertywallah_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition duration-300"
                >
                  <FaXTwitter />
                </a>
              </div>
            </div>

            {/* Founder Section */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h1 className="text-3xl md:text-6xl font-bold uppercase">
                Vivek Patel
              </h1>
              <p className="text-base md:text-lg mt-2">
                Founder of Propertywallah Realty
              </p>
              <p className="text-sm">Maharera no- A99000024245</p>
            </div>
          </section>

          {/* About Section */}
          <section className="bg-gray-800 p-6 rounded-lg flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="text-center">
              <img
                src="/image.png"
                alt="Vivek Patel"
                className="rounded-full shadow-lg w-48 h-48 object-cover mx-auto border-4 border-purple-500"
              />
            </div>
            <div className="text-white text-center md:text-left">
              <div className="flex items-end gap-3">
                <span className="text-green-500 flex items-center space-x-2">
                  <span className="text-[60px] font-bold leading-none">
                    0<span className="text-lg font-bold">%</span>
                  </span>
                </span>
                <p className="text-white text-sm sm:text-base font-medium">
                  Brokerage on Builder Properties
                </p>
              </div>
              <div className="flex flex-col items-start ">
                <p>✅️ Buy | Sell | Invest in Mumbai Real Estate </p>
                <p>✅️ Sole Selling Property Management</p>
                <p>✅️ Residential & Commercial Real Estate</p>
                <p>✅️ Channel Partner with Lead Developers</p>
                <p>✅️ Digital Real Estate Content Creator</p>
                <p>✅️ Financial Consultant & Loan Expert</p>
              </div>
              <GetInTouch />
            </div>
          </section>

          {/* Cards Section */}
          <CardList />
        </main>
      ) : (
        <h2 className="text-2xl font-semibold">
          Website dekhne ke liye pura payment karo 💳 <br /> Thank you! 😊
        </h2>
      )}
    </div>
  );
};

export default App;
