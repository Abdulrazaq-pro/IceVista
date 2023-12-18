"use client";
import Image from "next/image";
import { useState } from "react";

const Content = () => {
  const Brand = () => {
    console.log("working");

    return (
      <div className=" justify-around px-6 py-4 space-y-2 bg-purple_1">
        <div className="text-center text-black font-semibold">
          Trusted by big companies like
        </div>
        <div className="flex justify-around items-center gap-8">
          <div>
            <img src="/images/trivago.png" alt="" />
          </div>
          <div>
            <img src="/images/headspace.png" alt="" />
          </div>
          <div>
            <img src="/images/bausch.png" alt="" />
          </div>
          <div>
            <img src="/images/mil.png" alt="" />
          </div>
          <div>
            <img src="/images/toyota.png" alt="" />
          </div>
        </div>
      </div>
    );
  };

  const Business = () => {
    const Cards = ({ header, text, link, img }) => {
      return (
        <div className="px-4 rounded-md overflow-hidden  border border-[#443674] space-y-1 pb-4  ">
          <br />
          <div>
            <img className="w-7" src={img} alt="" />
          </div>
          <p className="font-semibold max-md:text-sm">{header}</p>
          <p className=" max-w-[150px] text-xs md:text-sm max-md:leading-4 ">
            {text}
          </p>
          <a className="underline" href="/">
            Learn more
          </a>
        </div>
      );
    };
    return (
      <div className="py-10 px-5 bg-gradient-to-tr from-blue_3 to-blue_2 space-y-6">
        <div className="md:flex  justify-between items-center mb-20">
          <div className="max-md:text-center gap-3">
            <p className="text-2xl font-semibold ">
              <span className="text-purple_2 ">Boost </span>Your Business with
              IceVista
            </p>
            <div className="md:flex gap-2">
              <p className="text-[10px]">
                Are you ready to take your business to new heights? <br />
                IceVista is here to transform the way you operate
              </p>
              <button className="px-3 py-1 border border-blue_1 text-white rounded-full bg-blue_1 text-[10px] max-md:rounded-sm">
                Start Free Trial
              </button>
            </div>
          </div>
          <div className="text-xs max-w-[200px] max-md:m-auto max-md:flex max-md:justify-center">
            Say goodbye to complexities and hello to streamlined efficiency.
          </div>
        </div>
        <div className=" md:flex md:justify-center grid grid-cols-2 gap-5 ">
          <Cards
            img="/images/new.png"
            header="Increased Efficiency"
            text={`Seamlessly manage your tasks and projects, saving you valuable time.`}
          />
          <Cards
            img="/images/new.png"
            header="Increased Efficiency"
            text="Seamlessly manage your tasks and projects, saving you valuable time."
          />
          <Cards
            img="/images/new.png"
            header="Increased Efficiency"
            text="Seamlessly manage your tasks and projects, saving you valuable time."
          />
          <Cards
            img="/images/new.png"
            header="Increased Efficiency"
            text="Seamlessly manage your tasks and projects, saving you valuable time."
          />
        </div>
      </div>
    );
  };

  const Paparazi = () => {
    const Demo = ({ header, text, img, change }) => {
      return (
        <div
          className={`grid  grid-cols-2 md:gap-5 items-center bg-blue_3 p-8 gap-3 `}
        >
          <div
            className={`space-y-1 ${
              change && "order-2"
            } max-md:text-xs md:space-y-4`}
          >
            <p className="font-semibold">{header}</p>
            <p className=" max-sm:leading-3 max-sm:text-[9px]">{text}</p>
            <button className="px-4 py-2 rounded-full border border-white mt-2 bg-blue_1 ">
              Get Started
            </button>
          </div>
          <div className="">
            <img className="md:scale-75" src={img} alt="" />
          </div>
        </div>
      );
    };
    return (
      <div className="space-y-1 my-3">
        <Demo
          text="IceVista Project Management offers a seamless experience for planning, organizing, and collaborating on projects. From task management to progress tracking, it ensures your projects stay on schedule and within budget."
          header="Project Management Software:"
          img="/images/png1.png"
        />
        <Demo
          text="IceVista Project Management offers a seamless experience for planning, organizing, and collaborating on projects. From task management to progress tracking, it ensures your projects stay on schedule and within budget."
          header="Project Management Software:"
          change="true"
          img="/images/cct2.png"
        />
        <Demo
          text="IceVista Project Management offers a seamless experience for planning, organizing, and collaborating on projects. From task management to progress tracking, it ensures your projects stay on schedule and within budget."
          header="Project Management Software:"
          img="/images/CCT Card.png"
        />
      </div>
    );
  };

  const Pricing = () => {
    const [switcher, setSwitcher] = useState(false);
    const PricingCard = ({
      packag,
      price,
      text1,
      text2,
      text3,
      text4,
      text5,
      lasttext,
      button,
      opp,
      checkimg,
    }) => {
      return (
        <div
          className={`text-center px-3 py-4 space-y-2 rounded-2xl bg-white shadow-[#3a2447] shadow-lg  text-black ${
            opp && "changer"
          }`}
        >
          <p className="text-lg">{packag}</p>
          <p className="text-xl">
            ${price}
            <span className="text-sm">/month</span>
          </p>
          <div className="px-3 md:text-sm flex justify-center ">
            <div className="text-left space-y-1">
              <div className="">
                <img
                  className="w-[15px] inline  mr-2"
                  src={`${
                    opp ? "/images/icons/check2.svg" : "/images/icons/check.png"
                  }`}
                  alt="plus"
                />
                <span className="inline">{text1}</span>
              </div>
              <div className="">
                <img
                  className="w-[15px] inline  mr-2"
                  src={`${
                    opp ? "/images/icons/check2.svg" : "/images/icons/check.png"
                  }`}
                  alt=""
                />
                <span className="inline">{text2}</span>
              </div>
              <div className="plus">
                <img
                  className="w-[15px] inline  mr-2"
                  src={`${
                    opp ? "/images/icons/check2.svg" : "/images/icons/check.png"
                  }`}
                  alt="plus"
                />
                <span className="inline">{text3}</span>
              </div>
              <div className="flex items-center">
                <img
                  className="w-[15px] inline  mr-2"
                  src={`${
                    opp ? "/images/icons/check2.svg" : "/images/icons/check.png"
                  }`}
                  alt="plus"
                />
                <span className="inline">{text4}</span>
              </div>
              <div className="">
                <img
                  className="w-[15px] inline mr-2"
                  src={`${
                    opp ? "/images/icons/check2.svg" : "/images/icons/check.png"
                  }`}
                  alt="plus"
                />
                <span className="inline">{text5}</span>
              </div>
            </div>
          </div>
          <p>{lasttext}</p>
          <button
            className={`px-6 py-2 cursor-pointer bg-blue_1 text-white rounded-full ${
              opp && "opp_button"
            }`}
          >
            {button}
          </button>
        </div>
      );
    };
    return (
      <div className="px-5 py-12 bg-blue_2 text-black ">
        <div className="text-center text-white">
          <p className="text-2xl">Our pricing</p>
          <p>
            We offer annual subscription discounts and special promotions for
            new customers
          </p>
          <div className="flex gap-3 justify-center items-center">
            <p>Monthly</p>
            <div className="relative scale-75 cursor-pointer">
              <img src="/images/Frame 75.png" alt="" />
              <div
                className={` ${
                  switcher && "switcher"
                } absolute inset-0 flex items-center float-right  mx-2 transition ease-in-out`}
                onClick={() => {
                  setSwitcher(!switcher);
                }}
              >
                <img src="/images/ellipse.png" alt="" />
              </div>
            </div>
            <p>Anually</p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 md:justify-around  gap-6 max-md:space-y-3 mt-3">
          <PricingCard
            packag="Free"
            price="0.99"
            text1="Project management for Small teams"
            text2="Task lists and collaboration tools"
            text3="Basic reporting and progress tracking"
            text4="Limited Customer Support"
            text5="Task management"
            text="This plan is ideal for startups and small businesses."
            button="Start Free Trial"
          />
          <PricingCard
            packag="Pro"
            price="19.99"
            text1="Full-Featured Project Managaement Suite"
            text2="Advanced Task Management and Priority Settings"
            text3="Comprehensive Reporting and Analytics"
            text4="Enhanced Collaboration Tools,Including File Versioning"
            text5="Task management"
            text="The Pro Plan is tailored for growing businesses and teams."
            button="Choose Plan"
            opp="true"
          />
          <PricingCard
            packag="Enterprise"
            price="39.99"
            text1="Unlimited Projects and Users"
            text2="Dedicated Account Manager"
            text3="Customizable Workflows and Templates"
            text4="API Access for integration with Third-Party Apps"
            text5="24/7 Priority Support"
            text="This plan is ideal for Large enterprises and business and business with specific needs."
            button="Go For It"
          />
        </div>
      </div>
    );
  };

  const Offer = () => {
    return (
      <div className="bg-purple_1 text-black px-14 py-14 text-center ">
        <div className=" md:w-[70%] w-[95%] m-auto space-y-5 ">
          <div className="font-semibold text-center"> What we Offer:</div>
          <div className=" grid grid-cols-3  border-solid border-b-[1px] border-b-blue_1">
            <div className="p-2  py-6 border-solid border-r-[1px] border-r-blue_1   space-y-4">
              <p className="font-semibold">Easy-to-Use Interface</p>
              <p className="text-xs">
                Intuitive design that makes navigation a breeze.
              </p>
            </div>
            <div className="p-2 border-solid border-r-[1px] border-r-blue_1 space-y-4 py-6">
              <p className="font-semibold">Robust Features</p>
              <p className="text-xs">
                From task management to detailed analytics, weve got you
                covered.
              </p>
            </div>
            <div className="p-2 space-y-4  py-6">
              <p className="font-semibold">Flexible Pricing</p>
              <p className="text-xs">
                Choose a plan that suits your business needs and budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Client_Section = () => {
    const Client_Card = ({ name, handle, text, img }) => {
      return (
        <div className="py-3 px-2 space-x-3 border border-zinc-700 rounded-lg bg-blue_2">
          <div className="flex gap-2">
            <div>
              <img src={img} alt="" />
            </div>
            <div className="space-y-1">
              <p className="font-semibold">{name}</p>
              <p className="text-xs">{handle}</p>
            </div>
          </div>
          <div>
            <p>{text}</p>
          </div>
        </div>
      );
    };
    return (
      <div className="px-12 py-6 bg-gradient-to-br from-[#110b2c] via-blue_3 to-[#150d2e] ">
        <p className="text-center my-3 font-semibold mb-14">
          Hear It From Our Clients
        </p>
        <div className="md:flex md:gap-5 max-md:space-y-2">
          <Client_Card
            name="Sarah Thompson"
            handle="@sarahthompsy3"
            text="IceVista has been a game-changer for our marketing team. The Pro plan offers everything we need, and the reporting features are outstanding. Highly recommended!"
          />
          <Client_Card
            name="Sarah Thompson"
            handle="@sarahthompsy3"
            text="IceVista has been a game-changer for our marketing team. The Pro plan offers everything we need, and the reporting features are outstanding. Highly recommended!"
          />
          <Client_Card
            name="Sarah Thompson"
            handle="@sarahthompsy3"
            text="IceVista has been a game-changer for our marketing team. The Pro plan offers everything we need, and the reporting features are outstanding. Highly recommended!"
          />
        </div>
      </div>
    );
  };

  const FAQs = () => {
    const items = [
      {
        header: "What is IceVista and what does it offer?",
        content:
          "IceVista is a powerful Software-as-a-Service (SaaS) solution designed to enhance business efficiency and productivity. It offers a comprehensive suite of project management tools, including task management, collaboration features, advanced reporting, and more.",
          id:1,
      },
      {
        header: "How does the free trial work, and what features are included?",
        content:
          "IceVista is a powerful Software-as-a-Service (SaaS) solution designed to enhance business efficiency and productivity. It offers a comprehensive suite of project management tools, including task management, collaboration features, advanced reporting, and more.",
          id:2,
      },
      {
        header: "Is my data secure with IceVista?",
        content:
          "IceVista is a powerful Software-as-a-Service (SaaS) solution designed to enhance business efficiency and productivity. It offers a comprehensive suite of project management tools, including task management, collaboration features, advanced reporting, and more.",
          id:3,
      },
      {
        header: "Can IceVista be integrated with other tools and software?",
        content:
          "IceVista is a powerful Software-as-a-Service (SaaS) solution designed to enhance business efficiency and productivity. It offers a comprehensive suite of project management tools, including task management, collaboration features, advanced reporting, and more.",
          id:4,
      },
      {
        header: "How does billing work, and what payment methods are accepted?",
        content:
          "IceVista is a powerful Software-as-a-Service (SaaS) solution designed to enhance business efficiency and productivity. It offers a comprehensive suite of project management tools, including task management, collaboration features, advanced reporting, and more.",
          id:5,
      },
    ];
    const Accordion = ({ header, content }) => {
      const [open, setOpen] = useState(false);

      return (
        <div className=" overflow-hidden bg-white rounded-md">
          <div
            className=" z-20 px-4 py-3 flex justify-between"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <h1 className="cursor-pointer">{header}</h1>
            {open ? (
              <div>
                <img className="w-4" src="/images/icons/remove.png" alt=""/>
              </div>
            ) : (
              <div>
                <img className="w-4" src="/images/icons/plus.png" alt="" />
              </div>
            )}
          </div>
          <div className={` ${open && "opener"} con  `}>
            <p className="px-5 text-zinc-700">{content}</p>
          </div>
        </div>
      );
    };
    return (
      <div className="bg-purple_1 text-black px-12 py-6">
        <div className="md:w-[80%] mx-auto">
          <h1 className="text-2xl text-center font-semibold">
            Frequently Asked Questions
          </h1>
          <p className="text-center">
            We offer annual subscription discounts and special promotions for
            new customers
          </p>
          <div className=" space-y-3">
            {items.map((item) => (
              <div key={item.id}>
                <Accordion header={item.header} content={item.content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Brand />
      <Business />
      <Paparazi />
      <Pricing />
      <Offer />
      <Client_Section />
      <FAQs />
    </div>
  );
};

export default Content;
