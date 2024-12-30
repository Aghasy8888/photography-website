import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const LoginButton = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <button
      className="xl:hidden px-3 py-1 text-white text-xs bg-gradient-to-b from-roseRed to-crimsonRed border border-pinkishRed loginButton"
      onClick={onClick}
    >
      {t('header.login')}
    </button>
  );
};

LoginButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoginButton;
