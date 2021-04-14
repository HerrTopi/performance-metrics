import { AppNav } from '@instructure/ui'

const APPNAV_IUI = () => {
  return (
    <AppNav
      screenReaderLabel="App navigation"
      visibleItemsCount={3}
      renderTruncateLabel={() => '2 More'}
    >
      <AppNav.Item
        renderLabel="instructure-ui"
        href="http://instructure.design"
      />
      <AppNav.Item
        isSelected
        renderLabel="Canvas"
        href="https://www.instructure.com/canvas/"
      />
      <AppNav.Item
        renderLabel="Canvas Network"
        href="https://canvas.net"
      />
      <AppNav.Item
        renderLabel={() => 'Canvas Community'}
        href="https://community.canvaslms.com/"
      />
      <AppNav.Item
        renderLabel="Bridge"
        href="https://www.instructure.com/bridge/"
      />
    </AppNav>
  )
}

export default APPNAV_IUI