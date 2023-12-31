import React, { SyntheticEvent } from "react";
import Message from "./components/message";
import userStore from "../utils/store";
import socket from "../utils/socket";
import { useRouter } from "next/router";
import { Head } from "next/document";

export default function Chat() {
  const router = useRouter();
  const [value, setValue] = React.useState("");
  const chatRef = React.useRef<HTMLInputElement | null>(null);
  //const [messages, setMessages] = React.useState([]);

  const users = userStore((state: any) => state.users);
  const addUsers = userStore((state: any) => state.addUsers);
  const setMessages = userStore((state: any) => state.setMessages);
  const messages = userStore((state: any) => state.messages);
  const user = userStore((state: any) => state.user);

  //Сокеты юзеров и новых сообщений
  React.useEffect(() => {
    socket.on("room:joined", (users) => {
      console.log(users);
      addUsers(users);
    });
    socket.on("room:new_message", (message) => {
      //setMessages((prev) => [...prev, message]);
      setMessages(message);
    });
  }, []);

  //Отправка сообщений
  const onSendMessage = () => {
    socket.emit("room:new_message", {
      nickname: user.nickname,
      numberRoom: user.room,
      text: value,
    });
    //setMessages((prev) => [...prev, { text: value, name: user.nickname }]);
    setValue("");
  };

  //Обработка нажатия на enter
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onSendMessage();
    }
  };

  //Прокрутка вниз при добавлении сообщений
  React.useEffect(() => {
    chatRef?.current?.scrollTo(0, 99999);
  }, [messages]);

  //Перенаправление на главную если пользователь отсутствует
  React.useEffect(() => {
    if (user === null) {
      router.push("/");
    }
  }, [user]);

  return (
    <>
      <div className='container'>
        <div className='product__feedback'>
          <div className='users_info'>Пользователей {users.length}</div>
          <div className='chat' ref={chatRef}>
            {messages.map((message: any, i: number) => (
              <Message
                key={i}
                date={message.date}
                message={message.text}
                name={message.name}
              />
            ))}
          </div>
        </div>
        <div className='text-box'>
          <div className='box-container'>
            <textarea
              placeholder='Написать сообщение'
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={(e: any) => handleKeyPress(e)}
            ></textarea>
            <div>
              <div className='formatting'>
                <button type='button'></button>
                <button
                  type='submit'
                  className='send'
                  onClick={onSendMessage}
                  title='Send'
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
