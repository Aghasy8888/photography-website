import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Input = forwardRef(
  (
    {
      autoComplete,
      changeHandler,
      className,
      placeholder = '',
      inputValue,
      required = false,
      name = '',
      type = 'text',
    },
    ref
  ) => {

    return (
      <input
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={changeHandler}
        value={inputValue ? inputValue : ''}
        required={required}
        ref={ref}
        autoComplete={autoComplete}
      />
    );
  }
);

Input.displayName = 'Input';

Input.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  inputValue: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
};

export default Input;
