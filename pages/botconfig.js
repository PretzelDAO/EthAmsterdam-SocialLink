import { useContext, useState } from "react";
import BotConnect from "../components/BotConnect";
import ConnectButton from "../components/ConnectButton";
import ConnectProfile from "../components/ConnectProfile";
import CreateProfileModal from "../components/CreateProfileModal";
import UserContext from "../contexts/UserContext";

export default function BotCheck() {
  // const [handle, setHandle] = useState()
  const global = useContext(UserContext);
  // const history = useHistory();
  let toshow;
  if (global.profileId) {
    console.log("logged in");
    // history.push('/')
    toshow = <BotConnect />;
  } else {
    toshow = global.user ? (
      <div className="flex flex-row ">
        <CreateProfileModal />
        <ConnectProfile />
      </div>
    ) : (
      <ConnectButton />
    );
  }

  return (
    <div className="w-full flex justify-center my-20">
      <div
        className="pl-8 min-w-md max-w-[50vw]
                      rounded-md
                      overflow-hidden
                      shadow-2xl
                      w-5/6
                      bg-white
                      flex
                      flex-col
                      items-start
                      space-y-4
                      py-4
                      font-light
                      px-4"
      >
        <span className="py-3 text-lg">Bot: SocialLink#1224</span>
        <div className="font-light py-3">
          {global.profileId
            ? `Your on-chain Profile: ${global.profile[3]} (${global.profileId})`
            : 'Please enter your on-chain Profile'}
        </div>
        {toshow}
      </div>
    </div>
  );
}