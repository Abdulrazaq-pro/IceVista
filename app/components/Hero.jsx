const Hero = () => {
  return (
    <div className="px-4">
      <div className="text-center  space-y-4 max-md:space-y-8">
        <p className="text-5xl max-md:text-4xl max-md:-translate-y-9">
          Empowering your business <br />
          <span className="text-purple_2">simplifying</span> your success.
        </p>
        <p className="text-sm md:text-base">
          Revolutionize the way you work with our cutting-edge <br />
          Software-as-a-Service (SaaS) solution.
        </p>
        <div className="flex justify-center items-center flex-col md:flex-row max-md:space-y-2 md:gap-3  overflow-hidden">
          <button className="cursor-pointer">Start Free Trial</button>
          <div className="flex items-center gap-2 px-4 p-2 rounded-full border border-purple_2 cursor-pointer group hover:w-20 hover:justify-center transition ">
            <div className="">
              <img className="" src="/images/icons/play.svg" alt="" />
              {/* <button>play</button> */}
            </div>
            <div className=" group-hover:hidden ">Watch Demo</div>
          </div>
        </div>
      </div>

      <div className=" flex justify-between w-[80%] m-auto mt-14">
        <div>
          <img
            className="w-[75%] translate-y-6"
            src="/images\hero1.png"
            alt="hero"
          />
        </div>
        <div>
          <img
            className="w-[75%] translate-y-4"
            src="/images\hero2.png"
            alt="hero"
          />
        </div>
        <div>
          <img className="w-[75%]" src="/images\hero3.png" alt="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
