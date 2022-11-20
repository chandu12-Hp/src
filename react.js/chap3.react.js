// jsx chapter. so basically jsx return ke () ke ander se challu ho rha hai ye basically ek html hai jisne js ka mukhut pahn rha hai. ye java script sentance extension hai jisme {} me javascript likhi hoti hai
// but jaise html me sirf class se class ko darshate the yha classname likh ke kaam lena hoga. similarly for ko htmlfor.
// ab jaise jsx me scripting karni hai ho html jaise h1 kARKE SIDHA EK HEADING NHI le sakte so yha ek jsx tag <> </> lgana padta hai.
// LEKIN YE SAARE KAAM APP.JS ME KARNE HAI YHA SIRF SHOW KRA RHA HU.
// ab yha app.js me css apply karne ke liye simply jo app.css hai vha css de sakta hai vo pahle se attach hai ya fir apna achhach kr sakte hai.
// AND YHA return ke upper ka sara chiz ek js hai to hum utility me 
import logo from './logo.svg';
import './App.css';

let Name = "harry";
function App() {
  return (
      // <h1>this is note</h1> // X
      <>
      <div>hello {Name}</div>
    <h1>kbs</h1>
    <div className="App">
    <img src="" alt="" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React kyoki saas bhi kabhi bahu thi.
        </a>
      </header>
    </div>

     
   &&&&&&& next one we learn 
    <h1>the bad man</h1>
    <div>home</div>
    <div>about</div>
    <div>contact us</div>
    <div>services</div>
    <div>hello {Name}</div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem nam
      tempore animi dignissimos officia? Inventore ducimus, laborum fugit
      mollitia voluptate distinctio consectetur autem nulla.
    </p>
    </>
    );
}


export default App;
