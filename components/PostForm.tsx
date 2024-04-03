"use client";

import { createPost } from "@/actions/post";
import React, { useState } from "react";

const PostForm = () => {
  const [postName, setPostName] = useState("");

  const postForm = (e: any) => {
    e.preventDefault();
    createPost(postName);
    setPostName("");
  };

  return (
    <div>
      <form onSubmit={postForm}>
        <input
          type="text"
          value={postName}
          onChange={(e) => setPostName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default PostForm;
