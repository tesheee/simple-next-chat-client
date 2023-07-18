"use client";
import React from "react";
import Link from "next/link";
import userStore from "../../utils/store";

export default function Header() {
  const user = null;
  //const user = userStore((state) => state.user);
  return (
    <header>
      <div className='header sticky'>
        <div className='container'>
          <div className='header_container'>
            <Link className='header_logo' href='/'>
              Hagenti.<span>Chat</span>
            </Link>
            <div className='header_nav'>
              <a
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              >
                Главная
              </a>
              {user ? <a>Выйти</a> : <Link href='/auth'>Логин</Link>}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
