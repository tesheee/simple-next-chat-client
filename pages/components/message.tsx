import React from "react";
import userStore from "../../utils/store";

export default function Message({
  message,
  name,
  date,
}: {
  message: string;
  name: string;
  date: string;
}) {
  const user = userStore((state: any) => state.user);
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
