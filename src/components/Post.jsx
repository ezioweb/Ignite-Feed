/* eslint-disable react/prop-types */
import styles from './Post.module.css'
export function Post(){
   
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/ezioweb.png"/>
          <div className={styles.authorInfo}>
            <strong>Ezio R Lorenzetti</strong>
            <span>Developer</span>
          </div>
        </div>
        <time title='28 de Julho às 12:22hs' dateTime="2023-07-28 12:22:30">Publicado há 1h</time>
      </header> 

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p>👉{' '} <a href="">jane.design/doctorcare</a></p>
      <p>
        <a href="">#novoprojeto </a>{' '}
        <a href="">#nlw </a>{' '}
        <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Nossa, adorei amigo! Parabé|'></textarea>
        <footer>
          <button>Publicar</button>
        </footer>
      </form> 
    </article>
    
  )
}
