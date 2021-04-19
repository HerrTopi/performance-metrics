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
import BADGE_IUI from './components/BADGE_IUI'
import BADGE_WITH_COUNT_IUI from './components/BADGE_WITH_COUNT_IUI'
import BILLBOARD_IUI from './components/BILLBOARD_IUI'
import BREADCRUMB_IUI from './components/BREADCRUMB_IUI'
import BUTTON_IUI from './components/BUTTON_IUI'
import BUTTON_MUI from './components/BUTTON_MUI'
import BUTTON_ICON_IUI from './components/BUTTON_ICON_IUI'
import BUTTON_ICON_MUI from './components/BUTTON_ICON_MUI'
import BUTTON_PRIMARY_SMALL_IUI from './components/BUTTON_PRIMARY_SMALL_IUI'
import BUTTON_PRIMARY_SMALL_MUI from './components/BUTTON_PRIMARY_SMALL_MUI'
import BYLINE_IUI from './components/BYLINE_IUI'
import CHECKBOX_IUI from './components/CHECKBOX_IUI'
import CHECKBOX_TOGGLE_IUI from './components/CHECKBOX_TOGGLE_IUI'
import CHECKBOXGROUP_IUI from './components/CHECKBOXGROUP_IUI'
import CLOSEBUTTON_IUI from './components/CLOSEBUTTON_IUI'
import CODEEDITOR_IUI from './components/CODEEDITOR_IUI'
import CONDENSEDBUTTON_IUI from './components/CONDENSEDBUTTON_IUI'
import CONTEXTVIEW_IUI from './components/CONTEXTVIEW_IUI'
import DRAWERLAYOUT_IUI from './components/DRAWERLAYOUT_IUI'
import FILEDROP_IUI from './components/FILEDROP_IUI'
import FLEX_IUI from './components/FLEX_IUI'
import FLEX_MUI from './components/FLEX_MUI'
import FORMFIELD_IUI from './components/FORMFIELD_IUI'
import FORMFIELDGROUP_IUI from './components/FORMFIELDGROUP_IUI'
import GRID_IUI from './components/GRID_IUI'
import HEADING_IUI from './components/HEADING_IUI'
import ICON_IUI from './components/ICON_IUI'
import ICON_MUI from './components/ICON_MUI'
import ICONBUTTON_IUI from './components/ICONBUTTON_IUI'
import ICONBUTTON_MUI from './components/ICONBUTTON_MUI'
import IMG_IUI from './components/IMG_IUI'
import INLINELIST_IUI from './components/INLINELIST_IUI'
import LINK_IUI from './components/LINK_IUI'
import LINK_MUI from './components/LINK_MUI'
import SELECT_DEFAULT_EXAMPLE_IUI from './components/SELECT_DEFAULT_EXAMPLE_IUI'
import SIMPLESELECT_IUI from './components/SIMPLESELECT_IUI'
import SIMPLESELECT_MUI from './components/SIMPLESELECT_MUI'
import VIEW_IUI from './components/VIEW_IUI'
import VIEW_WITH_SHADOW_IUI from './components/VIEW_WITH_SHADOW_IUI'
import INPLACEEDIT_IUI from "./components/INPLACEEDIT_IUI";

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
    path: 'BADGE_IUI',
    component: <BADGE_IUI />,
    count: 1
  },
  {
    path: 'BADGE_IUI_X100',
    component: <BADGE_IUI />,
    count: 100
  },
  {
    path: 'BADGE_WITH_COUNT_IUI',
    component: <BADGE_WITH_COUNT_IUI />,
    count: 1
  },
  {
    path: 'BADGE_WITH_COUNT_IUI_X100',
    component: <BADGE_WITH_COUNT_IUI />,
    count: 100
  },
  {
    path: 'BILLBOARD_IUI',
    component: <BILLBOARD_IUI />,
    count: 1
  },
  {
    path: 'BREADCRUMB_IUI',
    component: <BREADCRUMB_IUI />,
    count: 1
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
    path: 'BYLINE_IUI',
    component: <BYLINE_IUI />
  },
  {
    path: 'BYLINE_IUI_X100',
    component: <BYLINE_IUI />,
    count: 100
  },
  {
    path: 'CHECKBOX_IUI',
    component: <CHECKBOX_IUI />
  },
  {
    path: 'CHECKBOX_IUI_X100',
    component: <CHECKBOX_IUI />,
    count: 100
  },
  {
    path: 'CHECKBOX_TOGGLE_IUI',
    component: <CHECKBOX_TOGGLE_IUI />
  },
  {
    path: 'CHECKBOX_TOGGLE_IUI_X100',
    component: <CHECKBOX_TOGGLE_IUI />,
    count: 100
  },
  {
    path: 'CHECKBOXGROUP_IUI',
    component: <CHECKBOXGROUP_IUI />,
    count: 1
  },
  {
    path: 'CLOSEBUTTON_IUI',
    component: <CLOSEBUTTON_IUI />,
    count: 1
  },
  {
    path: 'CLOSEBUTTON_IUI_X100',
    component: <CLOSEBUTTON_IUI />,
    count: 100
  },
  {
    path: 'CODEEDITOR_IUI',
    component: <CODEEDITOR_IUI />,
    count: 1
  },
  // 100 crashes the browser, lol
  // {
  //   path: 'CODEEDITOR_IUI_X100',
  //   component: <CODEEDITOR_IUI />,
  //   count: 100
  // },
  {
    path: 'CONDENSEDBUTTON_IUI',
    component: <CONDENSEDBUTTON_IUI />,
    count: 1
  },
  {
    path: 'CONDENSEDBUTTON_IUI_X100',
    component: <CONDENSEDBUTTON_IUI />,
    count: 100
  },
  {
    path: 'CONTEXTVIEW_IUI',
    component: <CONTEXTVIEW_IUI />,
    count: 1
  },
  {
    path: 'CONTEXTVIEW_IUI_X100',
    component: <CONTEXTVIEW_IUI />,
    count: 100
  },
  {
    path: 'DRAWERLAYOUT_IUI',
    component: <DRAWERLAYOUT_IUI />,
  },
  {
    path: 'FILEDROP_IUI',
    component: <FILEDROP_IUI />,
  },
  {
    path: 'FORMFIELD_IUI',
    component: <FORMFIELD_IUI />,
    count: 1
  },
  {
    path: 'FORMFIELD_IUI_X100',
    component: <FORMFIELD_IUI />,
    count: 100
  },
  {
    path: 'FORMFIELDGROUP_IUI',
    component: <FORMFIELDGROUP_IUI />,
    count: 1
  },
  {
    path: 'FORMFIELDGROUP_IUI_X100',
    component: <FORMFIELDGROUP_IUI />,
    count: 100
  },
  {
    path: 'GRID_IUI',
    component: <GRID_IUI />,
    count: 1
  },
  {
    path: 'GRID_IUI_X100',
    component: <GRID_IUI />,
    count: 100
  },
  {
    path: 'HEADING_IUI',
    component: <HEADING_IUI />,
    count: 1
  },
  {
    path: 'HEADING_IUI_X100',
    component: <HEADING_IUI />,
    count: 100
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
    path: 'IMG_IUI',
    component: <IMG_IUI />,
    count: 1
  },
  {
    path: 'IMG_IUI_X100',
    component: <IMG_IUI />,
    count: 100
  },
  {
    path: 'INLINELIST_IUI',
    component: <INLINELIST_IUI />,
    count: 1
  },
  {
    path: 'INLINELIST_IUI_X100',
    component: <INLINELIST_IUI />,
    count: 100
  },
  {
    path: 'INPLACEEDIT_IUI',
    component: <INPLACEEDIT_IUI />,
    count: 1
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
