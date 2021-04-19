import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { IconButton } from '@material-ui/core'
import CopyIcon from '@material-ui/icons/FileCopy'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Statistics = ({ paths }) => {
  const [bulkData, setBulkData] = useState([])
  const location = useLocation();
  const history = useHistory()
  // eslint-disable-next-line no-unused-vars
  const [empty, currentPath, next] = location.pathname.split('/')

  const calcAvg = (data) => data.reduce((sum, { actualDuration }) => sum + actualDuration, 0) / data.length


  useEffect(() => {
    if (next === 'next') {
      setBulkData(paths.map(path => {
        const data = JSON.parse(localStorage.getItem(path))
        return { name: path, avg: calcAvg(data) }
      }))
    }
    else {
      const data = JSON.parse(localStorage.getItem(next) || [])
      setBulkData([{ name: next, avg: calcAvg(data) }])
    }
  }, [next, paths, currentPath])

  const copyCsvToClipboard = () => {
    navigator.clipboard.writeText(bulkData.map(({ name, avg }) => `${name},${avg}`).join('\n'))
  }

  return (
    <div>
      {next === 'next' && <IconButton onClick={copyCsvToClipboard}> <CopyIcon /> </IconButton>}
      <button onClick={() => history.push('/')}>To config</button>
      <hr />
      <TableContainer component={Paper} style={{ display: "inline-block", width: "auto" }}>
        <Table style={{ minWidth: "300px" }} stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Runtime</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bulkData.map(({ name, avg }) => (
              <TableRow key={name}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="left">{Math.round(avg * 10) / 10}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Statistics;
