
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Createpost from './components/Createpost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/Post-List-Store'

function App() {

  const[selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
    <div className='app-Container'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <div className='content'>
      <Header/>
      {selectedTab === "Home" ? (<PostList/>) : (<Createpost/>)}
      <Footer/>
      </div>
    </div>
    </PostListProvider>
  )
}

export default App
