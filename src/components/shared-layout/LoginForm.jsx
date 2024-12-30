import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FormInputGroup } from '.';
import { loginDefaultValues } from '../../data';
import { handleChange, processError } from '../../helpers';
import { loginValidationSchema } from '../../helpers/validationSchemas';
import useFocusRef from '../../hooks/useFocusRef';

const buttonClass =
  'py-[6px] px-[10px] bg-crimsonRed bg-gradient-to-b from-roseRed to-crimsonRed text-xs border border-solid border-pinkishRed xl:py-1';
const errorClass = 'text-[0.688rem] text-white p-[0.188rem] bg-persianRed';

const LoginForm = () => {
  const { t } = useTranslation();
  const [formValues, setFormValues] = useState(loginDefaultValues);
  const [validationErrors, setValidationErrors] = useState({});
  const emailInputRef = useRef(null);
  useFocusRef(emailInputRef, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { email, password } = formValues;

    try {
      await loginValidationSchema(t).validate(formValues, {
        abortEarly: false,
      });

      // const loginValues = {
      //   username: email,
      //   password,
      // };

      // dispatch(login({ data: loginValues }));
      setValidationErrors({});
    } catch (error) {
      if (Yup.ValidationError.isError(error)) {
        const errors = {};
        error.inner.forEach((err) => processError(err, errors));

        setValidationErrors(errors);
      }
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="absolute top-8 -right-5 w-80 p-4 bg-darkCharcoal z-10 border border-mediumDarkGray text-white text-xs xl:static xl:p-0 xl:bg-transparent xl:border-none xl:w-auto"
    >
      <div className="xl:flex xl:gap-2">
        <FormInputGroup
          formValues={formValues}
          handleChange={(e) => handleChange(e, setFormValues)}
          inputRef={emailInputRef}
        />
        <div className="flex justify-between mt-2 xl:flex-row-reverse xl:mt-0">
          <Link
            to={'/remind-password'}
            className={`${buttonClass} xl:text-[11px] xl:font-bold xl:ml-[10px] xl:p-0 xl:bg-transparent bg-none xl:border-none`}
          >
            {t('header.remind-password')}
          </Link>

          <input
            type="submit"
            value={t('header.login')}
            className={`min-w-[6.25rem] ${buttonClass} font-bold text-center uppercase outline-none xl:px-3 xl:min-w-0 xl:font-normal xl:normal-case`}
          />
        </div>
      </div>
      <div>
        {validationErrors.email && (
          <div className={errorClass}>{validationErrors.email}</div>
        )}

        {validationErrors.password && (
          <div className={errorClass}>{validationErrors.password}</div>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
