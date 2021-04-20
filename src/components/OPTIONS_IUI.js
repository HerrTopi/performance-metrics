import { Options } from '@instructure/ui'

const OPTIONS_IUI = () => {

  return (
    <Options>
      <Options.Item onClick={() => console.log('clicked!')}>
        Default option
      </Options.Item>
      <Options.Item variant="highlighted">
        Highlighted option
      </Options.Item>
      <Options.Item variant="selected">
        Selected option
      </Options.Item>
      <Options.Item variant="disabled">
        Disabled option
      </Options.Item>
    </Options>
  )
}

export default OPTIONS_IUI