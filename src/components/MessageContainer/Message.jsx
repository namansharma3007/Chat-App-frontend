const Message = () => {
  return (
    <>
      <div className="chat chat-start max-w-[22rem]">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="avatar"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-bubble bg-blue-500 text-slate-800">
          It was said that you would, destroy the Sith, not join them.
        </div>
        <div className="chat-footer">
          <time className="text-xs opacity-50">12:45</time>
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="chat-bubble bg-gray-200 text-gray-700">
          It was said that you would, destroy the Sith, not join them.
        </div>
        <div className="chat-footer">
          <time className="text-xs opacity-50">12:45</time>
        </div>
      </div>
    </>
  );
};

export default Message;
