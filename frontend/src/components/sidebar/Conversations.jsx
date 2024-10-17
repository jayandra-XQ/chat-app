import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis"
import Conversation from "./Conversation"

const Conversations = () => {
  const {  conversations } = useGetConversations();
 
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}  // pass conversation object to Conversation component to display its details
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1 }
        />
      ))}

      
    </div>
  )
}

export default Conversations