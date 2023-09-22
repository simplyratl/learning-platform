import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "next-auth";
import Image from "next/image";
import React from "react";

type Props = {
  user: Pick<User, "name" | "image">;
};

const UserAvatar = ({ user }: Props) => {
  return (
    <Avatar className="border-2 border-primary">
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            fill
            src={user.image}
            alt="profile image"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>{user?.name}</AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
