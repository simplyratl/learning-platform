"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import FileDrop from "@/app/quiz/create/(components)/FileDrop";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, Sparkles } from "lucide-react";

import { useChat } from "ai/react";
import QuizReferenceDialog from "./QuizReferenceDialog";
import { useRouter } from "next/navigation";

const typesQuizCreate = [
  {
    name: "AI",
    description: "Let our AI create a quiz for you!",
    icon: <Sparkles size={18} />,
  },
  {
    name: "Manual",
    description: "Create a quiz yourself!",
    icon: null,
  },
];

const CreateQuizCard = () => {
  const [quizType, setQuizType] = React.useState<"ai" | "manual">("ai");
  const [content, setContent] = useState("");
  const navigate = useRouter();

  // const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <Card className="min-w-full md:min-w-[600px]">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Create a Quiz</CardTitle>
            <CardDescription>
              {quizType === "ai"
                ? "Let an AI create a topic and questions!"
                : "Create a topic and questions!"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <div className="mb-6">
                {quizType === "ai" && (
                  <div>
                    <div className="flex flex-col">
                      <Label className="mb-1">Topic</Label>
                      <QuizReferenceDialog
                        content={content}
                        setContent={setContent}
                      />
                      {/* <Input placeholder="Enter a topic..." /> */}
                    </div>

                    <span className="my-5 block">OR</span>

                    <div>
                      <Label>Upload a file to create quiz</Label>
                      <FileDrop />
                    </div>
                  </div>
                )}

                <div className="mt-6">
                  <Label>Amount of questions</Label>
                  <Input
                    placeholder="Enter a number..."
                    type="number"
                    maxLength={20}
                    max={20}
                    disabled
                    defaultValue={4}
                  />
                </div>
              </div>

              <Button
                onClick={() => navigate.push("/quiz/123123")}
                className="text-md poppins mb-6 w-full py-4 font-semibold"
              >
                Next
              </Button>

              <div className="flex gap-2">
                {typesQuizCreate.map((type) => (
                  <Button
                    key={type.name}
                    onClick={() =>
                      setQuizType(type.name === "AI" ? "ai" : "manual")
                    }
                    className={cn(
                      "text-md",
                      quizType === type.name.toLowerCase()
                        ? "border-primary bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground"
                        : "",
                    )}
                  >
                    {type.name}
                    <span className="ml-1.5">{type.icon}</span>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
          {quizType === "ai" && (
            <CardFooter>
              <HoverCard>
                <HoverCardTrigger>
                  <Button variant="link" className="p-0">
                    Pricing
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src="https://github.com/vercel.png" />
                      <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@nextjs</h4>
                      <p className="text-sm">
                        The React Framework – created and maintained by @vercel.
                      </p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Joined December 2021
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </CardFooter>
          )}
        </Card>

        {/* AI CHAT START */}
        {/* <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
		{messages.map(m => (
			<div key={m.id}>
			{m.role === 'user' ? 'User: ' : 'AI: '}
			{m.content}
			</div>
		))}
	
		<form onSubmit={handleSubmit}>
			<label>
			Enter text to generate questions...
			<input
				className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2"
				value={input}
				onChange={handleInputChange}
			/>
			</label>
		</form>
		</div> */}
        {/* AI CHAT END */}
      </div>
    </>
  );
};

export default CreateQuizCard;
