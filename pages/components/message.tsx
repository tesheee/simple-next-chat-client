import React from "react";
import userStore from "../store";

export default function Message({ message, name, date }) {
  const user = userStore((state) => state.user);
  return (
    <>
      <div className='message_container'>
        <div className={name === user.nickname ? "card" : "card_2"}>
          <div className='comment-container'>
            <div className='user'></div>
            <div className='comment-content'>{message}</div>
          </div>
          <p className='user-info'>
            <span>{`${name}`}</span>
            <p>{date}</p>
          </p>
        </div>
        <div className='user-pic'>{/* <FiUser /> */}</div>
      </div>
    </>
  );
}
