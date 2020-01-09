import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'

const App: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className="App">
      <div>改变主题</div>
      <button onClick={toggleTheme}>切换</button>
      <div>当前主题色是：{theme}</div>
    </div>
  );
}

export default App;
