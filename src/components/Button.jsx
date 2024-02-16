const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {

  const whatsappLink = `https://wa.me/+94771128411`; // Define your WhatsApp link

  const handleClick = () => {
    window.location.href = whatsappLink; // Redirect to WhatsApp link on click
  };

  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-purple-900 text-white border-purple-900"
    } rounded-full ${fullWidth && "w-full"}`}
    onClick={handleClick}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
