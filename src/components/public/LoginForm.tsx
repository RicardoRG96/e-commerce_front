import { Link } from 'react-router-dom';
import styles from '../../styles/public/LoginForm.module.css';

const LoginForm: React.FC = () => {
    return (
        <section className={styles.section}>
            <article className={styles.container}>
                <h2>Inicia Sesión para comprar</h2>
                <form action="submit">
                    <label>Correo electrónico</label>
                    <input type="email" />
                    <label>Contraseña</label>
                    <input type="password" />
                    <Link to={'/register'} className={styles.link}>¿No tienes cuenta con nosotros? Registrate</Link>
                    <button>Iniciar sesión</button>
                </form>
            </article>
        </section>
    )
}

export default LoginForm;