import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import toolSelector from './store/tools/selector'
import {toolActions} from './store/tools/duck'
function App() {
    const dispatch = useDispatch();
    const tools = useSelector(toolSelector.get)
    const isOnlyTag = useSelector(toolSelector.isOnlyTag)


  return (
    <div className="App">
      <header>
          Lista
          <br/>
          {isOnlyTag ? <span>Buscar somente por tag</span> : <span>Buscar por input + tag</span>}

          <button onClick={() => dispatch(toolActions.callAlert())}>Change</button>
      </header>
        <div>
            {tools.map(tool => (
                <div key={tool.id}>
                    {tool.name}
                </div>
                )
            )}
        </div>
    </div>
  );
}

export default App;
