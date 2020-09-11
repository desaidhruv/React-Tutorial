import React from 'react';
import './App.css';
import Greet from './components/greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetingComponent from './components/UserGreeting';
import NameList from './components/NameList';
import Form from './components/Form';
import StyleSheets from './components/StyleSheets';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Mounting from './components/Mounting'
import LifeCycleA from './components/LifeCycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

function App() {
  return (
    <div className="App">
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent />
      <UserGreetingComponent /> */}
      {/* <Inline /> */}
      {/* <Form /> */}
      {/* <Mounting /> */}
      {/* <LifeCycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <ParentComp /> */}
      {/* <RefsDemo /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
        <Hero heroName="Superman" />
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      <ClickCounter />
      <HoverCounter />
      {/* <StyleSheets primary={true} /> */}
      {/* <NameList /> */}
      {/* <Greet name = "Dhruv" heroName="Batman">
        <p>This is children props.</p>
      </Greet>
      <Greet name = "Sakshu" heroName="Wonder Woman">
        <button>Hey</button>
      </Greet>
      <Greet name = "Hrithik" heroName="Superman"/>
      <Welcome name = "Dhruv" heroName="Batman"/>
      <Welcome name = "Sakshu" heroName="Wonder Woman"/> */}
      {/* <Message /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
