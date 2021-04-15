import { Profiler } from "react"
import { useHistory, useLocation } from "react-router-dom";

const Metric = ({ children, paths }) => {
  const location = useLocation();
  const history = useHistory()
  // eslint-disable-next-line no-unused-vars
  const [empty, currentPath, next] = location.pathname.split('/')

  const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    const runTimes = localStorage.getItem("runTimes");
    const metrics = JSON.parse(localStorage.getItem(currentPath))
    const newMetrics = [...metrics, { actualDuration, phase }]
    localStorage.setItem(currentPath, JSON.stringify(newMetrics))

    if (runTimes > newMetrics.length) {
      history.go(0)
    } else if (next === 'next') {
      const currentPathIndex = paths.findIndex((path) => path === currentPath)
      const nextPath = currentPathIndex + 1 < paths.length ? paths[currentPathIndex + 1] : 'statistics'
      history.push(`/${nextPath}/next`)
    } else {
      history.push(`/statistics/${currentPath}`)
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
