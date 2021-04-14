import { Button } from '@instructure/ui'
import ComponentMultiplyer from './ComponentMultiplyer'

const BUTTON_X100_IUI = ({ count = 1 }) => {
    return (
        <ComponentMultiplyer Component={<Button>asd</Button>} count={count} />
    )
}

export default BUTTON_X100_IUI