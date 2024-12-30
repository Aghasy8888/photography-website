import PropTypes from 'prop-types';

const IconAndTitleBtn = ({ icon, title }) => {
  return (
    <div
      role="button"
      className="flex gap-[1px] self-center md:gap-[3px] text-white text-[11px] items-center"
    >
      <img
        src={icon}
        alt="icon"
        className="w-[15px] h-[15px] md:w-[18px] md:h-[19px]"
      />
      <p className="mt-[3px]">{title}</p>
    </div>
  );
};

IconAndTitleBtn.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default IconAndTitleBtn;
