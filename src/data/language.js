import { ENGLISH, FRENCH, RUSSIAN } from '../../constants';
import { frenchFlag, russianFlag, ukFlag } from '../assets';

export const langDropDownStyles = {
  option: 'text-white cursor-pointer uppercase flex gap-2',
  container:
    'flex gap-2 pl-3 pr-[6px] w-[79px] relative cursor-pointer bg-charcoalGray border border-mediumDarkGray',
  open: {
    container: '',
    header: '',
  },
  closed: '',
  header:
    'flex gap-2 font-semibold uppercase text-white text-xs leading-6 font-bold',
  options:
    'absolute top-[23px] -left-[1px] border border-mediumDarkGray text-xs border-t-0 bg-charcoalGray w-[79px] flex flex-col gap-[6px] items-start pl-3 pr-4 py-2',
  arrow: { default: '', rotated: 'transform rotate-180' },
  disabled: 'cursor-not-allowed opacity-50',
};

export const langOptions = [
  {
    label: 'Russian',
    value: RUSSIAN,
    image: russianFlag,
  },
  {
    label: 'English',
    value: ENGLISH,
    image: ukFlag,
  },
  {
    label: 'French',
    value: FRENCH,
    image: frenchFlag,
  },
];
