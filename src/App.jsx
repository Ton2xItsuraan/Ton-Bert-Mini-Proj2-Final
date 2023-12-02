import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import ProtectedPage from "./Pages/ProtectedPage";
import PublicPage from "./Pages/PublicPage";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Activity from "./Pages/Activity";
import CreateThread from "./Pages/CreateThread";
import Communities from "./Pages/Communities";
import Profile from "./Pages/Profile";
import { dark } from "@clerk/themes";
import PostPage from "./Pages/PostPage";
import UserProfile from "./Pages/UserProfile";
import React, { useState } from 'react';
import ThreadForm from "./Pages/ThreadForm";

if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function ClerkProviderWithRoutes({ handlePostSubmit, posts }) {
  

  return (
    <BrowserRouter>
      <ClerkProvider
        className="flex justify-center mt-20"
        publishableKey={clerkPublishableKey}
        navigate={(to) => navigate(to)}
        appearance={{
          baseTheme: dark,
        }}
      >
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route
            path="/sign-in/*"
            element={<SignIn redirectUrl='/protected' routing="path" path="/sign-in" />}
          />
          <Route
            path="/sign-up/*"
            element={<SignUp redirectUrl='/onboarding' routing="path" path="/sign-up" />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/create-thread" element={<CreateThread />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/markzuckerberg/post/1" element={<PostPage />} />
          <Route path="/profile/:name" element={<UserProfile />} />
          <Route path="/profile/:name" element={<Profile />} />
          <Route
            path="/protected"
            element={
              <>
                <SignedIn>
                  {/* Pass the handlePostSubmit function to ThreadForm */}
                  <ThreadForm onPost={handlePostSubmit} />
                  <Home posts={posts} />
                  <ProtectedPage />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
        </Routes>
      </ClerkProvider>
    </BrowserRouter>
  );
}

function App() {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (newPost) => {
    // Update the list of posts with the new post
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <ClerkProviderWithRoutes handlePostSubmit={handlePostSubmit} posts={posts} />
  );
}

export default App;
