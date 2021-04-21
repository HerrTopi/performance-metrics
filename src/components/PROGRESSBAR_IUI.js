import { ProgressBar } from '@instructure/ui'

const PROGRESSBAR_IUI = () => {

  return (
    <ProgressBar
      screenReaderLabel="Loading completion"
      valueNow={40}
      valueMax={60}
    />
  )

}

export default PROGRESSBAR_IUI
