import { ToggleGroup } from '@instructure/ui'

const TOGGLEGROUP_IUI = () => {

  return (
      <ToggleGroup summary="Click to hide me!" defaultExpanded toggleLabel="This is the toggle button label for screenreaders">
        <div>Text</div>
      </ToggleGroup>
  )

}

export default TOGGLEGROUP_IUI
