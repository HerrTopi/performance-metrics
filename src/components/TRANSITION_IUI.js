import { Transition } from '@instructure/ui'

const TRANSITION_IUI = () => {

    return (
        <Transition transitionOnMount in type="fade">
            <div>Fade</div>
        </Transition>
    )
}

export default TRANSITION_IUI