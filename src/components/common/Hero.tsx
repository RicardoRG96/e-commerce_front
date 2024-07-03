import IMAGES from "../../images/images";
import styles from '../../styles/common/Hero.module.css';

const Hero: React.FC = () => {
    return (
        <section className={styles.container}>
            <article>
                <img src={IMAGES.hero} alt="hero" />
            </article>
        </section>
    )
}

export default Hero;