
import React, { useState } from 'react';

const PostUpdate = () => {
  const [post, setPost] = useState({
    title: '',
    content: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleImageChange = (e) => {
    setPost({ ...post, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <h1>Update Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={post.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Content"
          value={post.content}
          onChange={handleChange}
        />
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
}


export default PostUpdate;