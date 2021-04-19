import { Badge } from '@instructure/ui'

const BADGE_WITH_COUNT_IUI = () => {
    return (
        <Badge count={105} countUntil={100}>
            <button>Lorem Ipsum</button>
        </Badge>
    )
}

export default BADGE_WITH_COUNT_IUI