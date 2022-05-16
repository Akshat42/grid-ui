import './App.css';
import AppContainer from './Layout/AppContainer/AppContainer';
import GridApp from './components/GridApp/GridApp';

function App() {
    return (
        <div className="App">
            <AppContainer>
                <GridApp />
            </AppContainer>
        </div>
    );
}

export default App;
