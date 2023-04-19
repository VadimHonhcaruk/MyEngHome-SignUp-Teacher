import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { MainContent } from './components/MainContent';
import { Modal } from './components/Modal/Modal';

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false);

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
      {isModalVisible && <Modal isSuccess={isSuccess} />}
      <Header />
      <MainContent setIsModalVisible={setIsModalVisible} setIsSuccess={setIsSuccess} />
    </div>
  );
}

export default App;
