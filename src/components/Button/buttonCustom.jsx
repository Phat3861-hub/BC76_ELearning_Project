import { Button } from "antd";

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
export const ButtonContact = ({
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
      className={`py-1 px-2 md:py-3 md:px-8 border border-white text-white duration-200 rounded-md hover:bg-white hover:text-black ${className}`}
    >
      {content}
      <i className="fa-solid fa-phone ml-2"></i>
    </button>
  );
};

export const ButtonBlueP = ({ content, className = "" }) => {
  return (
    <button
      className={`bp-bg border-solid rounded-lg text-white px-5 py-2 lg:text-base sm:text-sm ${className}`}
    >
      {content}
    </button>
  );
};
