import './App.css';
import {Navbar} from './components/Navbar'; // named exort used here . name must be same otherwise gettting errors
import Welcome from './components/Welcome';
import Jsx from './components/Withoutjsx';
import Property from './components/Property';
import Message from './components/Message';
import Counter from './components/Counter';
import Greet from './components/Greet';
import FunctionClick from './FunctionClick';
import EventHandingClickClass from './components/EventHandingClickClass';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import Inline from './components/Inline';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import ParentComp from './components/ParentComp';
import RefsComp from './components/RefsComp';
import FRParentComp from './components/FRParentComp';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import CounterRenderProps from './components/CounterRenderProps';
import { render } from '@testing-library/react';
function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
        
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  {/* <Navbar></Navbar> */}
  <Navbar /> {/* also use this way */}
 <Jsx />
 
  <Property name="Sajita">   {/*name  property to child , here name is props used as attribute  */}
    <p>This a child tag for greet</p> {/* now it pass to greet/Property componet*/}
  </Property>
  <Welcome  name= "Monalisha" heroName="Shakti"/> {/* class component */}
  {/* <Welcome  name= "Sajita" heroName="ChittaRanjan" />
  <Welcome  name= "Monika" heroName="Papun" /> */}
  <Message></Message>
  
  {/* <Counter></Counter>
  <Greet name= "Monali" heroName="Shakti"></Greet>
  <FunctionClick></FunctionClick> */}
  {/* <EventHandingClickClass></EventHandingClickClass> 
  <EventBind></EventBind> */}
  {/* <ParentComponent></ParentComponent>
  <NameList></NameList>
  <Stylesheet primary ={true}></Stylesheet>
  <Inline></Inline> */}
  <Form></Form>
  <LifeCycleA></LifeCycleA>
  <ParentComp></ParentComp>
  <RefsComp></RefsComp>
  <FRParentComp></FRParentComp>
  <PortalDemo></PortalDemo>
  <ClickCounter name="Sonu"></ClickCounter>
  <HoverCounter></HoverCounter>
  <CounterRenderProps render = {(count,incrementCount)=>(
    <ClickCounter count ={count} incrementCount={incrementCount}/>)} />
     <CounterRenderProps render = {(count,incrementCount)=>(
    <HoverCounter count ={count} incrementCount={incrementCount}/>)} />
  </>
  );
}

export default App;
