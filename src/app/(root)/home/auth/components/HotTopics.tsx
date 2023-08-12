"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "next-themes";
import React from "react";
import D3WordCloud from "react-d3-cloud";

type Props = {};

const data = [
  {
    text: "Hey",
    value: 3,
  },
  {
    text: "ok",
    value: 5,
  },
  {
    text: "vercel",
    value: 5,
  },
  {
    text: "pls kil mi",
    value: 10,
  },
];

const fontSizeMapper = (word: { value: number }) => {
  return Math.log2(word.value) * 5 + 16;
};

const HotTopics = (props: Props) => {
  const [mounted, setMounted] = React.useState(false);
  const theme = useTheme();

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return <Skeleton className="h-[500px] w-full" />;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        {/* <BrainCircuit size={28} strokeWidth={2.5} /> */}
        <CardDescription>Click on topic to continue learning!</CardDescription>
      </CardHeader>

      <CardContent>
        <D3WordCloud
          height={550}
          font="Times"
          fontSize={fontSizeMapper}
          rotate={0}
          data={data}
          padding={10}
          fill={theme.resolvedTheme === "dark" ? "#fff" : "#000"}
        />
      </CardContent>
    </Card>
  );
};

export default HotTopics;
