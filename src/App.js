import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import Nav from './components/Nav';
import GlobalStyle from './components/styles/Global';
import Content from './components/Content';
import Loading from './components/Loading';
import {motion} from 'framer-motion'



function App() {
  const [darkMode,setDarkMode] = useState(false);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    const delay = setTimeout(()=>{
      setLoading((prev=>!prev))
    },500);
    return ()=> clearTimeout(delay);
  },[])

  const modeChanger = ()=>setDarkMode((prevMode)=>!prevMode)

  const themes={
    lightmode:{
      nav:  '#fff',
      body:'#edebe9',
      main:'#00754a',
      fontColor:'rgba(0,0,0,.87)'
    }
    ,darkMode:{
      nav: '#263238',
      body:'#000a12',
      main:'#00754a',
      fontColor:'#edebe9'
    }
  }

  const mainContent = [
    {
      header:'Summer is brighter with free treats.*',
      main:'',
      buttonText:'Join Starbucks® Rewards',
      img:'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78735.jpg',
      bg:'#1e3932',
      color:'#edebe9' 
    },
    {
      header:'Back-to-school smiles',
      main:'A Starbucks eGift makes an A+ treat for students, teachers and school support staff.',
      buttonText:'Send an eGift',
      img:'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-79187.jpg',
      bg:'#faaa5a',
      color:'#1e3932',
      fontSize:'3rem'
    },
    {
      header:'Summer’s brightest new drinks',
      main:'Introducing the Pineapple Passionfruit Starbucks Refreshers® beverage and the Starbucks® Paradise Drink with creamy coconutmilk.',
      buttonText:'Learn more',
      img:'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78796.jpg',
      bg:'#fa91aa',
      color:'#1e3932',
      fontSize:'3rem'
    },
    {
      header:'Cold brew for two',
      main:'Try the new Chocolate Cream Cold Brew with silky, chocolaty cold foam. Or go for a Vanilla Sweet Cream Cold Brew with house-made vanilla-flavored sweet cream.',
      buttonText:'Learn more',
      img:'https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-78943.jpg',
      bg:'#f06464',
      color:'#edebe9',
      fontSize:'3rem'
    }
    
  ];


  return (
    <ThemeProvider theme={!darkMode ? themes.lightmode : themes.darkMode}>
      <GlobalStyle/>
      {loading &&(<Loading />)}
      <Nav darkModeHandler ={modeChanger} modeState={darkMode}/>
      <motion.div
      initial={{ opacity: 0, y:-100 }}
      animate={{ opacity: 1,y:0 }}
      transition={{ delay: 1 }}
      exit={{ opacity: 1 }}
    >
      <Content content ={mainContent}/>
     </motion.div>
    </ThemeProvider>
  );
}

export default App;
