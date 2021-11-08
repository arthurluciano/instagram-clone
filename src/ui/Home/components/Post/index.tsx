import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IPost } from "../../../../shared/data/posts";
import "./styles.scss";

interface PostProps {
  data: IPost;
}

export const Post: React.FC<PostProps> = ({ data }) => {
  const [postMessage, setPostMessage] = useState('');

  return (
    <article className="post-container">
      <section className="post-header">
        <div className="user-post">
          <img src={data.user.avatar_url} alt="Foto do usuário" />
          <span>{data.user.name}</span>
        </div>

        <FiMoreHorizontal />
      </section>
      <div className="post-image">
        <img src={data.photo} alt="Foto do post" />
      </div>
      <section className="post-buttons">
        <div className="action-buttons">
          <button className="button like">
            <AiOutlineHeart />
          </button>

          <button className="button comment">
            <FaRegComment />
          </button>

          <button className="button share">
            <BiPaperPlane />
          </button>
        </div>
        <button className="save-post">
          <BsBookmark />
        </button>
      </section>
      <section className="post-feedback">
        <img src={data.comments[0].user.avatar_url} alt="Foto do usuário" />
        <span className="post-users-feedback">
          Curtido por <span>{data.comments[0].user.name}</span> e{" "}
          <span>outras {data.comments.length - 1} pessoas</span>
        </span>
      </section>
      <section className="post-comments">
        <div className="post-title">
          <span className="user-post">
            <span className="user">{data.user.name}</span> {data.title}
          </span>
        </div>
        <p className="more-comments">
          Ver todos os {data.comments.length} comentários
        </p>

        <div className="comment-container">
          <div className="comment">
            <span className="user-comment">
              <span className="user">{data.comments[0].user.name}</span>{" "}
              {data.comments[0].text}
            </span>
          </div>
          <button className="like-comment">
            <AiOutlineHeart />
          </button>
        </div>
        <div className="comment-container">
          <div className="comment">
            <span className="user-comment">
              <span className="user">{data.comments[1].user.name}</span>{" "}
              {data.comments[1].text}
            </span>
          </div>
          <button className="like-comment">
            <AiOutlineHeart />
          </button>
        </div>

        <div className="post-date">
          <span>Há 3 horas</span>
        </div>
      </section>
      <section className="post-make-comment">
        <button className="emoji-menu">
          <HiOutlineEmojiHappy />
        </button>
        <form className="make-comment-form">
          <textarea
            name="comment"
            className="comment"
            placeholder="Adicione um comentário..."
            onChange={event => setPostMessage(event.target.value)}
            value={postMessage}
          />
          <button type="submit" className="button-submit" disabled={!!!postMessage}>
            <span>Publicar</span>
          </button>
        </form>
      </section>
    </article>
  );
};
