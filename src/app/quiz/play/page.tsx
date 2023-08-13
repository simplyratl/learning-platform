import React from "react";
import { Badge } from "@/components/ui/badge";
import { Timer } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const answers = ["useState", "useEffect", "useContext", "useCallback"];

const QuizPlayPage = () => {
  return (
    <div className="mx-auto max-w-5xl px-8">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-3 text-3xl font-bold">
          Topic <Badge>react.js</Badge>
        </h2>

        <div className="flex items-center gap-4">
          <p className="text-xl font-bold">Question 1/20</p>

          <div className="flex items-center gap-2">
            <Timer size={26} />
            <span className="text-lg">00:00</span>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div>
          <p className="text-2xl font-medium text-zinc-700 dark:text-zinc-500">
            Which React hook is used for managing state within a functional
            component?
          </p>
        </div>

        <Separator className="my-6" />

        <div className="space-y-4">
          {answers.map((answer, index) => (
            <Card key={index} className="cursor-pointer">
              <CardContent className="m-0 flex h-full items-center justify-between gap-4 py-2">
                <Badge variant="outline" className="border-white">
                  {index + 1}
                </Badge>
                <span className="text-xl font-medium">{answer}</span>

                <div></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPlayPage;
