import { DrawerLayout } from '@instructure/ui'

const DRAWERLAYOUT_IUI = () => {

  return (
    <DrawerLayout>
      <DrawerLayout.Tray
          label="Layout Tray"
          open={true}
      >
        Tray
      </DrawerLayout.Tray>
      <DrawerLayout.Content label="Drawer content">
        Content
      </DrawerLayout.Content>
    </DrawerLayout>
  )
}

export default DRAWERLAYOUT_IUI
