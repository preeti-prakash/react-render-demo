import logo from "./logo.svg";
import "./App.css";
import UseState from "./components/UseState/UseState";
import UseReducer from "./components/UserReducer/UseReducer";
import ObjectUseState from "./components/ImmutableState/ObjectUseState";
import ArrayUseState from "./components/ImmutableState/ArrayUseState";
import Parent from "./components/ParentChild/Parent";
import ParentOne from "./components/Optimization/ParentOne";
import ChildOne from "./components/Optimization/ChildOne";
import GrandParent from "./components/Optimization/GrandParent";
import ParentTwo from "./components/Optimization/ParentTwo";
import ParentThree from "./components/Incorrect Optimizations/ParentThree";
import ParentFour from "./components/Incorrect Optimizations/ParentFour";
import ContextParent from "./components/Context/ContextParent";
import { ChildA } from "./components/Context/ContextChildren";

function App() {
  return (
    <div className="App">
      {/* Render Demo - useState*/}
      {/* <UseState /> */}
      {/* <UseReducer /> */}

      {/* Immutable State */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}

      {/* Parent Child - render */}
      {/* <Parent /> */}

      {/* Unnecessary renders - Optimization */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <GrandParent /> */}

      {/* React Memo - render */}
      {/* <ParentTwo /> */}

      {/* Incorrect Optimizations - react memo*/}
      {/* <ParentThree /> */}
      {/* <ParentFour /> */}

      {/* usememo and useCallback */}
      {/* <ParentFour /> */}

      {/* Context - render */}
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
