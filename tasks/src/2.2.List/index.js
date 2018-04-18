import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';


/**
     1. Разбери ручные переборы массивов в верстке.
        Для постов используй map без циклов, для авторов цикл for без map.
    
     2. Добавь в post поле id и присвой каждому полю уникальный строковый идентификатор.
        Используй id в качестве значения key в основном тэге поста и основном тэге автора.
 */


const posts = [
  {
    id: "1",
    author: 'Парень не промах',
    time: '2 часа назад',
    message: 'Попробую с удовольствием ;)'
  },
  {
    id: "2",
    author: 'Милая девушка',
    time: '3 часа назад',
    message: 'Можно использовать для выпекания чизкейков :)'
  },
  {
    id: "3",
    author: 'Скупец',
    time: 'вчера',
    message: 'Цену-то загнули!'
  },
];

function renderAllPosts(posts){
  return posts.map((post) => renderPost(post));
}

function renderPost(post) {
  return (
    <div key={post.id} className="post">
      <div className="postHeader">
        <span className="postAuthor">{post.author}</span><br />
        <span className="postTime">{post.time}</span>
      </div>
      <div className="postMessage">{post.message}</div>
    </div>
  );
}

function renderAuthors(posts) {
  let result = [];
  //debugger;
  for (const post of posts) {
     result.push(<span key={post.id}>{post.author}</span>);
  }
  return (
    <div className="authors">
      {result}
    </div>
  );
}


ReactDom.render(
  <div className="page">
    <div className="posts">
      {renderAllPosts(posts)}      
    </div>
    {renderAuthors(posts)}
  </div>,
  document.getElementById('app'));


/**
     Подсказки:
     - Отображение массива в другой массив записывается так:
       const values = items.map(item => item.field);
     - В конец массивов можно добавлять значения методом push:
       const numbers = [];
       numbers.push(1);
     - Выбери подходящий цикл for:
       - for (let i = 0; i < items.length; i++) {}
       - for (let key in items) {}
       - for (const item of items) {}
 */