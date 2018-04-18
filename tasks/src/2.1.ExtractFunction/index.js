import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';


/**
     Выдели метод отрисовки лота (renderLot), метод отрисовки поста (renderPost) и используй их.
 */
function renderLot(name, description){
  return (<div className="lot">
      <div className="lotName">{name}</div>
      <div className="lotDescription">{description}</div>
    </div>)
}

function renderPost(author, time, message){
  return (
  <div className="post">
        <div className="postHeader">
          <span className="postAuthor">{author}</span><br />
          <span className="postTime">{time}</span>
        </div>
        <div className="postMessage">
          {message}
        </div>
      </div>);
}

ReactDom.render(
  <div className="page">
    {renderLot("Форма для выпекания", "Идеальна для приготовления десертов!")}
    <div className="posts">
      {renderPost("Оля", "Только что", "Хочу хочу хочу!!!") }
      {renderPost("Парень не промах", "2 часа назад", " Попробую с удовольствием ;)") }
      {renderPost("Милая девушка", "3 часа назад", "Можно использовать для выпекания чизкейков :)") }
    </div>
    {renderLot("Чудесный ноутбук", "Выручал меня в трудных жизненных ситуациях")}
    <p/>
    {renderLot("Tangle Teezer", "Начал электризоваться :(")}
  </div>,
  document.getElementById('app'));


/**
     Подсказки:
     - Чтобы вставить какое-то значение из JavaScript в верстку используй фигурные скобки:
       <div className={required ? 'star' : ''}>{surname + ' ' + name}</div>
     - Воспринимай тэг верстки как литерал, описывающий значение некоторого типа данных.
         - Это значение можно положить в переменную или вернуть:
           const label = <span>Надпись</span>;
         - Из эстетических соображений возвращаемый тэг часто оборачивается в круглые скобки:
           return (
             <span>Надпись</span>
           );
 */