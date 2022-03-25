import Header from './Components/Nav/Header/Header';
import { useState } from 'react';
import Landing from './Components/Landing/Landing';
import Footer from './Components/Nav/Footer/Footer';
import Sidebar from './Components/UI/SideBar/SideBar';
import './App.scss';

function App() {
  const [sidebar, setSidebar] = useState({showSidebar: false, header: '', content: null});

  const openSidebar = (header, content) =>{
    console.log("open Sidebar")
    if(!sidebar.showSidebar){
      setSidebar({showSidebar: true, header: header, content: content});
    }
  }
  const closeSidebar = ()=>{
      setSidebar({showSidebar: false, header: '', content: null});
  }
  return (
    <div className="App">
    <Sidebar closeSidebar={closeSidebar} showSidebar={sidebar.showSidebar} header={sidebar.header}>{sidebar.content}</Sidebar>
    <Header openSidebar={openSidebar}></Header>
    <Landing openSidebar={openSidebar}/>
    <Footer />
    </div>
  );
}

export default App;
