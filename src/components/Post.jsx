import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/mabson.png" /> 
          <div className={styles.authorInfo}>
            <strong>Mabson Vinicius</strong>
            <span>Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:15:30">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

        <p>
          Vitae perspiciatis aliquid quaerat, sunt incidunt reprehenderit
          dolorem accusamus ipsam. Eligendi dolorem ipsum cum ipsa quia sed,
          porro possimus voluptatem totam amet.
        </p>

        <p>
          <a href="">Lorem Ipsum</a>
        </p>

        <p>
          <a href="">#Lorem</a> {' '}
          <a href="">#Ipsum</a> {' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
            placeholder="Deixe um comentário"
            // className={styles.}
         />
         
         <footer>
            <button type="submit">Publicar</button>
         </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  );
}
