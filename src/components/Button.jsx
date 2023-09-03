const Button = ({ label, iconURl }) => {
  return (
    <button className="flex items-center rounded-full bg-coral-red px-7 py-4 gap-2 leading-none text-white">
      {label}
      {iconURl ? (
        <img
          src={iconURl}
          alt="button-icon"
          className="ml-2 w-5 h-5 rounded-full"
        />
      ) : null}
    </button>
  );
};

export default Button;
