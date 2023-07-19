import React from 'react';
import Header from './Header';
import Blog from './Blog';
import Footer from './Footer';
import { createContext, useState } from 'react';
import Post from './Post';


export const  = createContext();

function App () {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Header />
      <Blog />
      <Footer />

     <button class="float">Dark Mode
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        Toggle Dark button
        </button>
        <h1 className={darkMode ? 'dark' : 'light'}></h1>
        <Post darkMode={props.darkMode} />

    </div>
  );
};

export default App;
