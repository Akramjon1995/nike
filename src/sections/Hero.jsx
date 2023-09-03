import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
    const [shoeImg, setShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="max-container w-full min-h-screen flex justify-center gap-10 flex-col xl:flex-row"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28 w-full">
        <p className="text-xl font-montserrat text-coral-red">
          Our summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="mt-3 text-coral-red inline-block">Nike</span> Shoes
        </h1>
        <p className="font-montserat text-slate-gray leading-8 text-lg mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for
          your life
        </p>
        <Button label="Shop now" iconURl={arrowRight} />
        <div className="flex flex-wrap justify-start items-start w-full gap-16 mt-20">
          {statistics.map((stat) => {
            return (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">
                  {stat.value}
                </p>
                <p className="lading-7 font-montserrat text-slate-gray">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* left side of hero section */}
      <div className="relative flex-1 flex justify-center items-center max-xl:py-40 bg-primary bg-center bg-hero xl:min-h-screen">
        <img
          src={shoeImg}
          alt="big-shoe"
          width={610}
          height={500}
          className="relative object-contain z-10"
        />
        <div className="flex absolute -bottom-[5%] sm:gap-6 gap-4 sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => {
            return (
              <ShoeCard imgURL={shoe} changeShoeImg={(imgUrl) => {setShoeImg(imgUrl)}} shoeImg={shoeImg} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
