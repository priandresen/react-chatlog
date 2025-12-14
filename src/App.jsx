import './App.css';
import {useState} from 'react';
import messagesJSON from './data/messages.json';
import ChatLog from './components/ChatLog';



const App = () => {
  const [messagesData, setMessages] = useState(messagesJSON);
  const [likeCount, setLikeCount] = useState(0);


  const likeMessage = (messageId) => {
    const entries = messagesData.map((entry) => {
      if (entry.id === messageId) {
        return { ...entry, isLiked: !entry.isLiked };
      } else {
        return entry;
      }
    });
    setMessages(entries);
  };

  const findSenderNames = (messagesData) => {
    const senderNames = messagesData.map((entry) => {
      return entry.sender;
    });
    return new Set(senderNames);
  };


  return (
    <div id="App">
      <header>
        <h1>Chat Between {Array.from(findSenderNames(messagesData)).join(' and ')}</h1>
        <section id="widget">
            <h2>
              {likeCount} ❤️'s
              </h2>
          </section>
      </header>
      <main>
        <ChatLog
          entries={messagesData}
          onLike={likeMessage}>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
