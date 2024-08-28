import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CustomNavbar from "./components/Navbar";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import Coffee from "./assets/mm.jpg";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import FAQSection from "./components/QnA";
import CustomFooter from "./components/Footer";
import { Button, Modal } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import Chatbot from "./components/Chatbot"; // Ensure you have this component

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-[#F8F7F2] min-h-screen">
        <CustomNavbar />
        <div className="flex flex-col lg:flex-row items-center gap-10 justify-center mt-20 px-4 lg:px-16 mb-5">
          <div
            className="flex flex-col items-center text-center w-full md:w-1/2 gap-5"
            data-aos="fade-up"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Start Your <span className="font-extrabold">Journey Today</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Turn your passion and knowledge into a thriving business. Help
              your audience get ahead in life.
            </p>
            <div className="flex gap-3">
              <button
                className="bg-black text-white py-3 px-10 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition"
                data-aos="fade-right"
              >
                <FaArrowRight color="white" /> Start My Page
              </button>
              <button
                className="bg-white text-black py-3 px-10 rounded-lg border border-black flex items-center gap-2 hover:bg-gray-200 transition"
                data-aos="fade-left"
              >
                <FaPlay color="black" /> Watch the Film
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              className="rounded-lg"
            >
              <SwiperSlide>
                <img
                  src={Coffee}
                  alt="Background Image"
                  className="w-full h-auto rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-landing-hero-2.1d4f0b54.webp&w=1080&q=75"
                  alt="Foreground Image"
                  className="w-full h-auto rounded-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div
          className="w-full bg-[#ECCC7B] flex flex-col items-center py-16 h-1/2"
          data-aos="fade-up"
        >
          <h2 className="text-4xl lg:text-6xl mb-8 text-center">
            For people <span className="font-bold">making Impact</span>
          </h2>
          <Tabs aria-label="Options">
            <Tab key="photos" title="Photos">
              <Card className="bg-white shadow-lg rounded-lg max-w-md mx-auto my-4">
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="music" title="Music">
              <Card className="bg-white shadow-lg rounded-lg max-w-md mx-auto my-4">
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="videos" title="Videos">
              <Card className="bg-white shadow-lg rounded-lg max-w-md mx-auto my-4">
                <CardBody>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>

        <div className="bg-[#ECEBE3] flex flex-col items-center py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl mb-4">
              <span className="font-bold">Get Discovered</span> on
            </h1>
            <p className="text-lg mb-8">
              We created hito to help you get discovered by millions of people
              globally
            </p>
            <div className="flex gap-4 justify-center items-center">
              <button className="bg-black text-white font-bold py-3 px-6 rounded-lg">
                Get Listed
              </button>
              <button className="bg-transparent border border-black text-black font-bold py-3 px-6 rounded-lg">
                Find People
              </button>
            </div>
          </div>
          <div className="mt-8 w-3/6 flex items-center justify-center">
            <img
              src={Coffee}
              alt="Coffee"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <FAQSection />
        <CustomFooter />

        {/* Chatbot Integration */}
        <Button
          type="primary"
          shape="circle"
          icon={<MessageOutlined />}
          size="large"
          style={{
            position: "fixed",
            bottom: 30,
            right: 30,
            zIndex: 1000,
          }}
          onClick={showModal}
        />
        <Modal
          title="Chat with Us"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          width={400}
          bodyStyle={{ padding: 0 }}
        >
          <Chatbot />
        </Modal>
      </div>
    </>
  );
}

export default App;
