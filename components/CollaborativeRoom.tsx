"use client";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import React, { ReactNode } from "react";
import Loader from "./Loader";
import Header from "./Header";
import { Editor } from "./editor/Editor";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header>
            <div className="flex w-fit items-center justify-center gap-2">
              <p className="document-title">Share</p>
            </div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;
