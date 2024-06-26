import GithubIcon from "../icons/github.icon";

const Footer = () => {
  return (
    <div className="w-full my-10" data-testid="footer">
      <div className="w-full p6 flex content-center justify-center items-center gap-x-2">
        <span>
          <GithubIcon />
        </span>
        <span>© {new Date().getFullYear()}</span>
        <span>GitHub Clone Web App</span>
      </div>
    </div>
  );
};

export default Footer;
