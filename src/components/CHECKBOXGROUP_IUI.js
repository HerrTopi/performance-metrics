import { CheckboxGroup, Checkbox } from '@instructure/ui'

const CHECKBOXGROUP_IUI = () => {

  return (
      <CheckboxGroup
        name="sports"
        description="Select your favorite sports"
        onChange={function (value) { console.log(value) }}
        defaultValue={['football', 'volleyball']}
      >
        <Checkbox label="Football" value="football" />
        <Checkbox label="Basketball" value="basketball" />
        <Checkbox label="Volleyball" value="volleyball" />
        <Checkbox label="Other" value="other" />
      </CheckboxGroup>
  )
}

export default CHECKBOXGROUP_IUI