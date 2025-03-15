import { Link } from "react-router-dom";
import styles from './ProjectLink.module.css';
import PropTypes from 'prop-types';

function ProjectLink({ text, imageUrl, to }) {
    return (
        <Link to={to} className={styles.projectLinkContainer}>
            <div className={styles.textBox}>
                {text}
            </div>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt="Project" />
            </div>
        </Link>
    );
}

ProjectLink.propTypes = {
    text: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired, // URL for navigation
};


export default ProjectLink;