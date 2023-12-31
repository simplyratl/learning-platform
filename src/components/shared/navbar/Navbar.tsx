import Link from "next/link";
import NavbarWrapper from "./NavbarWrapper";
import { ThemeToggle } from "./ThemeToggle";
import { getAuthSession } from "@/lib/nextauth";
import SignInButton from "./SignInButton";
import UserAccountNav from "./UserAccountNav";
import HamburgerMenu from "./HamburgerMenu";
import NavbarLinks from "@/components/shared/navbar/NavbarLinks";

type Props = {};

const Navbar = async (props: Props) => {
  const session = await getAuthSession();

  return (
    <NavbarWrapper>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-2 px-8">
        <Link href="/" className="flex items-center gap-2">
          <p className="border-button-perspective rounded-lg px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] active:scale-95 dark:border-white md:block">
            <span className="hidden sm:block">IntelliMind</span>
            <span className="block sm:hidden">IntelliM</span>
          </p>
        </Link>

        {session?.user && <NavbarLinks />}

        <div className="flex items-center">
          <ThemeToggle className="mr-4 hidden md:block" />
          {session?.user ? (
            <>
              <UserAccountNav user={session.user} />
              <HamburgerMenu />
            </>
          ) : (
            // BUTTON THAT HANDLES SIGN IN AND REDIRECTING TO HOME PAGE
            <SignInButton text="Sign in" />
          )}
        </div>
      </div>
      <div className="absolute left-0 top-[calc(100%-6px)] h-full w-full">
        <div
          className="h-full w-full"
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            backgroundImage: `url(/images/pattern.svg)`,
            backgroundRepeat: "repeat-x",
            backgroundSize: "40px 8px",
            WebkitMaskImage: `linear-gradient(to left, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)`,
            animation: "moveBackground 36s linear infinite",
          }}
        ></div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
