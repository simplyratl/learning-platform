import React from "react";
import MainContainer from "@/components/ui/main-container";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";

const NotesPage = async () => {
  const session = await getAuthSession();

  if (!session?.user) return redirect("/");

  return <MainContainer title="Notes">notes</MainContainer>;
};

export default NotesPage;
