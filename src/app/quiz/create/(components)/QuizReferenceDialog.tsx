import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

const QuizReferenceDialog = ({ content, setContent }: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-full">Add reference topic</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add reference topic</DialogTitle>
          <DialogDescription>
            Put in your reference text, to be questioned based on it.
          </DialogDescription>

          <div>
            <Textarea
              className="max-h-[50vh] min-h-[200px]"
              placeholder="Your reference content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <p className="mt-2 text-sm text-muted-foreground">
              Your questions will be generated based on this content.
            </p>
            <DialogTrigger>
              <Button className="mt-4">Save reference</Button>
            </DialogTrigger>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default QuizReferenceDialog;
