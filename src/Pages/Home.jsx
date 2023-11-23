import { UserButton } from "@clerk/clerk-react";
import '../index.css'
import ProtectedPage from "./ProtectedPage";
import UserPost from "../Components/UserPost";
import { useState, useEffect } from "react";

function Home() {
  // Retrieve the liked state from localStorage on component mount
  const [liked, setLiked] = useState(() => {
    const storedLiked = localStorage.getItem('liked');
    return storedLiked ? JSON.parse(storedLiked) : false;
  });

  // Save the liked state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('liked', JSON.stringify(liked));
  }, [liked]);

  return (
    <ProtectedPage>
      <div className="pb-10">
        <h1 className="head-text text-left">Home</h1>
      </div>
      <UserPost likes={1200 + (liked ? 1 : 0)} replies={481} postImg='/post1.png' postTitle="Let's talk about threads"/>
      <UserPost likes={254 + (liked ? 1 : 0)} replies={28} postImg='/post2.png' postTitle="Nice tutorials."/>
      <UserPost likes={950 + (liked ? 1 : 0)} replies={333} postImg='/post3.png' postTitle="I love this guy"/>
      <UserPost likes={460 + (liked ? 1 : 0)} replies={221} postTitle="This is my first thread."/>
    </ProtectedPage>
  );
}

export default Home;
