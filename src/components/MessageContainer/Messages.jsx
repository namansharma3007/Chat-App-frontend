import { useRef, useEffect } from "react";
import Message from "./Message";

const Messages = () => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <div className="px-4 py-1 flex-1 overflow-auto">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
