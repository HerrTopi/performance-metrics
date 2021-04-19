import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const Setup = ({ routes }) => {
  const lastTestedComponent = localStorage.getItem('lastTestedComponent')
  const ref1 = useRef()
  const ref2 = useRef()
  const history = useHistory()
  const [selected, setSelected] = useState(lastTestedComponent || '')


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

  const preview = () => {
    history.push(`/${ref1.current.value}/freeze`)
  }

  return (
    <div>
      <button onClick={runSelected}>Run test</button>&nbsp;
      <button onClick={runAll}>Run All</button>&nbsp;
      <button onClick={preview}>Preview</button>&nbsp;
      <br /><br />
        Target: &nbsp;
        <select ref={ref1} value={selected} onChange={(e) => {setSelected(e.target.value)}}>
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
