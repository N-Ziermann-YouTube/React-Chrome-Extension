import logo from './logo.svg';
import './App.css';

function App() {

  function test(){
    /* eslint-disable no-undef */
    chrome.tabs.query({active: true, currentWindow:true}, tabs=>{
      const activeTabId = tabs[0].id;
      chrome.scripting.executeScript(
        {
          target: {tabId: activeTabId},
          //function: ()=>alert("React chrome extension alert")
          function: ()=>{document.body.innerHTML = "Hello World"}
        }
      )
    })
  }

  return (
    <div className="App">
      <button onClick={test}>Send alert</button>
    </div>
  );
}

export default App;
