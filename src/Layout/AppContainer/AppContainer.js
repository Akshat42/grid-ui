import './AppContainer.css';

// main App Container
function AppContainer(props) {
    return <div className="app-container">{props.children}</div>;
}

export default AppContainer;
