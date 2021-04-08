import Metric from './Metric'
import Setup from './Setup'
import Statistics from './Statistics'
import ButtonInstv8 from './components/ButtonInstv8'
import ButtonMaterialUI from './components/ButtonMaterialUI'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const routes = [{
  path:'button',
  component:  <ButtonInstv8/>
},
{
  path:'button-mui',
  component:  <ButtonMaterialUI/>
}
]

const App=()=> {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/statistics">  
              <Statistics/>
          </Route>
          {routes.map(route=>(
             <Route key={route.path} path={`/${route.path}`}>  
             <Metric>
               {route.component}
             </Metric>
         </Route>
          ))}
          <Route path="/">  
              <Setup routes={routes}/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
