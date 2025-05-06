import React, { MutableRefObject, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const DragCards = () => {
return (
<section className="relative grid min-h-screen w-full place-content-left overflow-hidden bg-neutral-950 bg-[url('/images/bg1.png')] bg-cover bg-center bg-no-repeat">
  <div className="absolute inset-0 bg-black opacity-60 z-0" />
  <h2 className="relative z-10 text-[15vw] font-black text-yellow-100 md:text-[90px] pl-5">
    Be the reason<br/>behind<br/>someone's smile
  </h2>
  <Cards />
</section>

);
};

const Cards = () => {
const containerRef = useRef<HTMLDivElement | null>(null);

return (
<div className="absolute inset-0 z-10" ref={containerRef}>
<Card
    containerRef={containerRef}
    src="/images/bg3.png"
    alt="Example image"
    rotate="0deg"
    top="70%"
    left="1%"
    className="w-52 md:w-80"
    />
    <Card
    containerRef={containerRef}
    src="/images/bg4.png"
    alt="Example image"
    rotate="0deg"
    top="71%"
    left="23%"
    className="w-48 md:w-72"
    />
    <Card
    containerRef={containerRef}
    src="/images/bg10.png"
    alt="Example image"
    rotate="0deg"
    top="70%"
    left="43%"
    className="w-44 md:w-64"
    />
    <Card
    containerRef={containerRef}
    src="/images/bg7.png"
    alt="Example image"
    rotate="0deg"
    top="70%"
    left="60.75%"
    className="w-48 md:w-72"
    />
    <Card
    containerRef={containerRef}
    src="/images/bg9.png"
    alt="Example image"
    rotate="0deg"
    top="70%"
    left="80.5%"
    className="w-48 md:w-72"
    />
</div>
);
};

interface Props {
containerRef: MutableRefObject<HTMLDivElement | null>;
src: string;
alt: string;
top: string;
left: string;
rotate: string;
className?: string;
}

const Card = ({
containerRef,
src,
alt,
top,
left,
rotate,
className,
}: Props) => {
const [zIndex, setZIndex] = useState(0);

const updateZIndex = () => {
const els = document.querySelectorAll(".drag-elements");

let maxZIndex = -Infinity;

els.forEach((el) => {
    let zIndex = parseInt(
    window.getComputedStyle(el).getPropertyValue("z-index")
    );

    if (!isNaN(zIndex) && zIndex > maxZIndex) {
    maxZIndex = zIndex;
    }
});

setZIndex(maxZIndex + 1);
};

return (
<motion.img
    onMouseDown={updateZIndex}
    style={{
    top,
    left,
    rotate,
    zIndex,
    }}
    className={twMerge(
    "drag-elements absolute w-48 bg-yellow-400 p-1 pb-4 rounded-lg shadow-lg cursor-pointer",
    className
    )}
    src={src}
    alt={alt}
    drag
    dragConstraints={containerRef}
    // Uncomment below and remove dragElastic to remove movement after release
    //   dragMomentum={false}
    dragElastic={0.65}
/>
);
};

export default DragCards;