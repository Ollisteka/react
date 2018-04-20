import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

/**
    Не выделяя дополнительных методов
    1. Сделай так, чтобы renderPosts возвращал:
      - div с классом emptyPosts, если posts пуст. 
      - div с классом singlePost, если в posts ровно 1 элемент.
      - div с классом posts в остальных случаях 
    2. Если name лота пустое или неопределено, то вместо него должна появляться надпись '<Неизвестный предмет>'
    3. Если description лота пустое или неопределено, то тэг с классом lotDescription должен отсутствовать
    4. Если у лота нет тэгов, то div с классом lotTags должен отсутствовать
 */

function renderPosts(posts) {
  if (posts.length == 0)
    return <div className="emptyPosts">Нет откликов</div>
  if (posts.length == 1)
    return <div className="singlePost">Единственный отклик</div>
  return (
    <div className="posts">Отклики в количестве {posts.length}</div>
  );
}

function renderLot(name, description, tags) {
  if (name === "")
    name = "Неизвестный предмет";
  let descriptionTag = null;
  
  return (
    <div className="lot">
      <div className="lotName">{name}</div>
      {description && <div className="lotDescription">{description}</div>}
      {tags.length > 0 && renderTags(tags)}
    </div>
  );
}

function renderTags(tags) {
  const content = tags.join(', ');
  return <div className="lotTags">{content}</div>;
}

ReactDom.render(
  <div className="page">
    {renderLot('', '', [])}
    {renderPosts([])}
    {renderLot('Best lot', 'Reccomended!', [])}
    {renderPosts([1,2,3,4])}
    {renderLot('Another lot', 'Please by!', ["best", "of", "the", "best"])}
    {renderPosts(["Post"])}
  </div>,
  document.getElementById('app')
);
