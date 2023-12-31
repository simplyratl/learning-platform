import React from "react";
import MainContainer from "@/components/ui/main-container";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

const QuizPage = async () => {
  const session = await getAuthSession();

  if (!session?.user) return redirect("/");

  return <MainContainer title="Quizes">quiz page</MainContainer>;
};

export default QuizPage;
