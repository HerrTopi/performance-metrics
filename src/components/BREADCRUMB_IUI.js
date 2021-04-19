import { Breadcrumb } from '@instructure/ui'

const BREADCRUMB_IUI = () => {
    return (
        <Breadcrumb label="You are here:">
            <Breadcrumb.Link href="https://instructure.github.io/instructure-ui/">English 204</Breadcrumb.Link>
            <Breadcrumb.Link
                onClick={function () {
                    console.log("This Breadcrumb.Link was clicked!")
                }}
            >
                Exploring John Updike
            </Breadcrumb.Link>
            <Breadcrumb.Link href="https://instructure.github.io/instructure-ui/">The Rabbit Novels</Breadcrumb.Link>
            <Breadcrumb.Link>Rabbit Is Rich</Breadcrumb.Link>
        </Breadcrumb>
    )
}

export default BREADCRUMB_IUI