import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  

  const addingPost = async () => {
    try {
      let options = {
        method: "POST",

        body: JSON.stringify({
          userId: 101,
          title: title,
          body: body,
        }),
        header: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      let api = " https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(api, options);

      console.log(response.data);
     
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form>
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <label>Body</label>
        <input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type="text"
        />
        <button onClick={addingPost}>Add Post</button>
      </form>
    </div>
  );
};

export default CreatePost;