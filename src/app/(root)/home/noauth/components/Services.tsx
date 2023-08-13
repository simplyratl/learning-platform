"use client";

import React from "react";
import { Brain, StickyNote, Zap } from "lucide-react";

const Card = (
  {
    title,
    description,
    icon,
    color,
    image,
  }: {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    image: string;
  },
) => {
  return (
    <div className="group group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-2xl bg-secondary shadow-xl">
      <div className="flex h-full w-full flex-col items-center justify-end">
        <div
          className="absolute left-4 top-4 z-0 h-[200%] w-[200%] origin-[1.6%_1.6%] scale-0 transform-cpu transition-all duration-300 group-hover:translate-x-[-30%] group-hover:translate-y-[-20%] group-hover:scale-100 group-hover:rounded-full"
          style={{ backgroundColor: color }}
        ></div>

        <div
          className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>

        <div className="absolute left-1/2 top-[30%] -translate-x-1/2">
          <h4 className="text-4xl font-bold">{title}</h4>
        </div>

        <div className="relative z-10 max-h-[50%] w-full">
          <div className="relative left-0 right-0 top-0 h-full w-full">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="mb-6 mt-28 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        title="Quiz"
        description="blabla"
        icon={<Brain size={32} />}
        color="#FF5733"
        image="https://asclar.tech/wp-content/uploads/2023/01/images.png"
      />
      <Card
        title="Flashcards"
        description="blabla"
        icon={<Zap size={32} />}
        color="#00BFFF"
        image="https://opexams.com/static/c1261506b9927ed739ca636bc84a3ecb/quizzes.png"
      />
      <Card
        title="Notes"
        description="blabla"
        icon={<StickyNote size={32} />}
        color="#8A2BE2"
        image="https://opexams.com/static/42b7eaa95369d0e25f1e1a306362a8cc/onlineExams.png"
      />
      {/*<Card*/}
      {/*  title="Quiz"*/}
      {/*  description="blabla"*/}
      {/*  icon={<Brain size={32} />}*/}
      {/*  color="#32CD32"*/}
      {/*/>*/}
      {/*<Card*/}
      {/*  title="Quiz"*/}
      {/*  description="blabla"*/}
      {/*  icon={<Brain size={32} />}*/}
      {/*  color="#FF1493"*/}
      {/*/>*/}
      {/*<Card*/}
      {/*  title="Quiz"*/}
      {/*  description="blabla"*/}
      {/*  icon={<Brain size={32} />}*/}
      {/*  color="#8A2BE2"*/}
      {/*/>*/}
    </div>
  );
};

export default Services;
