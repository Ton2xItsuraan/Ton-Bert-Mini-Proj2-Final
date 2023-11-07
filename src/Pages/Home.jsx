import { UserButton } from "@clerk/clerk-react";
import '../index.css'

function Home() {
    return (
      <>
        <h1 className="head-text text-left">Home</h1>
        <UserButton/>
      </>
    );
  }

  export default Home