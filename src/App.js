import React,{useState,useEffect} from 'react';
import './App.css';
import { HashRouter as Router, Route} from 'react-router-dom';
import Home from './pages/index';
import Otc from './pages/otc';
import ScrollToTop from './components/ScrollToTop';
import Capital from './pages/capital'
import Aos from "aos";
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  const [ln, setLn] = useState('English');
  const changeLan = () => {
    if (ln==='English') {
      setLn('中文');
    } else {
      setLn('English');
    }
  };

  const { t } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(ln);
  }, [ln]);



  return (
    <Router>
      <ScrollToTop />
      <Route path="/" exact  component={() => <Home changeLan={changeLan} t={t} ln={ln} />}></Route>
      <Route path="/otc" exact component={() => <Otc changeLan={changeLan} t={t} ln={ln} />}></Route>
      <Route path='/capital' exact component={() => <Capital changeLan={changeLan} t={t} ln={ln} />}></Route>
    </Router>
  );
}

export default App;
