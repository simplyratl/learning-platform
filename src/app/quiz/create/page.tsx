import React from "react";
import MainContainer from "@/components/ui/main-container";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import CreateQuizCard from "@/app/quiz/create/(components)/CreateQuizCard";

async function QuizCreatePage() {
  const session = await getAuthSession();

  if (!session?.user) return redirect("/");

  return (
    <MainContainer title="Create">
      <CreateQuizCard />
    </MainContainer>
  );
}

export default QuizCreatePage;
