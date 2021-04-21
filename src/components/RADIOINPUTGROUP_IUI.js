import { RadioInputGroup, RadioInput } from '@instructure/ui'

const RADIOINPUTGROUP_IUI = () => {

  const inputs = [
    {value: 'foo', label: 'Radio option one' },
    {value: 'bar', label: 'Radio option two' },
    {value: 'baz', label: 'Radio option three' }
  ]

  return (
      <RadioInputGroup onChange={() =>{}} name="example1" defaultValue="foo" description="Select something">
        {inputs.map(input => <RadioInput key={input.value} value={input.value} label={input.label} />)}
      </RadioInputGroup>
  )

}

export default RADIOINPUTGROUP_IUI
