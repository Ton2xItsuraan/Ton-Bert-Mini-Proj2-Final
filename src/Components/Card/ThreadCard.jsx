import React, { useState } from 'react';
import ThreadForm from '../../Pages/ThreadForm'; // Check if this import path is correct

const ThreadCard = () => {
  const [posts, setPosts] = useState([]);

  const handlePost = (text) => {
    setPosts([...posts, text]);
   };

  return (
    <div>
      <ThreadForm onPost={handlePost} />
      
      <ul>
        {/* Render only the added posts */}
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadCard;
