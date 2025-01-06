import { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      <ChatHeader />
      <MessageList messages={messages} />
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
}

export default ChatApp;
