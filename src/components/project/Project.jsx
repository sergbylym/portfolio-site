import "./Project.style.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Project = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <img src={img} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>  
  );
};

Project.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index:PropTypes.number.isRequired
};

export default Project;
