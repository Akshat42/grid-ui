// Custom HTML Button element
function AppButton({ type, text, handleClick }) {
    function handleGenericClick(event) {
        handleClick(event.target.value);
    }
    return (
        <button type={type} onClick={handleGenericClick} value={text}>
            {text}
        </button>
    );
}

export default AppButton;
