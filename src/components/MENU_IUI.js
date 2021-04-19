import { Menu } from '@instructure/ui'

const MENU_IUI = () => {
  const state = {
    singleSelection: ['itemOne'],
    multipleSelection: ['optionOne', 'optionThree']
  }

  const handleSingleSelect = (e, newSelected) => {}

  const handleMultipleSelect = (e, newSelected) => {}

  return (
    <Menu>
      <Menu.Item value="mastery">Learning Mastery</Menu.Item>
      <Menu.Item href="https://instructure.github.io/instructure-ui/">Default (Grid view)</Menu.Item>
      <Menu.Item disabled>Individual (List view)</Menu.Item>
      <Menu label="More Options">
        <Menu.Group
          allowMultiple
          label="Select Many"
          selected={state.multipleSelection}
          onSelect={handleMultipleSelect}
        >
          <Menu.Item value="optionOne">
            Option 1
          </Menu.Item>
          <Menu.Item value="optionTwo">
            Option 2
          </Menu.Item>
          <Menu.Item value="optionThree">
            Option 3
          </Menu.Item>
        </Menu.Group>
        <Menu.Separator />
        <Menu.Item value="navigation">Navigation</Menu.Item>
        <Menu.Item value="set">Set as default</Menu.Item>
      </Menu>
      <Menu.Separator />
      <Menu.Group
        label="Select One"
        selected={state.singleSelection}
        onSelect={handleSingleSelect}
      >
        <Menu.Item value="itemOne">
          Item 1
        </Menu.Item>
        <Menu.Item value="itemTwo">
          Item 2
        </Menu.Item>
      </Menu.Group>
      <Menu.Separator />
      <Menu.Item value="baz">Open grading history...</Menu.Item>
    </Menu>
  )
}

export default MENU_IUI