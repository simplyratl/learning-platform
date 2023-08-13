"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {};

const QuizMe = (props: Props) => {
  const router = useRouter();

  return (
    <Card className="cursor-pointer hover:opacity-75" onClick={() => router.push("/quiz/create")}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Quiz me!</CardTitle>
        <BrainCircuit size={28} strokeWidth={2.5} />
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">
          Test your knowledge of the brain with our quiz!
        </p>
      </CardContent>
    </Card>
  );
};

export default QuizMe;
