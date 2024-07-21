import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header>
        <p className="text-white">Test</p>
      </Header>
      <Editor />
    </div>
  );
};

export default page;
