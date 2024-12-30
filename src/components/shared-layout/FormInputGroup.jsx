import PropTypes from 'prop-types';
import Input from '../../common/Input';
import { useTranslation } from 'react-i18next';

const className =
  'bg-charcoalGray autofill:bg-charcoalGray p-[0.625rem] block mr-[2px] transition-border duration-350 border border-mediumDarkGray border-solid text-white placeholder:text-white focus:placeholder-steelGray focus:border-stoneGray xl:inline-block w-full xl:py-[0.313rem] xl:p-x-[0.625rem] xl:bg-black xl:w-[6.563rem]';

const FormInputGroup = ({ formValues, handleChange, inputRef }) => {
  const {t} = useTranslation();
 
  return (
    <div className="flex flex-col gap-1 xl:flex-row">
      <Input
        autoComplete="email"
        changeHandler={handleChange}
        inputValue={formValues.email}
        name="email"
        ref={inputRef}
        placeholder={t('header.email')}
        type="email"
        className={className}
        required
      />

      <Input
        autoComplete="current-password"
        changeHandler={handleChange}
        inputValue={formValues.password}
        name="password"
        placeholder={t('header.password')}
        type="password"
        className={className}
        required
      />
    </div>
  );
};

FormInputGroup.propTypes = {
  formValues: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  inputRef: PropTypes.object,
};

export default FormInputGroup;
