import { Modal } from '@instructure/ui'

const MODAL_IUI = () => {
  return (
    <Modal
      open={true}
      onDismiss={() => {}}
      onSubmit={() => {}}
      size="auto"
      label="Modal Dialog: Hello World"
      shouldCloseOnDocumentClick
    >
      <Modal.Header>
        <h2 style={{margin: 0}}>Hello World</h2>
      </Modal.Header>
      <Modal.Body>
        <p>Lorem Ipsum</p>
      </Modal.Body>
      <Modal.Footer>
        <button>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default MODAL_IUI