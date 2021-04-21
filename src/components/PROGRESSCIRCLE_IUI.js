import { ProgressCircle } from '@instructure/ui'

const PROGRESSCIRCLE_IUI = () => {

  return (
    <ProgressCircle
      screenReaderLabel="Loading completion"
      valueNow={40}
      valueMax={60}
    />
  )

}

export default PROGRESSCIRCLE_IUI
