import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { menIcon, round } from '../../assets';
import { DropDown } from '..';
import { IconAndTitleBtn, LoginButton } from '../../common';
import { langDropDownStyles, langOptions } from '../../data/language';
import i18n from '../../i18n';
import { LoginForm } from '.';
import useCloseModal from '../../hooks/useCloseModal';
import useMediaWidth from '../../hooks/useMediaWidth';
import { useWindowWidth } from '../../hooks/useWindowWidth';

const AuthPanel = () => {
  const { t } = useTranslation();
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const screenSize = useWindowWidth();
  const notMobile = useMediaWidth(screenSize >= 1280);

  const makeTheChange = (option) => {
    i18n.changeLanguage(option.label.substring(0, 2).toLowerCase());
  };

  useCloseModal(loginFormOpen, setLoginFormOpen, 'form', '.loginButton');

  return (
    <div className="flex justify-end pr-4 py-[6px] bg-charcoalGray sm:pl-6 2xl:pl-10 md:pr-6 xl:pr-[16.25rem] 2xl:pr-[17.188rem] 3xl:pr-[18.438rem] 4xl:pr-[17.188rem]">
      <div className="relative flex gap-2 items-start">
        <IconAndTitleBtn title={t('header.create-account')} icon={menIcon} />
        <LoginButton onClick={() => setLoginFormOpen((prev) => !prev)} />
        {(loginFormOpen || notMobile) && <LoginForm />}

        <DropDown
          makeTheChange={makeTheChange}
          options={langOptions}
          disabled={false}
          initiallySelectedOption={langOptions[0]}
          styles={langDropDownStyles}
          isLangDrop
        />
      </div>
      <button className="pl-2 py-1 h-4">
        <img className="w-4 h-4" src={round} alt="round" />
      </button>
    </div>
  );
};

export default AuthPanel;
