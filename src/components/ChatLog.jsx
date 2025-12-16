import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';


const ChatLog = (props) => {
  const chatEntries = props.entries.map(entry => {
    return (
      <ChatEntry
        key={entry.id}
        id={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
        liked={entry.liked}
        onLike={props.onLike}
      />
    );
  });

  return (
    <div className="chat-log">
      {chatEntries}
    </div>
  );
};

ChatLog.propTypes = {
  chatEntries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ),
  onLike: PropTypes.func.isRequired,
};

export default ChatLog;