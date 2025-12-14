import './App.css';
import {useState} from 'react';
import messagesData from './data/messages.json';
import ChatEntry from './components/ChatEntry';
import ChatLog from './components/ChatLog';



const App = () => {
  // const [messages, setMessages] = useState(messagesData);
  // const [isLiked, setIsLiked] = useState(false);

  // const entries = messagesData.map( entry => {
  //     if (entry.id === entryId) {
  //       return {...entries, key: entries.id};
  //     } else {
  //       return entries;
  //     }
  //   }
  //   );

  return (
    <div id="App">
      <header>
        <h1>Chat Between </h1>
      </header>
      <main>
        <ChatLog entries={messagesData} />
      </main>
    </div>
  );
};

export default App;
