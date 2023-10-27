import { useState } from "react";

// local imports
import heroImage from "../assets/hero-image.svg";
import logo from "../assets/logo.svg";
import cartIcon from "../assets/cart-icon.svg";
import searchIcon from "../assets/search-icon.svg";

import { heroTitle, heroSubtitle } from "../data";

import FadeIn from "../components/FadeIn";

// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Hero = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div
      className="h-screen relative flex flex-col items-center"
      style={{
        background: `url(${heroImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
    <div className="relative w-full max-w-[1490px] flex   items-center justify-between pt-10 mx-auto px-10" >

        <img src={logo} alt="logo" />
        <ul className="hidden md:flex items-center gap-10 lg:gap-[68px]">

            <Link 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={1000} 
            className="text-lg lg:text-xl text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent" 
            to="services"> Services</Link>

            <Link 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={1000} 
            className="text-lg lg:text-xl text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent" 
            to="products"> Shop</Link>

            <Link 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={1000} 
            className="text-lg lg:text-xl text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent" 
            to="reference"> Reference</Link>

            <Link 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={1000} 
            className="text-lg lg:text-xl text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] hover:bg-clip-text hover:text-transparent" 
            to="care"> Care</Link>
        </ul>

        <img src={cartIcon} className="hidden md:block cursor-pointer" alt="cartIcon" />
        <HiMenuAlt3 size={30} className="block md:hidden cursor-pointer text-white" onClick={() => setShowMobileMenu((prev) => !prev)} />


        <div className={`block md:hidden w-full fixed ${ !showMobileMenu ? "-top-[410px]" : "top-0"} left-0 bg-[#dde0e5] h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`} >
              <AiOutlineClose  size={25} className="absolute top-5 right-5 cursor-pointer"  onClick={() => setShowMobileMenu(false)} />

              <ul className="pt-[60px] items-center flex flex-col gap-8">
              <Link 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={1000} 
            className="text-lg text-black hover:text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] w-full text-center" 
            to="services"> Services</Link>

            <Link 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={1000} 
            className="text-lg text-black hover:text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] w-full text-center" 
            to="products"> Shop</Link>

            <Link 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={1000} 
            className="text-lg text-black hover:text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] w-full text-center" 
            to="reference"> Reference</Link>

            <Link 
            spy={true} 
            smooth={true} 
            offset={-50} 
            duration={1000} 
            className="text-lg text-black hover:text-white cursor-pointer hover:bg-[linear-gradient(90deg,_#2AF598_0%,_#009EFD_100%)] w-full text-center" 
            to="care"> Care</Link>
              </ul>
              <img src={cartIcon} className="mt-8 mx-auto cursor-pointer" alt="cartIcon" />

        </div>
    </div>

      <FadeIn delay={0.2} direction="down" padding fullWidth>
        <h1 className="mt-[90px] text-center text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px]">
          {heroTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down" padding fullWidth>
        <h5 className="mt-6 text-center text-lg xs:text-xl text-white max-w-[500px]">
          {heroSubtitle}
        </h5>
      </FadeIn>
      <FadeIn delay={0.2} direction="up" padding fullWidth>
        <div className="relative w-full xs:w-[460px] mt-11">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full w-full pl-6 pr-[68px] py-4 bg-primary outline-none text-white
              text-base xs:text-lg placeholder-white"
          />
          <img
            src={searchIcon}
            alt=""
            className="absolute top-2/4 -translate-y-2/4 right-3 h-11 w-11 cursor-pointer"
          />
        </div>
      </FadeIn>

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
    </div>
  );
};

export default Hero;
