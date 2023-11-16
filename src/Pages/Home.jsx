import { UserButton } from "@clerk/clerk-react";
import '../index.css'
import ProtectedPage from "./ProtectedPage";

function Home() {
    return (
      <ProtectedPage>
        <h1 className="head-text text-left">Home</h1>
        <UserButton/>
      </ProtectedPage>
    );
  }

  export default Home