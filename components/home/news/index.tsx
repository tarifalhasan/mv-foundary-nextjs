import Container from "@/components/common/Container";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <section
      id="news"
      className=" z-50 relative overflow-hidden sm:py-16 2xl:py-24"
    >
      <Container className="">
        <h2 className=" title">Our Latest News</h2>
        <div className="grid pt-6 pb-7 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </Container>
      <div className=" z-30 absolute   -bottom-[10%] -right-[15%] w-[588px] h-[588px] rounded-full bg-[#F7138F] opacity-20 blur-[245px]"></div>
      <div className=" z-30 absolute   -bottom-[30%] -left-[15%] w-[588px] h-[588px] rounded-full bg-[#6271FF] opacity-20 blur-[245px]"></div>
    </section>
  );
};

export default News;
