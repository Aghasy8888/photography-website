import * as Yup from 'yup';

export const loginValidationSchema = (t) => {
  return Yup.object().shape({
    email: Yup.string()
      .email(t('header.must-be-your-email'))
      .required(t('header.email-required')),
    password: Yup.string().required(t('header.password-required')),
  });
};
