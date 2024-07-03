import styles from '../../styles/common/Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <h3>
                    E-Commerce
                </h3> 
                <p>
                    Todos los derechos reservados © 2024 
                </p>
            </div>
            <div className={styles.socialMedia}>
                <div>
                    <h3>
                        Síguenos
                    </h3>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
                <div>
                    <h3>
                        Medios de pago
                    </h3>
                    <i className="fa-brands fa-cc-visa"></i>
                    <i className="fa-brands fa-cc-mastercard"></i>
                    <i className="fa-brands fa-cc-diners-club"></i>
                </div>
            </div>
        </footer>
    )
}

export default Footer;