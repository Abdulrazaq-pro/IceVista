const Footer = () => {
    return (
      <div id="footer" className=" grid grid-cols-2 md:grid-cols-5 md:px-8 px-4 py-5 gap-4 text-[hsl(254,15%,34%)]  text-xs">
        <div className="space-y-2">
          <p className="text-white font-semibold">COMPANY</p>
          <p>About</p>
          <p>Security</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Service Status</p>
          <p>Partnerships</p>
          <p>Mission roadmap</p>
          <p>Community</p>
        </div>
        <div className="space-y-2">
          <p className="text-white font-semibold">PRODUCTS</p>
          <p>Mass Payments</p>
          <p>Debit Card</p>
          <p>IceVista for Startups</p>
          <p>IceVista for Developers</p>
          <p>IceVista for No-code</p>
          <p>Assets</p>
        </div>
        <div className="space-y-2">
          <p className="text-white font-semibold">SOLUTIONS</p>
          <p>Mass Payments</p>
          <p>Debit Card</p>
          <p>IceVista for Startups</p>
          <p>IceVista for Developers</p>
          <p>IceVista for No-code</p>
          <p>Assets</p>
          <p></p>
        </div>
        <div className=" space-y-2">
          <p className="text-white font-semibold">TOOLS</p>
          <p>Financial Services</p>
          <p>Fashion & Beauty</p>
          <p>Agriculture</p>
          <p>Manufacturing</p>
          <p>Education</p>
          <p>Energy & Environment</p>
        </div>

        <div className=" space-y-2 md:text-right">
          <div className="flex md:justify-end items-center gap-2">
            <div>
              <img className="w-[15px]" src="/images/icons/twitter.svg" alt="" />
            </div>
            <div>
              <img className="w-[15px]" src="/images/icons/instagram.svg" alt="" />
            </div>
            <div>
              <img className="w-[15px]" src="/images/icons/linkedin.svg" alt="" />
            </div>
          </div>
          <p className="">Privacy Policy</p>
          <p>Cookie Policy</p>
          <p>Security</p>
          <p>Terms of Service</p>
          <p>Referral Program</p>
          <p>Sitemap</p>
        </div>
      </div>
    );
  };

  export default Footer