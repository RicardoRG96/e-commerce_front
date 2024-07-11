import { useContext } from 'react';
import { AuthContext } from '../public/AuthContext';
import styles from '../../styles/private/WelcomeBox.module.css';
import IMAGES from '../../images/images';

const WelcomeBox: React.FC = () => {
    const { userName } = useContext(AuthContext);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src={IMAGES.avatar} alt="user-image" />
                </div>
                <div className={styles.userNameContainer}>
                    <span className={styles.helloSpan}>Hola</span>
                    <span className={styles.userName}>{userName}</span>
                </div>
            </div>
        </section>
    )
}

export default WelcomeBox;