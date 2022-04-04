import React from 'react';
import './MainScreen.scss';

function MainScreen(props) {
  return (
    <section className='main'>
        <h1 className="title main__title">
          Привет, меня зовут Кирилл Карпов
          <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="30px" />
        </h1>
        <div className="main__wrapper">
          <div className="main__descr">
            <div className="main__descr__text">
              <h2>Я начинающий фронтенд разработчик</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempora non reprehenderit quo repellat. Deserunt omnis, earum animi reprehenderit distinctio explicabo fugiat mollitia quae maiores iure, repellat exercitationem odit delectus!</p>
            </div>
          </div>
          <img className='main__photo' src="/img/IMG_2022-04-03-11-38-41-799.jpg" alt="Programmer" />
        </div>
    </section>
  );
}

export default MainScreen;