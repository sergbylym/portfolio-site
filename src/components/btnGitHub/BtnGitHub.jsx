import "../../styles/main.css";
import PropTypes from "prop-types";
import gitHubIcon from "../../img/icons/gitHub-black.svg";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

BtnGitHub.propTypes = {
  link: PropTypes.string.isRequired,
};

export default BtnGitHub;
