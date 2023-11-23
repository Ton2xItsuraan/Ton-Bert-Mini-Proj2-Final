import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import ProtectedPage from "./Pages/ProtectedPage";
import PublicPage from "./Pages/PublicPage";
import Onboarding from "./Pages/Onboarding";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Activity from "./Pages/Activity";
import CreateThread from "./Pages/CreateThread";
import Communities from "./Pages/Communities";
import Profile from "./Pages/Profile";
import { dark } from "@clerk/themes";
import PostPage from "./Pages/PostPage";
import UserProfile from "./Pages/UserProfile";

 
if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
 
const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
 

 
function ClerkProviderWithRoutes() {
  const navigate = useNavigate();
  
 
  return (
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
          element={<SignUp redirectUrl='/protected' routing="path" path="/sign-up" />}
        />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/create-thread" element={<CreateThread />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/markzuckerberg/post/1" element={<PostPage />} />
      
        <Route path="/profile/:name" element={<UserProfile />} />
      
 
        <Route
          path="/protected"
          element={
          <>
            <SignedIn>
              <Home />
              <ProtectedPage/>
            </SignedIn>
             <SignedOut>
              <RedirectToSignIn />
           </SignedOut>
          </>
          }
        />
        
      </Routes>
    </ClerkProvider>
  );
}
 
function App() {
  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}
 
export default App;