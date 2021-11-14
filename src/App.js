import './App.css';
import Study from './componants/destructuring/Study';
import GreetFun from './componants/example-of-componant/GreetFun';
import Hello from './componants/jsx/Hello'
import JsxExample from './componants/jsx/JsxExample';
import Greet from './componants/props/Greet';
import Welcome from './componants/props/Welcome';
import Count from './componants/state/Count';
import Message from './componants/state/Message';
import Destructclass from './componants/destructuring/Destructclass';
import FunctionHandler from './componants/event-handling/FunctionHandler'
import ClassClick from './componants/event-handling/ClassClick'
import EventBind from './componants/binding-event-handler/EventBind';
import ParentComponant from './componants/method -as-props/ParentComponant';
import UserGreeting from './componants/conditional-rendring/UserGreeting';
import NameList from './componants/list-rendring/NameList';
import ProductList from './componants/list-rendring/ProductList';
import PersonList from './componants/index-as-key-Anti-pattern/PersonList';
import NumberList from './componants/index-as-key-Anti-pattern/NumberList';
import ClassCounter from './componants/hooks-useState-Hook/ClassCounter';
import HookCounter from './componants/hooks-useState-Hook/HookCounter';
import HookCounterTwo from './componants/hooks-useState-with-privState/HookCounterTwo';
import HookCounterThree from './componants/hooks-useState-with-object/HookCounterThree';
import HookCounterFour from './componants/hooks-useState-with-array/HookCounterFour';
import HookCounterSix from './componants/hooks-useEffect-after-render/HookCounterSix';
import HookCounterOne from './componants/hooks-useEffect-after-render/HookCounterOne';
import ClassMouse from './componants/hooks-run-effect-only-onces/ClassMouse';
import HookMouse from './componants/hooks-run-effect-only-onces/HookMouse';
import MouseContainer from './componants/hooks-useEffect-with-cleanup/MouseContainer';
import LifecycleA from './componants/Compo-Mounting-lifecycle-method/LifecycleA';
import Example from './componants/Example';
import Example1 from './componants/Example1';
function App() {
  const numbers = [1, 2, 3, 4, 5]
  return (
    <div className="App">
      <h1>Hello React</h1>

      {/* componant */}
      <GreetFun />

      {/* jsk componant */}
      <Hello />
      <JsxExample />

      {/* passing props here 
      -- childrean props
      */}
      <Greet name="Bruce" heroName="Batman">
        <p>this is children props</p>
      </Greet>
      <Greet name="lsl" heroName="Batman">
        <button>button</button>
      </Greet>

      <Welcome name="Bruce" heroName="Batman" />

      {/* set state componant */}
      <Message />
      <Count />

      {/* destructuring  */}
      <Study name="diana" subject="React" />
      <Destructclass name="iliana" heroName="superman" />

      {/* event handling */}
      <FunctionHandler />
      <ClassClick />
      <EventBind />

      {/* methods as props */}
      <h1>Methods as props</h1>
      <ParentComponant />

      {/* conditional rendring */}
      <h1>Conditional Rendering</h1>
      <UserGreeting />

      {/* List rendring  */}
      <h1>List rendring</h1>
      <NameList />
      <ProductList />

      {/* index-as-key-Anti-pattern */}
      <PersonList />
      <NumberList numbers={numbers} />


      {/* Hooks------ */}
      <h2>Hooks</h2>
      {/* <ClassCounter /> */}
      <HookCounter />

      {/* useState with priv state */}
      <h2>useState with priv state </h2>
      <HookCounterTwo />

      {/* useState with object */}
      <h2>useState with object</h2>
      <HookCounterThree />

      {/* useState with array */}
      <h2>useState with array</h2>
      <HookCounterFour />

      {/* useEffect after render */}
      <h2>useEffect after render</h2>
      {/* <HookCounterSix /> */}
      <HookCounterOne />

      {/*  */}
      <h2>Run effect only once</h2>
      {/* <ClassMouse/> */}
      {/* <HookMouse /> */}

      {/* useEffect with cleanup */}
      <h2>useEffect with cleanup</h2>
      <MouseContainer />

      {/* Lifecycle method  */}
      {/* mounting  */}
      <LifecycleA />

      <h2>Example</h2>
      {/* <Example/> */}
      <Example1/>
    </div>
  );
}

export default App;
