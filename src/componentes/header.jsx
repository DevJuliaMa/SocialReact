import styles from './Header.module.css'

import igniteLogo from '../img/ignite-logo.svg'

//componente
export function Header(){

    return (
        <header className={styles.header}>
            <strong >Iginte Feed</strong>
            <img src= {igniteLogo} alt="logotipo do Ignite" />
        </header>
    );
}

