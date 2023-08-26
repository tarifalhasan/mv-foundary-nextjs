"use client";
import { team_member1, team_member2, team_member3 } from "@/assets/images";
import Container from "@/components/common/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Team = () => {
  const router = useRouter();
  return (
    <section className="  bg-skin-secondary py-16 lg:py-24">
      <Container>
        <div className="relative z-50 space-y-6 lg:space-y-12">
          <div className="space-y-1">
            <h2 className="title">Our Team Members</h2>
            <p className="sub-title">
              We feel the charm of existence in this spot, which was created for
              the bliss of souls like mine.
            </p>
          </div>
          <div className=" flex items-center justify-center gap-5 flex-wrap">
            <div className="w-[145px] h-[145px] rounded-full bg-white  overflow-hidden">
              <Image
                className="  w-full h-full object-cover"
                src={team_member1}
                alt="tarif"
              />
            </div>
            <div className="w-[145px] h-[145px] rounded-full bg-white  overflow-hidden">
              <Image
                className="  w-full h-full object-cover"
                src={team_member2}
                alt="tarif"
              />
            </div>
            <div className="w-[145px] h-[145px] rounded-full bg-white  overflow-hidden">
              <Image
                className="  w-full h-full object-cover"
                src={team_member3}
                alt="tarif"
              />
            </div>
          </div>
          <div className=" flex justify-center">
            <button
              onClick={() => router.push("#contact")}
              className="btn secondary-btn"
            >
              Let’s chat with us
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Team;
