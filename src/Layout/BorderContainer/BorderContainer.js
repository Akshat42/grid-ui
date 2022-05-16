import './BorderContainer.css';

// General Layoyt for elements with Border
function BorderContainer(props) {
    return <div className="border-container">{props.children}</div>;
}

export default BorderContainer;
