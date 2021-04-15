import { useRef } from "react";
import { useHistory } from "react-router-dom";

const Setup = ({ routes }) => {
  const ref1 = useRef()
  const ref2 = useRef()
  const history = useHistory()


  const runSelected = () => {
    localStorage.setItem('runTimes', ref2.current.value);
    localStorage.setItem(ref1.current.value, JSON.stringify([]));
    history.push(`/${ref1.current.value}`)
  }

  const runAll = () => {
    localStorage.setItem('runTimes', 10);
    routes.forEach(({ path }) => {
      localStorage.setItem(path, JSON.stringify([]));
    })
    console.log(routes[0].path)
    history.push(`/${routes[0].path}/next`)
  }

  return (
    <div>
      <button onClick={runSelected}>Run test</button>
      <button onClick={runAll}>Run All</button>
      <br /><br />
        Target: <select ref={ref1}>
        {routes.map(route =>
          <option key={route.path} value={route.path}>{route.path}</option>
        )}
      </select>
      <br /><br />
        Precision: <input defaultValue="10" ref={ref2} type="number"></input>
    </div>
  );
}

export default Setup;
