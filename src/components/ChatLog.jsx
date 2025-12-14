import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatLog = (props) => {
  const chatEntries = props.entries.map(entry => {
    return (
      <ChatEntry
      id={entry.id}
      sender={entry.sender}
      body={entry.body}
      timeStamp={entry.timeStamp}
      isLiked={entry.isLiked}
      onLike={props.onLike}
      />
    );
  });

  return (
    <section>
    <p className="chat-log">{chatEntries}</p>
    </section>
  );
};

// ChatLog.propTypes = {
//   entries: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       sender: PropTypes.string.isRequired,
//       body: PropTypes.string.isRequired,
//       timeStamp: PropTypes.string.isRequired,
//       isLiked: PropTypes.bool.isRequired,
//     })
//   ).isRequired,
// };

export default ChatLog;