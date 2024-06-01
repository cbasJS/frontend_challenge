type Props = {
  children: React.ReactNode;
};

const WrapperElement: React.FC<Props> = ({ children }) => {
  return (
    <div className="border-b border-border-color dark:border-border-color-dark md:max-w-auto">
      <div className="p-3 md:w-auto md:max-w-auto">{children}</div>
    </div>
  );
};

export default WrapperElement;
