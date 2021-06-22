import logo from './logo.svg';
import './App.css';
import icon1 from './assets/images/icon1.png';
import icon2 from './assets/images/icon2.png';
import icon3 from './assets/images/icon3.png';
import icon4 from './assets/images/icon4.png';
import ironhackLogo from './assets/images/ironhack-logo.svg';
import menuTop from './assets/images/menu-top.svg';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
return (
  <div>
        <div className="NavBar">
          <img scr={ironhackLogo} />
          <img scr={menuTop} />    
        </div>
    
       <div className="container">
         <h1 className="row" >Say hello to ReactJS</h1>
          <h3>
          <p className="col-5">
            You will learn how to use
            the most popular frontend library,
            and become a super Ninja developer.
          </p>
          </h3>
          <div className="Awe">
          <span className="badge bg-light text-dark">Awesome!</span>
          </div>
          </div>
          
          
          
      <div className="Row">
        <div className="Column">
          <img src={icon1} />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
      </div>

      <div className="Column">
       <img src={icon2} />
        <h3>Components</h3>
       <p>Build encapusled components that manage their state.</p>
     </div>

     <div className="Column">
       <img src={icon3}/>
       <h3>Single-Way</h3>
       <p>A set of immutable values are passed to the component´s.</p>
     </div>

     <div className="Column">
      <img src={icon4} />
       <h3>JSX</h3>
       <p>Staticlly-typed, designed to run on modern browsers.</p>
    </div>
   </div>
   </div>
  );
}

export default App;
