import { InPlaceEdit } from '@instructure/ui'

const INPLACEEDIT_IUI = () => {

  const state = {
    mode: 'view',
    value: 'This is some text',
    inline: true
  }

  const handleChangeMode = (mode) => {}

  const renderView = () => (
    <span>{state.value}</span>
  )

  const renderEdit = ({onBlur, editorRef}) => (
    <input type="text" value={state.value} />
  )

  const renderEditButton = (props) => {
    props.label = `Edit title "${state.value}"`
    return InPlaceEdit.renderDefaultEditButton(props)
  }

  return (
    <InPlaceEdit
      renderViewer={renderView}
      renderEditor={renderEdit}
      renderEditButton={renderEditButton}
      onChangeMode={handleChangeMode}
      mode={state.mode}
      value={state.value}
    />
  )
}

export default INPLACEEDIT_IUI
