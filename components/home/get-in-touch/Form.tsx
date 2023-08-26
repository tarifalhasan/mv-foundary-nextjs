import dynamic from "next/dynamic";

const Form = () => {
  return (
    <div data-aos="fade-left" className=" px-5 py-6 grid place-items-center">
      <form className="   w-full lg:w-[490px] space-y-5">
        <div>
          <h2 className=" text-left title">Get in touch</h2>
        </div>
        <input
          className=" w-full border border-[#D2D2D261] outline-none focus:outline-none inline-flex  items-center text-[#FAFAFA] border-opacity-[53] h-[60px] text-t-18 font-poppins   rounded-[5px] px-5 bg-[#33324787] bg-opacity-50"
          placeholder="Your full name"
        />
        <input
          className=" w-full border border-[#D2D2D261] outline-none focus:outline-none inline-flex  items-center text-[#FAFAFA] border-opacity-[53] h-[60px] text-t-18 font-poppins   rounded-[5px] px-5 bg-[#33324787] bg-opacity-50"
          placeholder="Email address"
        />
        <input
          className=" w-full border border-[#D2D2D261] outline-none focus:outline-none inline-flex  items-center text-[#FAFAFA] border-opacity-[53] h-[60px] text-t-18 font-poppins   rounded-[5px] px-5 bg-[#33324787] bg-opacity-50"
          placeholder="Phone number"
        />
        <textarea
          className="  pt-2 w-full border border-[#D2D2D261] outline-none focus:outline-none inline-flex  items-center text-[#FAFAFA] border-opacity-[53] h-[123px] text-t-18 font-poppins   rounded-[5px] px-5 bg-[#33324787] bg-opacity-50"
          placeholder="Phone number"
        />
        <div>
          <button className="btn secondary-btn">Contact Us</button>
        </div>
      </form>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Form), {
  ssr: false,
});
