import { useState } from 'react';
import BorderContainer from '../../Layout/BorderContainer/BorderContainer';
import AppButton from '../AppButton/AppButton';
import AppInput from '../AppInput/AppInput';
import TextContainer from '../TextContainer/TextContainer';
import './GridRow.css';

function GridRow({ text }) {
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isUnderlined, setIsUnderlined] = useState(false);
    const [fontSize, setFontSize] = useState(15);
    const [color, setColor] = useState('black');
    let customClass = '';

    customClass = [
        `${isBold ? 'bold' : ''}`,
        `${isItalic ? 'italic' : ''}`,
        `${isUnderlined ? 'underline' : ''}`,
    ].join(' ');

    return (
        <div className="grid-row">
            <BorderContainer>
                <AppButton text="Bold" handleClick={handleClick} />
                <AppButton text="Italic" handleClick={handleClick} />
                <AppButton text="Underline" handleClick={handleClick} />
                <AppInput
                    type="number"
                    placeholder="FontSize"
                    handleOnChange={handleOnChange}
                    value={fontSize}
                />
                <AppInput
                    type="text"
                    placeholder="Color"
                    handleOnChange={handleOnChange}
                    value={color}
                />
            </BorderContainer>
            <BorderContainer>
                <TextContainer
                    text={text}
                    fontSize={fontSize}
                    color={color}
                    customClass={customClass}
                />
            </BorderContainer>
        </div>
    );

    // handles click event for Bold, Italic & Underline
    function handleClick(value) {
        switch (value) {
            case 'Bold':
                setIsBold((prevIsBold) => !prevIsBold);
                break;
            case 'Italic':
                setIsItalic((prevIsItalic) => !prevIsItalic);
                break;
            case 'Underline':
                setIsUnderlined((prevIsUnderlined) => !prevIsUnderlined);
                break;
            default:
                throw new Error('invalid click');
        }
    }

    // handles change event for font-size & color properties
    function handleOnChange(event) {
        switch (event.target.name) {
            case 'FontSize':
                setFontSize(event.target.value);
                break;
            case 'Color':
                setColor(event.target.value);
                break;
            default:
                throw new Error('Invalid input name');
        }
    }
}

export default GridRow;
