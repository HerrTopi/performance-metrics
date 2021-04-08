import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";

const Statistics=()=> {
  const [avgRunTime, setAvgRunTime] = useState(0)
  const history = useHistory()
  useEffect(()=>{
    const metrics = JSON.parse(localStorage.getItem("metrics"))
    setAvgRunTime(metrics.reduce((sum,{actualDuration})=>sum+actualDuration,0)/metrics.length)
  },[setAvgRunTime])
  
  const handleRunAgain = ()=>{
    localStorage.setItem('metrics', JSON.stringify([]));
    history.go(-1)
  }

  return (
    <div>
        <button onClick={handleRunAgain}>Run again</button>
        <button onClick={()=>history.push('/')}>To config</button>
        <hr/>
        avgRunTime: {avgRunTime}
    </div>
  );
}

export default Statistics;
