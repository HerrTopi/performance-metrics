import { Position } from '@instructure/ui'

const POSITION_IUI = () => {
    return (
        <Position renderTarget={<button>target</button>} placement="end center" offsetX={10}>
          <div>Content</div>
        </Position>
    )
}

export default POSITION_IUI