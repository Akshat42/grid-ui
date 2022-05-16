import './AppInput.css';

function AppInput({ type, placeholder, handleOnChange, value }) {
    function handleGenericOnChange(event) {
        handleOnChange(event);
    }
    return (
        <input
            className="app-input"
            name={placeholder}
            type={type}
            placeholder={placeholder}
            onChange={handleGenericOnChange}
        />
    );
}
export default AppInput;
