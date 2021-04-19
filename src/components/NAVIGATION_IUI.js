import { Navigation, IconAdminLine } from '@instructure/ui'

const NAVIGATION_IUI = () => {

  return (
    <Navigation
      label="Main navigation"
      toggleLabel={{
        expandedLabel: 'Minimize Navigation',
        minimizedLabel: 'Expand Navigation'
      }}
    >
      <Navigation.Item
        icon={<IconAdminLine />}
        label="Home"
        href="#"
      />
      <Navigation.Item
        icon={<IconAdminLine />}
        label="Account"
        onClick={() => {}}
      />
      <Navigation.Item
        icon={<IconAdminLine />}
        label="Admin"
        href="#"
      />
      <Navigation.Item
        selected
        icon={<IconAdminLine />}
        label="Dashboard"
        href="#"
      />
      <Navigation.Item
        icon={<IconAdminLine />}
        label="Inbox"
        href="#"
      />
      <Navigation.Item
        icon={<IconAdminLine />}
        label="Supercalifragilistic"
        href="#"
      />
    </Navigation>
  )
}

export default NAVIGATION_IUI