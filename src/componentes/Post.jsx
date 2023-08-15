import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { Coment } from './comment'

export function Post(){
    return (

        <article className= {styles.Post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src="https://github.com/DevJuliaMa.png" alt="" />
                    <div className= {styles.authorInfo} >
                    <strong>Julia Santos</strong>
                    <span>Web Developer</span>
                    </div>
                </div>

                {/* tag especial para data,tempo etc. */}
                <time title='13 de Agosto ás 16:52' dateTime='2023-08-13 16:52:00' >Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
              <p> 🌟 Orgulhoso em fazer parte da equipe inovadora da Juhana! Juntos, estamos transformando ideias em realidade. 💼💡   </p>  
               <p> <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="imagem da equipe" /></p> 
               <p><a href="">#Inovação</a>{'     '}  
               <a href="">#TrabalhoEmEquipe</a>
               </p>
            </div>

            <form className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

               <footer>
                <button type='submit'>Publicar</button>
               </footer>
            </form>

            <div className={styles.commentList}>
                <Coment />
                <Coment />
                <Coment />
            </div>
        </article>
    )
}