import { buttonType } from "./buttonType";

const Button = ({ type, children, customcss }: buttonType) => {
  return (
    <button
      type={type}
      className={`px-6 py-2 bg-violet-500 text-white rounded-md ${customcss}`}
    >
      {children}
    </button>
  );
};

export default Button;
