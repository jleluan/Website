import styles from './ProjectLink.module.css';
import PropTypes from 'prop-types';

function ProjectLink({ text, imageUrl }) {
    return (
        <div className={styles.projectLinkContainer}>
            <div className={styles.textBox}>
                {text}
            </div>
            <div className={styles.imageContainer}>
                <img src={imageUrl} alt="Project" />
            </div>
        </div>
    );
}

ProjectLink.propTypes = {
    text: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default ProjectLink;