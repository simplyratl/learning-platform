import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const MainContainer = ({ children, title }: Props) => {
  return (
    <main className="mx-auto max-w-7xl px-8">
      <div className="mb-4 flex items-center">
        <h2 className="mr-2  text-3xl font-bold tracking-tighter">{title}</h2>
      </div>

      {children}
    </main>
  );
};

export default MainContainer;
