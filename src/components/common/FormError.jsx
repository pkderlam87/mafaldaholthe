import PropTypes from "prop-types";
/**
* function to show the error message
*/
export default function ValidationError({ children }) {
    return <div className="form__message--error">{children}</div>;
}

ValidationError.propTypes = {
    children: PropTypes.node.isRequired,
};