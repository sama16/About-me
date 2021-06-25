import sama from"./sama.jpg";

import './App.css';
import { Grid } from "@material-ui/core";
import React from 'react';


function App() {

  return (
    
  <div>
    <h1>About me</h1>
       <img src ={sama}/>
      
      <div className="container">
       <h2>Sama Almallak</h2>   
      
    <p>I am 16 and I am from Gaza.I am a student at Ahmad shawqui school.I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I like to read. I like to see the sunrise in the morning, I like all Marvel's movies and all Adele's songs . I  like nature . And, I like to laugh.
 </p>
   
    </div>
    <footer>
<h1>Let's have a chat!</h1>
<ul class="social">
<a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">📧</a>
     <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiLoevK9bPxAhVf_rsIHXf0DisQPAgI" target="_blank">📞</a>
   </ul>
    </footer>
    </div>
  );
}

export default App;
