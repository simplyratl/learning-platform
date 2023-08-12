import { getAuthSession } from "@/lib/nextauth";
import AuthHome from "./home/auth/AuthHome";
import NoAuthHome from "./home/noauth/NoAuthHome";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default async function Home() {
  const session = await getAuthSession();

  if (session?.user) {
    return (
      <MainLayout>
        <AuthHome />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <NoAuthHome />
    </MainLayout>
  );
}
