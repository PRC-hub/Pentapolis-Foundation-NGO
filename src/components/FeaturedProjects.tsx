import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import "./FeatureProjects.css";

const FeaturedProjects = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
  {/* Background image */}
  <div className="background-project absolute inset-0 z-0" />

  {/* Title in the middle layer */}
  <h2 className="absolute inset-0 z-10 flex items-center justify-center text-[20vw] font-black text-yellow-100 md:text-[200px] text-center pointer-events-none">
    Featured Projects
  </h2>

  {/* Cards on top */}
  <div className="sticky top-0 z-20 flex h-screen items-center overflow-hidden">
    <motion.div style={{ x }} className="flex gap-4">
      {cards.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </motion.div>
  </div>
</section>

  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl  font-black uppercase text-white backdrop-blur-lg mt-4 transition-transform duration-300 group-hover:scale-110">
          {card.title}
        </p>
      </div>
    </div>
  );
};



type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: '/images/bg19.png',
    title: "Clean Water Initiative",
    id: 1,
  },
  {
    url: "/images/bg20.png",
    title: "Education for All",
    id: 2,
  },
  {
    url: "/images/bg21.png",
    title: "Healthcare Access",
    id: 3,
  },
  {
    url: "/images/bg22.png",
    title: "Agriculture",
    id: 4,
  },
  {
    url: "/images/bg24.png",
    title: "Women Empowerment",
    id: 5,
  },
  {
    url: "/images/bg23.png",
    title: "Global Outreach",
    id: 6,
  },
  {
    url: "/images/bg25.png",
    title: "Community Development",
    id: 7,
  },
];

export default FeaturedProjects;