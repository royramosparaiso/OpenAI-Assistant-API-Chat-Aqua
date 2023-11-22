import { VercelIcon, GithubIcon } from "../icons";

const LinkBar = () => (
  <div className="top-5  justify-between px-5 sm:flex">
    <a
      href="/deploy"
      target="_blank"
      className="mx-auto rounded-lg p-2 transition-colors duration-200 hover:bg-stone-100 sm:bottom-auto"
    >
      <VercelIcon />
    </a>
  </div>
);

export default LinkBar;
