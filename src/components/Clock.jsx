import { format } from 'date-fns'

export default function Clock({ date, color, onColorChange, ...props }) {
    return (
        <>
            <div>
                <label htmlFor="colorPicker">Color: </label>
                <input type="color" id="colorPicker" onChange={ onColorChange } />
            </div>
            <hr />
            <p className="clock" style={ { color: color } }>{ format(date, 'MM/dd/yyyy HH:mm:ss.SSS') }</p >
        </>
    )
}