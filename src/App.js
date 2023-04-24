import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { MainContent } from './components/MainContent';

function App() {
  useEffect(() => {
    window.addEventListener('load', () => {
      const preloader = document.querySelector('.container');
      preloader.classList.add('hidden');
      setTimeout(() => {
        preloader.classList.add('hiddenAll');
      }, 2000);
    });
  }, [])

  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
