import { Input } from "../ui/input";

function commonForm(formControls) {

    function renderInputsComponentType(getControlItem) {
        let element = null;
        switch (getControlItem.controlType) {
            case "input":
                element = <Input type={getControlItem.type} name={getControlItem.name} placeholder={getControlItem.placeholder} required={getControlItem.required} />;
                break;
            case "password":
                element = <Input type={getControlItem.type} name={getControlItem.name} placeholder={getControlItem.placeholder} required={getControlItem.required} />;
                break;
            default:
                element = null;
                break;
        }
        return element;
    }
    return (
        <form>

        </form>
    )
}

export default commonForm