import './App.css';
import {useState} from 'react';
import messagesJSON from './data/messages.json';
import ChatLog from './components/ChatLog';


const countTotalLikes = (messageData) => {
  return messageData.reduce((acc, entry) => acc + entry.liked, 0);
};

const App = () => {

  const [messageData, setMessages] = useState(messagesJSON);

  const likeMessage = (messageId) => {
    const entries = messageData.map((entry) => {
      if (entry.id === messageId) {
        return { ...entry, liked: !entry.liked };
      } else {
        return entry;
      }
    });
    setMessages(entries);
  };

  const likeCount = countTotalLikes(messageData);

  const findSenderNames = (messageData) => {
    const senderNames = messageData.map((entry) => {
      return entry.sender;
    });
    return new Set(senderNames);
  };


  return (
    <div id="App">
      <header>
        <h1>Chat Between {Array.from(findSenderNames(messageData)).join(' and ')}</h1>
        <section id="widget">
          <h2>
            {likeCount} ❤️s
          </h2>
        </section>
      </header>
      <main>
        <ChatLog
          entries={messageData}
          onLike={likeMessage}>
        </ChatLog>
      </main>
    </div>
  );
};

export default App;
