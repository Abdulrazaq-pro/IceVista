const Hero = () => {
  
  return (
    <div className="px-4">
      <div className="text-center  space-y-4 max-md:space-y-8">
        <p className="text-5xl max-md:text-4xl max-md:-translate-y-9">
          Empowering your business <br /> <span className="text-purple_2">simplifying</span> your success.
        </p>
        <p className="text-sm md:text-base">
          Revolutionize the way you work with our cutting-edge <br />
          Software-as-a-Service (SaaS) solution.
        </p>
        <div className="flex justify-center items-center flex-col md:flex-row max-md:space-y-2 md:gap-3 group overflow-hidden">
          <button className="cursor-pointer">Start Free Trial</button>
          <button className="flex items-center gap-2 px-4 p-2 rounded-full border border-purple_2 cursor-pointer">
            <div>
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.472 6.31087L5.09038 1.38825C4.74233 1.15603 4.33772 1.02276 3.9198 1.00266C3.50187 0.982573 3.08634 1.07642 2.71762 1.27418C2.3489 1.47194 2.04084 1.76617 1.82638 2.12544C1.61192 2.4847 1.49911 2.89548 1.50001 3.31389V13.1568C1.49994 13.5748 1.61336 13.985 1.82816 14.3436C2.04296 14.7022 2.35109 14.9958 2.71966 15.193C3.08823 15.3902 3.50343 15.4837 3.92095 15.4634C4.33847 15.4431 4.74266 15.3099 5.09038 15.0779L12.472 10.1552C12.7882 9.94437 13.0475 9.65871 13.2268 9.3236C13.4062 8.98849 13.5 8.61429 13.5 8.23421C13.5 7.85413 13.4062 7.47993 13.2268 7.14482C13.0475 6.8097 12.7882 6.52173 12.472 6.31087Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <button className="peer hover:hidden">Watch Demo</button>
          </button>
        </div>
      </div>

      <div className=" flex justify-between w-[80%] m-auto mt-14">
        <div>
          <img className="w-[75%] translate-y-6" src="/images\hero1.png" alt="" />
        </div>
        <div>
          <img className="w-[75%] translate-y-4" src="/images\hero2.png" alt="" />
        </div>
        <div>
          <img className="w-[75%]" src="/images\hero3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
