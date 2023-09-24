"use client";

import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Timer } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useChat } from "ai/react";
import { useParams, useRouter } from "next/navigation";

const answers = ["useState", "useEffect", "useContext", "useCallback"];

const QuizPlayPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [questions, setQuestions] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const router = useRouter();
  const { id } = useParams();

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setInput,
    isLoading,
    append,
  } = useChat();

  useEffect(() => {
    setInput(`SSH, which stands for Secure Shell, is a cryptographic network protocol used to establish a secure connection between two computers over an unsecured network. It provides a secure way to access and manage remote systems and is commonly used for tasks such as remote login, remote command execution, and secure file transfer.

    Here are some key features and uses of SSH:
    
    1. **Authentication**: SSH uses public-key cryptography to authenticate the client (user) and the server, ensuring that both parties are who they claim to be. This authentication process helps prevent unauthorized access.
    
    2. **Encryption**: SSH encrypts the data transmitted between the client and server, making it extremely difficult for eavesdroppers to intercept and decipher the information being exchanged. This ensures data confidentiality.
    
    3. **Remote Shell Access**: One of the primary uses of SSH is to establish a secure command-line interface (CLI) on a remote system. This allows users to execute commands and manage the remote system as if they were physically present.
    
    4. **Secure File Transfer**: SSH can be used for secure file transfer using tools like SCP (Secure Copy Protocol) and SFTP (SSH File Transfer Protocol). These protocols allow files to be transferred between the client and server with encryption and authentication.
    
    5. **Port Forwarding**: SSH supports port forwarding, which allows users to create secure tunnels for forwarding network traffic between two hosts. This can be useful for accessing services on a remote network securely or for securing communication between two systems.
    
    6. **Tunneling**: SSH can be used to create encrypted tunnels for other network protocols, such as HTTP, VNC, or database connections. This adds an extra layer of security when accessing services over an untrusted network.
    
    7. **Remote Administration**: System administrators often use SSH to manage servers and network devices remotely, as it provides a secure way to perform administrative tasks.
    
    SSH is a critical tool for ensuring the security and integrity of network communication, especially when dealing with remote systems or accessing sensitive information over the internet. It is widely used in both the Linux/Unix and Windows environments and has become an essential part of modern network administration and cybersecurity practices.`);

    append({
      content: `SSH, which stands for Secure Shell, is a cryptographic network protocol used to establish a secure connection between two computers over an unsecured network. It provides a secure way to access and manage remote systems and is commonly used for tasks such as remote login, remote command execution, and secure file transfer.`,
      role: "user",
    });
  }, []);

  useEffect(() => {
    if (messages.length > 2) return;

    if (messages.length > 1) {
      let questionsEl = [];

      for (let i = 0; i < messages.length; i++) {
        if (messages[i].role === "user") continue;
        questionsEl.push(messages[i].content);
      }

      if (!questionsEl[0]) return;
      setQuestions(createQuestionArray(questionsEl[0]));
    }
  }, [messages, currentQuestion]);

  function createQuestionArray(text: string) {
    // Use a regular expression to split the text into questions
    const questionRegex = /[^?]+[?]/g;
    const questions = text.match(questionRegex);

    // Trim any extra whitespace from each question
    if (questions) {
      const trimmedQuestions = questions.map((question) =>
        question.trim().replace("- ", ""),
      );

      return trimmedQuestions;
    }

    return [];
  }

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;

    router.push(`/quiz/${id}?question=${nextQuestion}`);
    setCurrentQuestion(nextQuestion);
  };

  const handlePrevQuestion = () => {
    const prevQuestion = currentQuestion - 1;

    router.push(`/quiz/${id}?question=${prevQuestion}`);
    setCurrentQuestion(prevQuestion);
  };

  return (
    <>
      <div className="mx-auto max-w-5xl">
        {questions && questions.length > 0 && (
          <div>
            <div className="px-8">
              <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-3 text-3xl font-bold">
                  Topic <Badge>react.js</Badge>
                </h2>

                <div className="flex items-center gap-4">
                  <p className="text-xl font-bold">
                    Question {currentQuestion}/{questions.length - 1}
                  </p>

                  <div className="flex items-center gap-2">
                    <Timer size={26} />
                    <span className="text-lg">00:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <div>
                <p className="text-2xl font-medium text-zinc-700 dark:text-zinc-500">
                  {questions[currentQuestion] ?? "ok"}
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

              <Button
                disabled={questions.length - 1 === currentQuestion}
                onClick={handleNextQuestion}
                className="mt-6 w-full"
              >
                Next
              </Button>
              <Button
                disabled={currentQuestion === 1}
                onClick={handlePrevQuestion}
                className="mt-2 w-full"
              >
                Back
              </Button>
            </div>
          </div>
        )}

        {(isLoading || questions.length === 0) && (
          <div className="text-center text-4xl text-white">Loading</div>
        )}

        <form ref={formRef} onSubmit={handleSubmit} className="hidden">
          <Button className="w-full">Start Quiz</Button>
        </form>
      </div>
    </>
  );
};

export default QuizPlayPage;
