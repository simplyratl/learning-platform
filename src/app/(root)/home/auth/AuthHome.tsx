import React from "react";
import QuizMe from "./components/QuizMe";
import HotTopics from "./components/HotTopics";

type Props = {};

const AuthHome = (props: Props) => {
  return (
    <main className="mx-auto max-w-7xl px-8">
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tighter">Dashboard</h2>
      </div>
      <div className="md:grid-cols2 mt-4 grid gap-4">
        <QuizMe />
        <HotTopics />
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7"></div>
    </main>
  );
};

export default AuthHome;
