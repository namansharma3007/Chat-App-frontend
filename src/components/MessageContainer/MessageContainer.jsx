import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:w-[450px] lg:w-[600px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-gray-300 px-4 py-2 cursor-default">
            <span className="font-semibold text-lg">To: </span>
            <span className="text-lg text-gray-600">Vijay Sharma</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
