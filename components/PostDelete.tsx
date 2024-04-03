"use client";

import { deletePost } from "@/actions/post";
import React, { useState } from "react";

type Prop = {
  id: string;
};

const PostDelete = ({ id }: Prop) => {
  const [postName, setPostName] = useState("");

  const postDelete = (e: any) => {
    deletePost(id);
  };

  return (
    <div>
      <button className="px-3 py-2 bg-pink-400 text-white" onClick={postDelete}>
        Delete
      </button>
    </div>
  );
};

export default PostDelete;
