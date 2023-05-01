import './App.css';
import { useRef } from 'react';
import { useBlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';
import { toolbox } from './toolbox.js';
import { javascriptGenerator } from 'blockly/javascript';

function App() {

  const blocklyRef = useRef(null);
  const initialXml = `
    <xml xmlns="https://developers.google.com/blockly/xml">
      <block type="text_print" x="10" y="10"></block>
    </xml>
  `;

  const runCode = () => {
    console.log("RUN")
    var code = javascriptGenerator.workspaceToCode(
      workspace.current
    );
    console.log(code);
    eval(code);
  };

  const {workspace} = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolbox,
    Blockly: Blockly,
    initialXml,
    workspaceConfiguration: {
      grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
      }
    },
    onWorkspaceChange: () => console.log('Workspace changed!'),
  });

  return (
    <div>
      <h2>WeBlockly3</h2>
      <div className="blocklyContainer" ref={blocklyRef} />
      <button onClick={runCode} className="run" >Run</button>
    </div>
  );
}

export default App;
