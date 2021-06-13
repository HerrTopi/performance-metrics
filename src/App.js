import Metric from './Metric'
import Setup from './Setup'
import Statistics from './Statistics'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import RenderComponent from './RenderComponent'

import ACCESSIBLECONTENT_IUI from './components/ACCESSIBLECONTENT_IUI'
import ALERT_IUI from './components/ALERT_IUI'
import APPLYLOCALE_IUI from './components/APPLYLOCALE_IUI'
import APPLYTEXTDIRECTION_IUI from './components/APPLYTEXTDIRECTION_IUI'
import APPNAV_IUI from './components/APPNAV_IUI'
import AVATAR_IUI from './components/AVATAR_IUI'
import AVATAR_IMG_IUI from './components/AVATAR_IMG_IUI'
import BADGE_IUI from './components/BADGE_IUI'
import BADGE_WITH_COUNT_IUI from './components/BADGE_WITH_COUNT_IUI'
import BASEBUTTON_IUI from './components/BASEBUTTON_IUI'
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
import DIALOG_IUI from './components/DIALOG_IUI'
import DRAWERLAYOUT_IUI from './components/DRAWERLAYOUT_IUI'
import EMOTIONTHEMEPROVIDER_IUI from './components/EMOTIONTHEMEPROVIDER_IUI'
import EMOTIONTHEMEPROVIDER_WITH_TEXT_IUI from './components/EMOTIONTHEMEPROVIDER_WITH_TEXT_IUI'
import EXPANDABLE_IUI from './components/EXPANDABLE_IUI'
import FILEDROP_IUI from './components/FILEDROP_IUI'
import FLEX_IUI from './components/FLEX_IUI'
import FLEX_MUI from './components/FLEX_MUI'
import FOCUSABLE_IUI from './components/FOCUSABLE_IUI'
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
import INLINESVG_IUI from './components/INLINESVG_IUI'
import INPLACEEDIT_IUI from './components/INPLACEEDIT_IUI'
import LINK_IUI from './components/LINK_IUI'
import LINK_MUI from './components/LINK_MUI'
import LINK_WITH_ICON_IUI from './components/LINK_WITH_ICON_IUI'
import LIST_IUI from './components/LIST_IUI'
import MASK_IUI from './components/MASK_IUI'
import MENU_IUI from './components/MENU_IUI'
import METRIC_IUI from './components/METRIC_IUI'
import METRICGROUP_IUI from './components/METRICGROUP_IUI'
import MODAL_IUI from './components/MODAL_IUI'
import NAVIGATION_IUI from './components/NAVIGATION_IUI'
import NUMBERINPUT_IUI from './components/NUMBERINPUT_IUI'
import OPTIONS_IUI from './components/OPTIONS_IUI'
import OPTIONS_FORM_MENU_IUI from './components/OPTIONS_FORM_MENU_IUI'
import OVERLAY_IUI from './components/OVERLAY_IUI'
import PAGES_IUI from './components/PAGES_IUI'
import PAGINATION_IUI from './components/PAGINATION_IUI'
import PILL_IUI from './components/PILL_IUI'
import POPOVER_IUI from './components/POPOVER_IUI'
import PORTAL_IUI from './components/PORTAL_IUI'
import POSITION_IUI from './components/POSITION_IUI'
import PRESENTATIONCONTENT_IUI from './components/PRESENTATIONCONTENT_IUI'
import PROGRESSBAR_IUI from './components/PROGRESSBAR_IUI'
import PROGRESSCIRCLE_IUI from './components/PROGRESSCIRCLE_IUI'
import RADIOINPUT_IUI from './components/RADIOINPUT_IUI'
import RADIOINPUT_TOGGLE_IUI from './components/RADIOINPUT_TOGGLE_IUI'
import RADIOINPUTGROUP_IUI from './components/RADIOINPUTGROUP_IUI'
import RADIOINPUTGROUP_TOGGLE_IUI from './components/RADIOINPUTGROUP_TOGGLE_IUI'
import RANGEINPUT_IUI from './components/RANGEINPUT_IUI'
import RATING_IUI from './components/RATING_IUI'
import RESPONSIVE_IUI from './components/RESPONSIVE_IUI'
import SCREENREADERCONTENT_IUI from './components/SCREENREADERCONTENT_IUI'
import SELECT_IUI from './components/SELECT_IUI'
import SELECTABLE_IUI from './components/SELECTABLE_IUI'
import SIMPLESELECT_IUI from './components/SIMPLESELECT_IUI'
import SIMPLESELECT_MUI from './components/SIMPLESELECT_MUI'
import SPINNER_IUI from './components/SPINNER_IUI'
import SVGICON_IUI from './components/SVGICON_IUI'
import TABLE_IUI from './components/TABLE_IUI'
import TABS_IUI from './components/TABS_IUI'
import TAG_IUI from './components/TAG_IUI'
import TAG_DISMISSIBLE_IUI from './components/TAG_DISMISSIBLE_IUI'
import TEXT_IUI from './components/TEXT_IUI'
import TEXT_STYLED_IUI from './components/TEXT_STYLED_IUI'
import TEXTAREA_IUI from './components/TEXTAREA_IUI'
import TEXTINPUT_IUI from './components/TEXTINPUT_IUI'
import TIMESELECT_IUI from './components/TIMESELECT_IUI'
import TOGGLEBUTTON_IUI from './components/TOGGLEBUTTON_IUI'
import TOGGLEDETAILS_IUI from './components/TOGGLEDETAILS_IUI'
import TOGGLEDETAILS_FILLED_IUI from './components/TOGGLEDETAILS_FILLED_IUI'
import TOGGLEGROUP_IUI from './components/TOGGLEGROUP_IUI'
import TOOLTIP_IUI from './components/TOOLTIP_IUI'
import TRANSITION_IUI from './components/TRANSITION_IUI'
import TRAY_IUI from './components/TRAY_IUI'
import TREEBROWSER_IUI from './components/TREEBROWSER_IUI'
import TRUNCATETEXT_IUI from './components/TRUNCATETEXT_IUI'
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
    path: 'ACCESSIBLECONTENT_IUI',
    component: <ACCESSIBLECONTENT_IUI />,
    count: 1
  },
  {
    path: 'ACCESSIBLECONTENT_IUI_X100',
    component: <ACCESSIBLECONTENT_IUI />,
    count: 100
  },
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
    path: 'APPLYLOCALE_IUI',
    component: <APPLYLOCALE_IUI />,
  },
  {
    path: 'APPNAV_IUI',
    component: <APPNAV_IUI />,
    count: 1
  },
  {
    path: 'APPLYTEXTDIRECTION_IUI',
    component: <APPLYTEXTDIRECTION_IUI />,
    count: 1
  },
  {
    path: 'APPLYTEXTDIRECTION_IUI_X100',
    component: <APPLYTEXTDIRECTION_IUI />,
    count: 100
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
    path: 'BASEBUTTON_IUI',
    component: <BASEBUTTON_IUI />,
    count: 1
  },
  {
    path: 'BASEBUTTON_IUI_X100',
    component: <BASEBUTTON_IUI />,
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
    path: 'DIALOG_IUI',
    component: <DIALOG_IUI />,
    count: 1
  },
  {
    path: 'DIALOG_IUI_X100',
    component: <DIALOG_IUI />,
    count: 100
  },
  {
    path: 'DRAWERLAYOUT_IUI',
    component: <DRAWERLAYOUT_IUI />,
  },
  {
    path: 'EMOTIONTHEMEPROVIDER_IUI',
    component: <EMOTIONTHEMEPROVIDER_IUI />,
  },
  {
    path: 'EMOTIONTHEMEPROVIDER_IUI_X100',
    component: <EMOTIONTHEMEPROVIDER_IUI />,
    count: 100
  },
  {
    path: 'EMOTIONTHEMEPROVIDER_WITH_TEXT_IUI',
    component: <EMOTIONTHEMEPROVIDER_WITH_TEXT_IUI />,
  },
  {
    path: 'EMOTIONTHEMEPROVIDER_WITH_TEXT_IUI_X100',
    component: <EMOTIONTHEMEPROVIDER_WITH_TEXT_IUI />,
    count: 100
  },
  {
    path: 'EXPANDABLE_IUI',
    component: <EXPANDABLE_IUI />,
  },
  {
    path: 'EXPANDABLE_IUI_X100',
    component: <EXPANDABLE_IUI />,
    count: 100
  },
  {
    path: 'FOCUSABLE_IUI',
    component: <FOCUSABLE_IUI />,
  },
  {
    path: 'FOCUSABLE_IUI_X100',
    component: <FOCUSABLE_IUI />,
    count: 100
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
    path: 'INLINESVG_IUI',
    component: <INLINESVG_IUI />,
    count: 1
  },
  {
    path: 'INLINESVG_IUI_X100',
    component: <INLINESVG_IUI />,
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
    path: 'LINK_WITH_ICON_IUI',
    component: <LINK_WITH_ICON_IUI />,
    count: 1
  },
  {
    path: 'LINK_WITH_ICON_IUI_X100',
    component: <LINK_WITH_ICON_IUI />,
    count: 100
  },
  {
    path: 'LIST_IUI',
    component: <LIST_IUI />,
    count: 1
  },
  {
    path: 'LIST_IUI_X100',
    component: <LIST_IUI />,
    count: 100
  },
  {
    path: 'MASK_IUI',
    component: <MASK_IUI />,
    count: 1
  },
  {
    path: 'MASK_IUI_X100',
    component: <MASK_IUI />,
    count: 100
  },
  {
    path: 'MENU_IUI',
    component: <MENU_IUI />,
  },
  {
    path: 'METRIC_IUI',
    component: <METRIC_IUI />,
    count: 1
  },
  {
    path: 'METRIC_IUI_X100',
    component: <METRIC_IUI />,
    count: 100
  },
  {
    path: 'METRICGROUP_IUI',
    component: <METRICGROUP_IUI />,
  },
  {
    path: 'MODAL_IUI',
    component: <MODAL_IUI />,
  },
  {
    path: 'NAVIGATION_IUI',
    component: <NAVIGATION_IUI />,
  },
  {
    path: 'NUMBERINPUT_IUI',
    component: <NUMBERINPUT_IUI />,
    count: 1
  },
  {
    path: 'NUMBERINPUT_IUI_X100',
    component: <NUMBERINPUT_IUI />,
    count: 100
  },
  {
    path: 'OPTIONS_IUI',
    component: <OPTIONS_IUI />,
  },
  {
    path: 'OPTIONS_FORM_MENU_IUI',
    component: <OPTIONS_FORM_MENU_IUI />,
  },
  {
    path: 'OVERLAY_IUI',
    component: <OVERLAY_IUI />,
  },
  {
    path: 'PAGES_IUI',
    component: <PAGES_IUI />,
  },
  {
    path: 'PAGINATION_IUI',
    component: <PAGINATION_IUI />,
  },
  {
    path: 'PILL_IUI',
    component: <PILL_IUI />,
  },
  {
    path: 'PILL_IUI_X100',
    component: <PILL_IUI />,
    count: 100
  },
  {
    path: 'POPOVER_IUI',
    component: <POPOVER_IUI />,
  },
  {
    path: 'PORTAL_IUI',
    component: <PORTAL_IUI />,
  },
  {
    path: 'PORTAL_IUI_X100',
    component: <PORTAL_IUI />,
    count: 100
  },
  {
    path: 'POSITION_IUI',
    component: <POSITION_IUI />,
  },
  {
    path: 'POSITION_IUI_X100',
    component: <POSITION_IUI />,
    count: 100
  },
  {
    path: 'PRESENTATIONCONTENT_IUI',
    component: <PRESENTATIONCONTENT_IUI />,
  },
  {
    path: 'PRESENTATIONCONTENT_IUI_X100',
    component: <PRESENTATIONCONTENT_IUI />,
    count: 100
  },
  {
    path: 'PROGRESSBAR_IUI',
    component: <PROGRESSBAR_IUI />,
  },
  {
    path: 'PROGRESSCIRCLE_IUI',
    component: <PROGRESSCIRCLE_IUI />,
  },
  {
    path: 'RADIOINPUT_IUI',
    component: <RADIOINPUT_IUI />,
  },
  {
    path: 'RADIOINPUT_IUI_X100',
    component: <RADIOINPUT_IUI />,
    count: 100
  },
  {
    path: 'RADIOINPUT_TOGGLE_IUI',
    component: <RADIOINPUT_TOGGLE_IUI />,
  },
  {
    path: 'RADIOINPUT_TOGGLE_IUI_X100',
    component: <RADIOINPUT_TOGGLE_IUI />,
    count: 100
  },
  {
    path: 'RADIOINPUTGROUP_IUI',
    component: <RADIOINPUTGROUP_IUI />,
  },
  {
    path: 'RADIOINPUTGROUP_TOGGLE_IUI',
    component: <RADIOINPUTGROUP_TOGGLE_IUI />,
  },
  {
    path: 'RANGEINPUT_IUI',
    component: <RANGEINPUT_IUI />,
  },
  {
    path: 'RATING_IUI',
    component: <RATING_IUI />,
  },
  {
    path: 'RATING_IUI_X100',
    component: <RATING_IUI />,
    count: 100
  },
  {
    path: 'RESPONSIVE_IUI',
    component: <RESPONSIVE_IUI />,
  },
  {
    path: 'RESPONSIVE_IUI_X100',
    component: <RESPONSIVE_IUI />,
    count: 100
  },
  {
    path: 'SCREENREADERCONTENT_IUI',
    component: <SCREENREADERCONTENT_IUI />,
  },
  {
    path: 'SCREENREADERCONTENT_IUI_X100',
    component: <SCREENREADERCONTENT_IUI />,
    count: 100
  },
  {
    path: 'SELECT_IUI',
    component: <SELECT_IUI />
  },
  {
    path: 'SELECTABLE_IUI',
    component: <SELECTABLE_IUI />
  },
  {
    path: 'SELECTABLE_IUI_X100',
    component: <SELECTABLE_IUI />,
    count: 100
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
    path: 'SPINNER_IUI',
    component: <SPINNER_IUI />
  },
  {
    path: 'SPINNER_IUI_X100',
    component: <SPINNER_IUI />,
    count: 100
  },
  {
    path: 'SVGICON_IUI',
    component: <SVGICON_IUI />
  },
  {
    path: 'SVGICON_IUI_X100',
    component: <SVGICON_IUI />,
    count: 100
  },
  {
    path: 'TABLE_IUI',
    component: <TABLE_IUI />
  },
  {
    path: 'TABS_IUI',
    component: <TABS_IUI />
  },
  {
    path: 'TAG_IUI',
    component: <TAG_IUI />
  },
  {
    path: 'TAG_IUI_X100',
    component: <TAG_IUI />,
    count: 100
  },
  {
    path: 'TAG_DISMISSIBLE_IUI',
    component: <TAG_DISMISSIBLE_IUI />
  },
  {
    path: 'TAG_DISMISSIBLE_IUI_X100',
    component: <TAG_DISMISSIBLE_IUI />,
    count: 100
  },
  {
    path: 'TEXT_IUI',
    component: <TEXT_IUI />
  },
  {
    path: 'TEXT_IUI_X100',
    component: <TEXT_IUI />,
    count: 100
  },
  {
    path: 'TEXT_STYLED_IUI',
    component: <TEXT_STYLED_IUI />
  },
  {
    path: 'TEXT_STYLED_IUI_X100',
    component: <TEXT_STYLED_IUI />,
    count: 100
  },
  {
    path: 'TEXTAREA_IUI',
    component: <TEXTAREA_IUI />
  },
  {
    path: 'TEXTAREA_IUI_X100',
    component: <TEXTAREA_IUI />,
    count: 100
  },
  {
    path: 'TEXTINPUT_IUI',
    component: <TEXTINPUT_IUI />
  },
  {
    path: 'TEXTINPUT_IUI_X100',
    component: <TEXTINPUT_IUI />,
    count: 100
  },
  {
    path: 'TIMESELECT_IUI',
    component: <TIMESELECT_IUI />,
  },
  {
    path: 'TOGGLEBUTTON_IUI',
    component: <TOGGLEBUTTON_IUI />
  },
  {
    path: 'TOGGLEBUTTON_IUI_X100',
    component: <TOGGLEBUTTON_IUI />,
    count: 100
  },
  {
    path: 'TOGGLEDETAILS_IUI',
    component: <TOGGLEDETAILS_IUI />
  },
  {
    path: 'TOGGLEDETAILS_IUI_X100',
    component: <TOGGLEDETAILS_IUI />,
    count: 100
  },
  {
    path: 'TOGGLEDETAILS_FILLED_IUI',
    component: <TOGGLEDETAILS_FILLED_IUI />
  },
  {
    path: 'TOGGLEDETAILS_FILLED_IUI_X100',
    component: <TOGGLEDETAILS_FILLED_IUI />,
    count: 100
  },
  {
    path: 'TOGGLEGROUP_IUI',
    component: <TOGGLEGROUP_IUI />
  },
  {
    path: 'TOGGLEGROUP_IUI_X100',
    component: <TOGGLEGROUP_IUI />,
    count: 100
  },
  {
    path: 'TOOLTIP_IUI',
    component: <TOOLTIP_IUI />
  },
  {
    path: 'TOOLTIP_IUI_X100',
    component: <TOOLTIP_IUI />,
    count: 100
  },
  {
    path: 'TRANSITION_IUI',
    component: <TRANSITION_IUI />
  },
  {
    path: 'TRANSITION_IUI_X100',
    component: <TRANSITION_IUI />,
    count: 100
  },
  {
    path: 'TRAY_IUI',
    component: <TRAY_IUI />,
  },
  {
    path: 'TREEBROWSER_IUI',
    component: <TREEBROWSER_IUI />,
  },
  {
    path: 'TRUNCATETEXT_IUI',
    component: <TRUNCATETEXT_IUI />
  },
  {
    path: 'TRUNCATETEXT_IUI_X100',
    component: <TRUNCATETEXT_IUI />,
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
