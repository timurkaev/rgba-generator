import React from 'react';
import style from './Components/style.module.css';
import Generator from './Components/Generator';

const App: React.FC = () => {
  return (
    <div className={style.container}>
      <Generator />
    </div>
  );
};

export default App;
