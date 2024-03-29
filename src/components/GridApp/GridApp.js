import './GridApp.css';
// contains all the sentences in the view
import textData from '../../data.json';
import GridRow from '../GirdRow/GridRow';

function GridApp() {
    return (
        <article className="grid-container">
            {textData.texts.map((text) => {
                return <GridRow key={text} text={text} />;
            })}
        </article>
    );
}

export default GridApp;
