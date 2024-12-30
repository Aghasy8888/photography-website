import PropTypes from 'prop-types';

const DropDownOptions = ({
  isLangDrop,
  options,
  handleOptionChange,
  styles: { optionsClass = '', optionClass = '' },
}) => {
  return (
    <dialog className={optionsClass}>
      {options.map((option) => (
        <div
          key={option.value}
          className={optionClass}
          onClick={() => handleOptionChange(option)}
        >
          {option.image && (
            <img src={option.image} alt="flag" />
          )}
          {isLangDrop ? option.label.substring(0, 2) : option.label}
        </div>
      ))}
    </dialog>
  );
};

DropDownOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  styles: PropTypes.object,
  isLangDrop: PropTypes.bool,
};

export default DropDownOptions;
