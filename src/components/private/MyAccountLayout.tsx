import AsideMenu from "./AsideMenu";
import WelcomeBox from "./WelcomeBox";
import styles from '../../styles/private/MyAccountLayout.module.css';
import { ReactNode } from "react";

interface Props {
    children: ReactNode
}

const MyAccountLayout: React.FC<Props> = ({ children }) => {
    return (
        <main className={styles.main}>
            <WelcomeBox />
            {children}
            <AsideMenu />
        </main>
    )
}

export default MyAccountLayout;