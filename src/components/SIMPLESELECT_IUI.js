import { SimpleSelect } from '@instructure/ui-simple-select';

const SIMPLESELECT_IUI = () => {
    return (
        <SimpleSelect>
            <SimpleSelect.Option id="a1" value="a1">
                a1
            </SimpleSelect.Option>
            <SimpleSelect.Option id="a2" value="a2">
                a2
            </SimpleSelect.Option>
            <SimpleSelect.Option id="a3" value="a3">
                a3
            </SimpleSelect.Option>
        </SimpleSelect>
    )
}

export default SIMPLESELECT_IUI