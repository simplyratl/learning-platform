import React from "react";
import QuizMe from "./components/QuizMe";
import HotTopics from "./components/HotTopics";
import MainContainer from "@/components/ui/main-container";

type Props = {};

const AuthHome = (props: Props) => {
  return (
    <MainContainer title="Dashboard">
      <div className="md:grid-cols2 mt-4 grid gap-4">
        <QuizMe />
        <HotTopics />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7"></div>
    </MainContainer>
  );
};

export default AuthHome;
