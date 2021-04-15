import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { IconButton } from '@material-ui/core'
import CopyIcon from '@material-ui/icons/FileCopy'

const Statistics = ({ paths }) => {
  const [avgRunTime, setAvgRunTime] = useState(0)
  const [bulkData, setBulkData] = useState([])
  const location = useLocation();
  const history = useHistory()
  // eslint-disable-next-line no-unused-vars
  const [empty, currentPath, next] = location.pathname.split('/')

  const calcAvg = data => data.reduce((sum, { actualDuration }) => sum + actualDuration, 0) / data.length


  useEffect(() => {
    if (next === 'next') {
      setBulkData(paths.map(path => {
        const data = JSON.parse(localStorage.getItem(path))
        return { name: path, avg: calcAvg(data) }
      }
      ))
    }
    else {
      const metrics = JSON.parse(localStorage.getItem("metrics"))
      setAvgRunTime(calcAvg(metrics))
    }
  }, [setAvgRunTime, next, paths])

  const handleRunAgain = () => {
    localStorage.setItem('metrics', JSON.stringify([]));
    history.go(-1)
  }

  const copyCsvToClipboard = () => {
    navigator.clipboard.writeText(bulkData.map(({ name, avg }) => `${name},${avg}`).join('\n'))
  }

  return (
    <div>
      <IconButton onClick={copyCsvToClipboard}> <CopyIcon /> </IconButton>
      <button onClick={handleRunAgain}>Run again</button>
      <button onClick={() => history.push('/')}>To config</button>
      <hr />
        avgRunTime: {avgRunTime}
    </div>
  );
}

export default Statistics;
