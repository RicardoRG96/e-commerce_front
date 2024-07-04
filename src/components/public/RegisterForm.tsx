import { Link } from "react-router-dom";
import styles from '../../styles/public/RegisterForm.module.css';

const RegisterForm: React.FC = () => {
    return(
        <section className={styles.section}>
            <article className={styles.container}>
                <h2>Crea tu cuenta en E-commerce</h2>
                <form action="submit">
                    <label>Nombre</label>
                    <input type="text" />
                    <label>Correo electrónico</label>
                    <input type="email" />
                    <label>Contraseña</label>
                    <input type="password" />
                    <div className={styles.passwordRulesContainer}>
                        <div>
                            Debe tener al menos 7 caracteres
                        </div>
                    </div>
                    <button>Crear cuenta</button>
                    <Link to={'/login'} className={styles.link}>¿Ya tienes cuenta? Inicia sesión</Link>
                </form>
            </article>
        </section>
    )
}

export default RegisterForm;