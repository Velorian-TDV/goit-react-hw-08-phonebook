import PropTypes from 'prop-types'
import { nanoid } from "nanoid";

export default function FormSection({ name, type, pattern, title, placeholder }) {
    return (
        <section key={nanoid()}>
            <input
                type={type}
                name={name}
                id={name}
                pattern={pattern}
                title={title}
                placeholder={placeholder}
                autoComplete='off'
                required
            />
        </section>
    )
}

FormSection.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    pattern: PropTypes.string,
    title: PropTypes.string,
}