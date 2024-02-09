import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleDarkMode = () => {
    setIsDark(prevState => !prevState);
  };

  return (
    <div className={isDark && "dark"}>
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />

      <Main />
    </div>
  )
}

export default App
