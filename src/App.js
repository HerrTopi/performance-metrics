import Metric from './Metric'
import Setup from './Setup'
import Statistics from './Statistics'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RenderComponent from './RenderComponent'

import ALERT_IUI from './components/ALERT_IUI'
import APPNAV_IUI from './components/APPNAV_IUI'
import AVATAR_IUI from './components/AVATAR_IUI'
import AVATAR_IMG_IUI from './components/AVATAR_IMG_IUI'
import BUTTON_IUI from './components/BUTTON_IUI'
import BUTTON_MUI from './components/BUTTON_MUI'
import BUTTON_ICON_IUI from './components/BUTTON_ICON_IUI'
import BUTTON_ICON_MUI from './components/BUTTON_ICON_MUI'
import BUTTON_PRIMARY_SMALL_IUI from './components/BUTTON_PRIMARY_SMALL_IUI'
import BUTTON_PRIMARY_SMALL_MUI from './components/BUTTON_PRIMARY_SMALL_MUI'
import FLEX_IUI from './components/FLEX_IUI'
import FLEX_MUI from './components/FLEX_MUI'
import ICON_IUI from './components/ICON_IUI'
import ICON_MUI from './components/ICON_MUI'
import ICONBUTTON_IUI from './components/ICONBUTTON_IUI'
import ICONBUTTON_MUI from './components/ICONBUTTON_MUI'
import LINK_IUI from './components/LINK_IUI'
import LINK_MUI from './components/LINK_MUI'
import SELECT_DEFAULT_EXAMPLE_IUI from './components/SELECT_DEFAULT_EXAMPLE_IUI'
import SIMPLESELECT_IUI from './components/SIMPLESELECT_IUI'
import SIMPLESELECT_MUI from './components/SIMPLESELECT_MUI'
import VIEW_IUI from './components/VIEW_IUI'
import VIEW_WITH_SHADOW_IUI from './components/VIEW_WITH_SHADOW_IUI'

/*
  const output = []

  for(i=0;i<100;i++){
    output.push(`<Box>Item ${i}</Box>`)
  }
  window.copy(output.join("\n"))
*/

const routes = [
  {
    path: 'ALERT_IUI',
    component: <ALERT_IUI />,
    count: 1
  },
  {
    path: 'ALERT_IUI_X100',
    component: <ALERT_IUI />,
    count: 100
  },
  {
    path: 'APPNAV_IUI',
    component: <APPNAV_IUI />,
    count: 1
  },
  {
    path: 'AVATAR_IUI',
    component: <AVATAR_IUI />,
    count: 1
  },
  {
    path: 'AVATAR_IUI_X100',
    component: <AVATAR_IUI />,
    count: 100
  },
  {
    path: 'AVATAR_IMG_IUI',
    component: <AVATAR_IMG_IUI />,
    count: 1
  },
  {
    path: 'AVATAR_IMG_IUI_X100',
    component: <AVATAR_IMG_IUI />,
    count: 100
  },
  {
    path: 'BUTTON_IUI',
    component: <BUTTON_IUI />,
    count: 1
  },
  {
    path: 'BUTTON_MUI',
    component: <BUTTON_MUI />,
    count: 1
  },
  {
    path: 'BUTTON_IUI_X100',
    component: <BUTTON_IUI />,
    count: 100
  },
  {
    path: 'BUTTON_MUI_X100',
    component: <BUTTON_MUI />,
    count: 100
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
    path: 'BUTTON_PRIMARY_SMALL_IUI',
    component: <BUTTON_PRIMARY_SMALL_IUI />
  },
  {
    path: 'BUTTON_PRIMARY_SMALL_MUI',
    component: <BUTTON_PRIMARY_SMALL_MUI />
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
    path: 'FLEX_IUI_X100',
    component: <FLEX_IUI />,
    count: 100
  },
  {
    path: 'FLEX_MUI_X100',
    component: <FLEX_MUI />,
    count: 100
  },
  {
    path: 'ICON_IUI',
    component: <ICON_IUI />,
    count: 1
  },
  {
    path: 'ICON_MUI',
    component: <ICON_MUI />
  },
  {
    path: 'ICON_IUI_X100',
    component: <ICON_IUI />,
    count: 100
  },
  {
    path: 'ICON_MUI_X100',
    component: <ICON_MUI />,
    count: 100
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
    path: 'LINK_IUI',
    component: <LINK_IUI />
  },
  {
    path: 'LINK_MUI',
    component: <LINK_MUI />
  },
  {
    path: 'LINK_IUI_X100',
    component: <LINK_IUI />,
    count: 100
  },
  {
    path: 'LINK_MUI_X100',
    component: <LINK_MUI />,
    count: 100
  },
  {
    path: 'SELECT_DEFAULT_EXAMPLE_IUI',
    component: <SELECT_DEFAULT_EXAMPLE_IUI />
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
    path: 'SIMPLESELECT_IUI_X100',
    component: <SIMPLESELECT_IUI />,
    count: 100
  },
  {
    path: 'SIMPLESELECT_MUI_X100',
    component: <SIMPLESELECT_MUI />,
    count: 100
  },
  {
    path: 'VIEW_IUI',
    component: <VIEW_IUI />
  },
  {
    path: 'VIEW_IUI_X100',
    component: <VIEW_IUI />,
    count: 100
  },
  {
    path: 'VIEW_WITH_SHADOW_IUI',
    component: <VIEW_WITH_SHADOW_IUI />
  },
  {
    path: 'VIEW_WITH_SHADOW_IUI_X100',
    component: <VIEW_WITH_SHADOW_IUI />,
    count: 100
  },
]
const paths = routes.map(({ path }) => path)

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/statistics">
            <Statistics paths={paths} />
          </Route>
          {routes.map(({ path, component, count = 1 }) => (
            <Route key={path} path={`/${path}`}>
              <Metric paths={paths}>
                <RenderComponent count={count}>{component}</RenderComponent>
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
