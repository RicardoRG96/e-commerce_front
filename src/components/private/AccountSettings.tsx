import MyAccountLayout from "./MyAccountLayout";
import styles from '../../styles/private/AccountSettings.module.css';

const AccountSettings: React.FC = () => {

    let content = (
        <section className={styles.container}>
            <div className={styles.title}>Configurar mi cuenta</div>
            <div className={styles.formContainer}>
                <form action="submit">
                    <label>Contraseña actual</label>
                    <input type="password" />
                    <label>Nueva contraseña</label>
                    <input type="password" />
                    <button>Guadar</button>
                </form>
            </div>
        </section>
    )

    return (
        <MyAccountLayout children={content} />
    )
}

export default AccountSettings;