import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

export function Post({ author, publishedAd, content }) {

  const [ comments, setComments ] = useState([]);
  
  const publishedDateFormatted = format(
    publishedAd,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAd, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleSubmitNewComment() {
    event.preventDefault();
    
    setComments([...comments, comments.length + 1])
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAd.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          }

          if (line.type === "link") {
            return (
              <p>
                <a href={line.href}>{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleSubmitNewComment} className={styles.commentForm}>
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
        {comments.map((comment) => {
          return <Comment />;
        })}
      </div>
    </article>
  );
}
