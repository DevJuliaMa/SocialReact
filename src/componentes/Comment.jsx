import styles from './Comment.module.css';
import {Trash} from 'phosphor-react';
import {ThumbsUp} from 'phosphor-react';
import { Avatar } from './Avatar';

export function Coment() {
    return (
        <div className={styles.comment}>
            <Avatar  hasBorder={false} src="https://github.com/DevJuliaMa.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Julia Santos</strong>
                            <time title='13 de Agosto ás 16:52' dateTime='2023-08-13 16:52:00' >Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={24} />
                        </button>
                        
                    </header>
                    <p>
                        Muito bom Devon, parabéns!! 👏👏
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>


        </div>
    )
}