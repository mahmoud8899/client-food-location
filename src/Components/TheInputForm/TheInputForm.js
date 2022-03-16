import { Form } from 'react-bootstrap'

export default function TheInputForm(props) {

    const {
        type,
        autoComplete,
        placeholder,
        onChange,
        value,
        className,
        onKeyPress,
        FirstIcons,
        as,
        ows,
    } = props




    return <div className='Input-Handle-icons'>
        <Form.Control
            type={type}
            autoComplete={autoComplete}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={className}
            onKeyPress={onKeyPress}
            as={as}
            ows={ows}

        />
        {FirstIcons ? FirstIcons : null}

    </div>
}