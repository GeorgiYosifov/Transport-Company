const FormCol = ({ children, className }) => {
  return (
    <div className={`${className} w-full px-3 mb-6 md:mb-0'}`}>{children}</div>
  );
};

export default FormCol;
