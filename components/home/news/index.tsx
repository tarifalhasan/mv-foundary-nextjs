import Container from "@/components/common/Container";
import { AnimationContainer } from "@/utils/animation";
import { motion as m } from "framer-motion";
import NewsCard from "./NewsCard";
const News = () => {
  return (
    <m.section
      id="news"
      className=" relative overflow-hidden sm:py-16 2xl:py-24"
    >
      <Container className=" relative z-40">
        <h2 className=" title">Our Latest News</h2>
        <m.div
          variants={AnimationContainer}
          initial="hidden"
          exit="exit"
          whileInView="show"
          viewport={{ once: true }}
          className="grid pt-6 pb-7 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </m.div>
        <div className=" pt-7 pb-9 flex justify-center">
          <button className="btn secondary-btn">Read More</button>
        </div>
      </Container>
      <div className=" z-30 absolute   -bottom-[10%] -right-[15%] w-[34%] h-[34%]  rounded-full bg-[#F7138F] opacity-20 blur-[245px]"></div>
      <div className=" z-30 absolute   -bottom-[30%] -left-[15%] w-[34%] h-[34%] rounded-full bg-[#6271FF] opacity-20 blur-[245px]"></div>
    </m.section>
  );
};

export default News;
