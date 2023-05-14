import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { MainContent } from './components/MainContent';
import { useMediaQuery } from 'react-responsive';


function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  useEffect(() => {
    window.addEventListener('load', () => {
      const preloader = document.querySelector('.container');
      preloader.classList.add('hidden');
      setTimeout(() => {
        preloader.classList.add('hiddenAll');
      }, 2000);
    });
  }, [])

  if (isMobile) {
    return (<div className="AppMobile"><Header isMobile={isMobile} /><MainContent isMobile={isMobile} /></div>);
  } else {
    return (<div className="App"><Header /><MainContent /></div>);
  }
}

export default App;
