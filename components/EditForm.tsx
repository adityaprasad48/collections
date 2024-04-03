"use client";

import React, { useState } from "react";

type Props = {
  post: any;
};

const EditForm = (props: Props) => {
  const [postName, setPostName] = useState("");

  const editForm = (e:any) => {
    
    // call edot action here
  };

  return (
    <div>
      <form onSubmit={editForm}>
        <input
          type="text"
          value={postName}
          onChange={(e) => setPostName(e.target.value)}
        />
      </form>
    </div>
  );
};

export default EditForm;
