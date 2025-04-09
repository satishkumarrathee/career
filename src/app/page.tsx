'use client'
import TopCarousel from "@/app/components/TopCarousel";
import Menu from "@/app/components/Menu";
import Cources from "@/app/components/Cources";
import Choose from "@/app/components/Choose";
import Start from "@/app/components/Start";
import Popup from "@/app/components/Popup";
import { useEffect, useState } from "react";
import Consuntant from "@/app/components/Consultant";
import Search from "./components/Search";
import News from "./components/News";
import MultiItemCarousel from "./components/OwlCarousel";
import NotificationComponent from "./components/Notification";
import Chatbot from "./components/Chatbot";

const Home = () => {
  const [modalShow, setModalShow] = useState(false);
  const PopUp = () => {
    setModalShow(true);
  };
  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(PopUp, 20000);
    // return () => clearTimeout(timer,25000);
  }, []);
  return (
    <div>
      <TopCarousel />
      <News/>
      <Search />
      <Popup show={modalShow} onHide={() => setModalShow(false)} />
      <Start />
      <Cources />
      <MultiItemCarousel />
      <Menu />
      <Consuntant items={[]} />
      <Choose />
    </div>
  );
};

export default Home;
