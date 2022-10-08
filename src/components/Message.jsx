import { auth } from "../firebase";

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  userName: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
};

const Message = (props) => {
  const messageType =
    props.message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <div className="w-full">
      <div className={`${style.message} ${messageType}`}>
        <p className={style.userName}>{props.message.name}</p>
        <p> {props.message.text}</p>
      </div>
    </div>
  );
}; /** hi there her is a commit */

export default Message;
