import './GridApp.css';
import textData from '../../data.json';
import GridRow from '../GirdRow/GridRow';

function GridApp() {
    return (
        <article className="grid-container">
            {textData.texts.map((text) => {
                return <GridRow text={text} />;
            })}
        </article>
    );
}

export default GridApp;
