import { Dialog, Transition } from "@headlessui/react";
import Script from "next/script";
import { Fragment, useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { publication } from "../mockdata/mock_publication";
import {
  createProfile,
  getProfileById,
  getProfileIdFromHandle,
} from "../utils/chain_utils";
import BLPButton from "./Button";
import SocialComps from "./SocialComps";

const followModules = [
  {
    title: "Anyone",
    description: "Anyone can follow you! like literally... anyone",
  },
  {
    title: "Pay to follow",
    description:
      "People will have to pay to follow you! yey! money for being who you are :P",
  },
];
const defaultFields = ["title", "description"];

export default function CreateProfileModal({ publication }) {
  let [isOpen, setIsOpen] = useState(false);
  let [step, setStep] = useState("selection");
  const [handle, setHandle] = useState();
  const [followModule, setFollowModule] = useState();
  const [image, setImage] = useState({ preview: "", raw: "", value: null });
  const [loading, setLoading] = useState(false);

  const global = useContext(UserContext);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  async function submitProfile() {
    try {
      setLoading(true);
      const prof = await createProfile(handle, image.raw, global.user?.address);
      if (prof) {
        const claimed = await getProfileIdFromHandle(handle);
        if (!claimed) {
          // setError('Handle not existent!')
        }
        if (claimed) {
          // setError('Claimed profile:' + claimed)
          const profile = await getProfileById(claimed);
          global.update({ profile, profileId: claimed, user: global.user });
          setTimeout(() => closeModal(), 2000);
        }
      } else {
      }
      console.log("profile", prof);
    } finally {
      setLoading(false);
    }
  }

  function stepToComponent(step) {
    switch (step) {
      case "selection":
        return (
          <InsertHandle
            next={() => submitProfile()}
            handle={handle}
            setHandle={setHandle}
            image={image}
            setImage={setImage}
            followModule={followModule}
            setFollowModule={setFollowModule}
            loading={loading}
          />
        );
      case "info":
        return <SubmittedHandle next={() => submitProfile()} />;
    }
  }

  return (
    <>
      <button
        onClick={openModal}
        className={` md:flex transition ease-out duration-500 font-thin py-2 px-4 rounded-lg bg-hacker-accent-400 hover:bg-hacker-accent-200 text-gray-50`}
      >
        Create Profile
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-[40vw] p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-thin leading-6 text-gray-900"
                >
                  {publication?.title}
                </Dialog.Title>
                <div className="mt-2 space-y-4">
                  <div className="flex flex-col w-full justify-center align-middle">
                    <div className="py-3 font-sans text-lg front-thin">
                      Create your handle
                    </div>
                    <div className="flex flex-row ">
                      <img
                        src={`https://robohash.org/${global.user?.address}.png?size=120x120`}
                        className="w-8 h-8 rounded-full mr-2 border-hacker-color-200"
                      />
                      <div className="flex flex-col justify-center items-center">
                        <div>{global.user?.address}</div>
                      </div>
                    </div>
                  </div>
                  {stepToComponent(step)}
                </div>

                {/* <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-200 bg-red-800 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => {
                      setStep('selection')
                      closeModal()
                    }}
                  >
                    Nevermind!
                  </button>
                </div> */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function InsertHandle({
  next,
  handle,
  setHandle,
  image,
  setImage,
  followModule,
  setFollowModule,
  loading,
}) {
  return (
    <div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        ></label>
        <input
          id="message"
          rows="4"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Lens handle (can not be changed)"
        ></input>
      </div>
      <label
        className="text-sm font-light font-sans text-gray-900 block mb-2"
        htmlFor="user_avatar"
      >
        Profile Picture
      </label>
      <input
        className="block w-full cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg"
        aria-describedby="user_avatar_help"
        // value={image.value}
        onChange={(e) => {
          // console.log('image', e.target.value)
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0],
            value: e.target.value,
          });
        }}
        id="user_avatar"
        type="file"
      />

      {image?.preview && (
        <div className="flex flex-col justify-between w-full align-middle items-center mt-4">
          <div className="w-full flex flex-row">
            <div className="flex flex-col justify-center items-center w-1/2">
              <div>Image preview</div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <div>Profile Image preview</div>
            </div>
          </div>
          <div className="w-full flex flex-row">
            <div className="flex flex-col justify-center items-center w-1/2">
              <img
                className="bg-white rounded-md shadow-lg my-2 max-w-[60%]"
                src={image.preview}
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <div className=" w-32 h-32 rounded-full shadow-lg my-2 bg-white border-2 overflow-hidden">
                <img
                  className="w-full max-h-sm aspect-square object-cover"
                  src={image.preview}
                ></img>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-row justify-between">
        <BLPButton
          className=" text-sm font-medium text-gray-200 bg-red-800 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 min-w-[20%] mt-16"
          clickaction={() => {
            closeModal();
          }}
          text={" Nevermind!"}
        />
        {loading ? (
          <div className="w-8 h-8 border-b-2 border-hacker-color-200 rounded-full animate-spin"></div>
        ) : (
          <BLPButton
            text={"Claim My Handle!"}
            clickaction={next}
            className={"min-w-[20%]"}
          />
        )}
      </div>
    </div>
  );
}

function SubmittedHandle({ next }) {
  console.log("image", image);
  const pub = publication;
  return <div className="px-6 flex flex-col max-w-3xl"> </div>;
}
