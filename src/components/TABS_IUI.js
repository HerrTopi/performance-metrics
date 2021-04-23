import { Tabs } from '@instructure/ui'

const TABS_IUI = () => {

  return (
    <Tabs>
      <Tabs.Panel renderTitle="First Tab" isSelected>
        Tab content 1
      </Tabs.Panel>
      <Tabs.Panel renderTitle="Disabled Tab" isDisabled>
        Tab content 2
      </Tabs.Panel>
      <Tabs.Panel renderTitle="Third Tab">
        Tab content 3
      </Tabs.Panel>
      <Tabs.Panel renderTitle="Fourth Tab">
        Tab content 4
      </Tabs.Panel>
    </Tabs>
  )

}

export default TABS_IUI
