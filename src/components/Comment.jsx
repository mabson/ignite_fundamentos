import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/mabson.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAntTime}>
              <strong>Mabson Vinicius</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:15:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
                <Trash size={24} />
            </button>
          </header>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            illo consequuntur, ab quibusdam placeat iure saepe totam possimus
            quasi dicta asperiores perspiciatis, earum ipsum dolore impedit,
            doloribus ut corrupti velit?
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
  );
}
