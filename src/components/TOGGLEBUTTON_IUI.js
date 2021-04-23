import { ToggleButton } from '@instructure/ui'

const TOGGLEBUTTON_IUI = () => {

  return (
      <ToggleButton
          status={'unpressed'}
          renderIcon={<span>icon</span>}
          screenReaderLabel={'Lock assignment'}
          renderTooltipContent={'Lock'}
      />
  )

}

export default TOGGLEBUTTON_IUI
