import Metric from './Metric'
import Setup from './Setup'
import Statistics from './Statistics'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import BUTTON_IUI from './components/BUTTON_IUI'
import BUTTON_MUI from './components/BUTTON_MUI'
import BUTTON_X100_IUI from './components/BUTTON_X100_IUI'
import BUTTON_X100_MUI from './components/BUTTON_X100_MUI'
import BUTTON_PRIMARY_SMALL_IUI from './components/BUTTON_PRIMARY_SMALL_IUI'
import BUTTON_PRIMARY_SMALL_MUI from './components/BUTTON_PRIMARY_SMALL_MUI'
import BUTTON_ICON_IUI from './components/BUTTON_ICON_IUI'
import BUTTON_ICON_MUI from './components/BUTTON_ICON_MUI'
import ICONBUTTON_IUI from './components/ICONBUTTON_IUI'
import ICONBUTTON_MUI from './components/ICONBUTTON_MUI'
import ICON_IUI from './components/ICON_IUI'
import ICON_MUI from './components/ICON_MUI'
import ICON_X100_IUI from './components/ICON_X100_IUI'
import ICON_X100_MUI from './components/ICON_X100_MUI'
import SIMPLESELECT_IUI from './components/SIMPLESELECT_IUI'
import SIMPLESELECT_MUI from './components/SIMPLESELECT_MUI'
import SIMPLESELECT_X100_IUI from './components/SIMPLESELECT_X100_IUI'
import SIMPLESELECT_X100_MUI from './components/SIMPLESELECT_X100_MUI'
import SELECT_DEFAULT_EXAMPLE_IUI from './components/SELECT_DEFAULT_EXAMPLE_IUI'
import VIEW_IUI from './components/VIEW_IUI'
import VIEW_X100_IUI from './components/VIEW_X100_IUI'
import LINK_IUI from './components/LINK_IUI'
import LINK_MUI from './components/LINK_MUI'
import LINK_X100_IUI from './components/LINK_X100_IUI'
import LINK_X100_MUI from './components/LINK_X100_MUI'
import FLEX_IUI from './components/FLEX_IUI'
import FLEX_MUI from './components/FLEX_MUI'
import FLEX_X100_IUI from './components/FLEX_X100_IUI'
import FLEX_X100_MUI from './components/FLEX_X100_MUI'

/*
  const output = []
  
  for(i=0;i<100;i++){
    output.push(`<Box>Item ${i}</Box>`)
  }
  window.copy(output.join("\n"))
*/

const routes = [
  {
    path: 'SELECT_DEFAULT_EXAMPLE_IUI',
    component: <SELECT_DEFAULT_EXAMPLE_IUI />
  },
  {
    path: 'BUTTON_IUI',
    component: <BUTTON_IUI />
  },
  {
    path: 'BUTTON_MUI',
    component: <BUTTON_MUI />
  },
  {
    path: 'BUTTON_X100_IUI',
    component: <BUTTON_IUI count={100} />
  },
  {
    path: 'BUTTON_X100_MUI',
    component: <BUTTON_MUI count={100} />
  },
  {
    path: 'BUTTON_PRIMARY_SMALL_IUI',
    component: <BUTTON_PRIMARY_SMALL_IUI />
  },
  {
    path: 'BUTTON_PRIMARY_SMALL_MUI',
    component: <BUTTON_PRIMARY_SMALL_MUI />
  },
  {
    path: 'BUTTON_ICON_IUI',
    component: <BUTTON_ICON_IUI />
  },
  {
    path: 'BUTTON_ICON_MUI',
    component: <BUTTON_ICON_MUI />
  },
  {
    path: 'ICONBUTTON_IUI',
    component: <ICONBUTTON_IUI />
  },
  {
    path: 'ICONBUTTON_MUI',
    component: <ICONBUTTON_MUI />
  },
  {
    path: 'ICON_IUI',
    component: <ICON_IUI />
  },
  {
    path: 'ICON_MUI',
    component: <ICON_MUI />
  },
  {
    path: 'ICON_X100_IUI',
    component: <ICON_X100_IUI />
  },
  {
    path: 'ICON_X100_MUI',
    component: <ICON_X100_MUI />
  },
  {
    path: 'SIMPLESELECT_IUI',
    component: <SIMPLESELECT_IUI />
  },
  {
    path: 'SIMPLESELECT_MUI',
    component: <SIMPLESELECT_MUI />
  },
  {
    path: 'SIMPLESELECT_X100_IUI',
    component: <SIMPLESELECT_X100_IUI />
  },
  {
    path: 'SIMPLESELECT_X100_MUI',
    component: <SIMPLESELECT_X100_MUI />
  },
  {
    path: 'VIEW_IUI',
    component: <VIEW_IUI />
  },
  {
    path: 'VIEW_X100_IUI',
    component: <VIEW_X100_IUI />
  },
  {
    path: 'LINK_IUI',
    component: <LINK_IUI />
  },
  {
    path: 'LINK_MUI',
    component: <LINK_MUI />
  },
  {
    path: 'LINK_X100_IUI',
    component: <LINK_X100_IUI />
  },
  {
    path: 'LINK_X100_MUI',
    component: <LINK_X100_MUI />
  },
  {
    path: 'FLEX_IUI',
    component: <FLEX_IUI />
  },
  {
    path: 'FLEX_MUI',
    component: <FLEX_MUI />
  },
  {
    path: 'FLEX_X100_IUI',
    component: <FLEX_X100_IUI />
  },
  {
    path: 'FLEX_X100_MUI',
    component: <FLEX_X100_MUI />
  }
]

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/statistics">
            <Statistics />
          </Route>
          {routes.map(route => (
            <Route key={route.path} path={`/${route.path}`}>
              <Metric>
                {route.component}
              </Metric>
            </Route>
          ))}
          <Route path="/">
            <Setup routes={routes} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
