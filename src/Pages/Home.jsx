import { UserButton } from "@clerk/clerk-react";
import '../index.css'
import ProtectedPage from "./ProtectedPage";
import Feeds from "../Components/Feeds";

function Home() {
    return (
      <ProtectedPage>
        <div className="pb-10">
        <h1 className="head-text text-left">Home</h1>
        </div>
        <Feeds likes={1200} replies={481} postImg='/post1.png' postTitle="Let's talk about threads"/>
        <Feeds likes={254} replies={28} postImg='/post2.png' postTitle="Nice tutorials."/>
        <Feeds likes={950} replies={333} postImg='/post3.png' postTitle="I love this guy"/>
        <Feeds likes={460} replies={221} postTitle="This is my first thread."/>
      </ProtectedPage>
    );
  }

  export default Home