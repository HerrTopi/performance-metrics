import { Options, IconCheckSolid, IconArrowOpenEndSolid } from '@instructure/ui'

const OPTIONS_FORM_MENU_IUI = () => {

  return (
    <div style={{ width: "200px" }}>
      <Options>
        <Options.Item>Learning Mastery</Options.Item>
        <Options.Item href="https://instructure.github.io/instructure-ui/">Default (Grid view)</Options.Item>
        <Options.Item variant="disabled">Individual (List view)</Options.Item>
        <Options.Item renderAfterLabel={IconArrowOpenEndSolid}>More Options</Options.Item>
        <Options.Separator />
        <Options.Item themeOverride={{fontWeight: 700}}>Select One</Options.Item>
        <Options.Item renderBeforeLabel={IconCheckSolid}>Item 1</Options.Item>
        <Options.Item renderBeforeLabel={
          <IconCheckSolid style={{opacity: 0}} />
        }>Item 2</Options.Item>
        <Options.Separator />
        <Options.Item>Open grading history...</Options.Item>
      </Options>
    </div>
  )
}

export default OPTIONS_FORM_MENU_IUI