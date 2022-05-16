import './TextContainer.css';

function TextContainer({ customClass, fontSize, color, text }) {
    return (
        <div
            className={customClass}
            style={{ fontSize: `${fontSize}px`, color: `${color}` }}
        >
            {text}
        </div>
    );
}

export default TextContainer;
