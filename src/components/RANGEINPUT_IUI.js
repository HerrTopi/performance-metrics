import { RangeInput } from '@instructure/ui'

const RANGEINPUT_IUI = () => {

  return (
      <RangeInput label="Grading range" defaultValue={30} max={100} min={0} />
  )

}

export default RANGEINPUT_IUI
