import {Profiler} from "react"
import { useHistory } from "react-router-dom";

const Metric=({children})=> {
  const history = useHistory()
  

  const onRender = (id,phase,actualDuration,baseDuration,startTime,commitTime,interactions) => {
    const runTimes = localStorage.getItem("runTimes");
    const metrics = JSON.parse(localStorage.getItem("metrics"))
    const newMetrics=[...metrics,{actualDuration,phase}]
    localStorage.setItem("metrics",JSON.stringify(newMetrics))
    
    if(runTimes>newMetrics.length){
        history.go(0)
    }else{
        history.push('/statistics')
    }
  }

  return (
    <div>
      <Profiler id="metrics" onRender={onRender}>
        {children}
      </Profiler>
    </div>
  );
}

export default Metric;
