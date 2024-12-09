export const ButtonGhost = ({ onClick, content, icon, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="py-1 px-2 md:px-4 text-white"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {content}
    </button>
  );
};

export const ButtonOutline = ({
  content,
  icon,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-1 px-2 md:px-4 border border-white text-white duration-200 rounded-md hover:bg-white hover:text-black ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {content}
    </button>
  );
};
