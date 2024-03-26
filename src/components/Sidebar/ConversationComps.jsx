const ConversationComps = () => {
  return (
    <>
      <div className="flex gap-3 items-center hover:bg-gray-300 rounded px-2 py-1 transition-all cursor-pointer mr-1 border-b border-gray-300">
        <div className="avatar online">
          <div className="w-[3rem] rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" 
            alt="avatar"/>
          </div>
        </div>
        <div className="flex flex-col flex-1">
            <p className="font-semibold text-gray-600">Naman Sharma</p>
        </div>
      </div>
    </>
  );
};

export default ConversationComps;
