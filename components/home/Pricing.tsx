import Container from "../common/Container";
import { PrimaryPricingCard } from "./PricingCard";

const Pricing = () => {
  return (
    <section id="pricing" className="relative overflow-hidden py-16 lg:py-24">
      <Container className=" relative overflow-hidden z-40">
        <div>
          <h2 className="title">Pricing</h2>
          <p className="sub-title">How much does the whole thing cost?</p>
        </div>
        <div className=" grid pt-8 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PrimaryPricingCard
            title="Validate"
            variant={"secondary"}
            list={[
              "One Trading Account",
              "  Transferrable License",
              "MT4 or MT5",
              "All EA Features",
              "Unlimited Symbols",
              "Unlimited Trades",
              "Chat Support",
              "Access to new EAs",
              "Cancel Anytime ",
            ]}
            subTitle="Get your first 10 customers to validate your idea"
            price="19.99"
          />

          <PrimaryPricingCard
            list={[
              "One Trading Account",
              "Transferrable License",
              "MT4 or MT5",
              "All EA Features",
              "Unlimited Symbols",
              "Unlimited Trades",
              "Chat Support",
              "Access to new EAs",
              "Cancel Anytime ",
            ]}
            title="Launch"
            variant={"primary"}
            subTitle="Get your first 10 customers to validate your idea"
            price="24.99"
          />

          <PrimaryPricingCard
            list={[
              "One Trading Account",
              "Transferrable License",
              "MT4 or MT5",
              "All EA Features",
              "Unlimited Symbols",
              "Unlimited Trades",
              "Chat Support",
              "Access to new EAs",
              "Cancel Anytime ",
            ]}
            title="Grow"
            variant={"primary"}
            subTitle="Get your first 10 customers to validate your idea"
            price="34.99"
          />
        </div>
      </Container>
      <div className=" z-30 absolute top-[35%] -left-[15%] w-[588px] h-[588px] rounded-full bg-skin-royal-blue opacity-20 blur-[245px]"></div>
      <div className=" z-30 absolute top-[35%] -right-[15%] w-[588px] h-[588px] rounded-full bg-skin-tangerine-orange opacity-20 blur-[245px]"></div>
    </section>
  );
};

export default Pricing;
