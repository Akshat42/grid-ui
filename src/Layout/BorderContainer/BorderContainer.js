import './BorderContainer.css';

function BorderContainer(props) {
    return <div className="border-container">{props.children}</div>;
}

export default BorderContainer;
