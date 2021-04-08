import { useRef } from "react";
import { useHistory} from "react-router-dom";

const Setup=({routes})=> {
  const ref1 = useRef()
  const ref2 = useRef()
  const history = useHistory()
 

  const resetLocalStorage = () => {
    localStorage.setItem('runTimes', ref2.current.value);
    localStorage.setItem('metrics', JSON.stringify([]));
    
    history.push(`/${ref1.current.value}`)
  }

  return (
    <div>
        <button onClick = {resetLocalStorage}>Run test</button>
        <br/><br/>
        Target: <select ref = {ref1}>
          {routes.map(route=>
            <option key={route.path} value={route.path}>{route.path}</option>
          )}
        </select>
        <br/><br/>
        Precision: <input defaultValue="10" ref = {ref2} type="number"></input>
    </div>
  );
}

export default Setup;
