type Props = {
  title: string;
  spec: string;
};

const UserSpec: React.FC<Props> = ({ title, spec }) => {
  return (
    <p className="mt-6 text-lg leading-8 text-gray-600 text-left overflow-hidden whitespace-nowrap text-ellipsis">
      <span className="text-orange-500 font-medium">{title}</span> {spec}
    </p>
  );
};

export default UserSpec;
