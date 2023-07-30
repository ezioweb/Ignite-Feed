import styles from './Sidebar.module.css'
import { PencilLine } from '@phosphor-icons/react'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
           <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1667857391859-de8d295ca2db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=40"/>
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/ezioweb.png"/>
                <strong>Ezio R Lorenzetti</strong>
                <span>Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil</a>
            </footer>
        </aside>
    )
}