import Container from "@/components/common/Container";
import Form from "./Form";
import Location from "./Location";

const Contact = () => {
  return (
    <section className=" pb-14 ">
      <Container className="bg-skin-secondary lg:grid-cols-2 gap-4 grid">
        <Location />
        <Form />
      </Container>
    </section>
  );
};

export default Contact;
