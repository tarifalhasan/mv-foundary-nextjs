const Newslatter = () => {
  return (
    <div
      data-aos="zoom-out-left"
      className="overflow-hidden w-full px-3 max-w-full sm:max-w-[45%]  lg:max-w-[570px] rounded-lg bg-white flex items-center justify-between  py-2"
    >
      <div className=" basis-[70%]">
        <input
          type="text"
          className=" w-full  text-t-18 text-skin-gray-500 focus:outline-none border-none"
          placeholder="enter your email"
        />
      </div>
      <div className=" flex justify-end basis-[30%]">
        <button className="btn shadow-none block secondary-btn">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newslatter;
