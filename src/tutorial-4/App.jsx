import React from 'react';
import '../tutorial-4/App.css';
import { adjectivesArr, nounsArr } from './store';
import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

function App() {
  const [list, setList] = React.useState([]);

  const randomIndexValue = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  const generatePhrase = () => {
    const phrase = `${randomIndexValue(adjectivesArr)} ${randomIndexValue(
      adjectivesArr
    )} ${randomIndexValue(nounsArr)}`;
    list.push(phrase.trim());
    setList([...list]);
  };

  const clearState = () => {
    setList([]);
  };

  return (
    <div className="wrapper">
      <div className="list">
        {list.length > 0 ? (
          list.map((item, index) => {
            return <Phrase phrase={item} key={index} />;
          })
        ) : (
          <EmptyBlock />
        )}
      </div>
      <button className="btn btn_generate" onClick={generatePhrase}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={clearState}>
        Очистить
      </button>
    </div>
  );
}

export default App;
