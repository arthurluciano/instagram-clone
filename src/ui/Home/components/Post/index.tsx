import { AiOutlineHeart } from "react-icons/ai";
import { BiPaperPlane } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import avatar from "../../../../assets/avatar.jpg";
import './styles.scss';

interface PostProps {
  username: string;
  postImage: string;
}

export const Post: React.FC<PostProps> = ({ username, postImage }) => {
  return (
    <article className="post-container">
      <section className="post-header">
        <div className="user-post">
          <img src={avatar} alt="Foto do usuário" />
          <span>{username}</span>
        </div>

        <FiMoreHorizontal />
      </section>
      <div className="post-image">
        <img src={postImage} alt="Foto do post" />
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
        <img src={avatar} alt="Foto do usuário" />
        <span className="post-users-feedback">
          Curtido por <span>gustavoalexandre</span> e{" "}
          <span>outras 49 pessoas</span>
        </span>
      </section>
      <section className="post-comments">
        <div className="post-title">
          <span className="user-post">
            <span className="user">{username}</span> Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod
          </span>
        </div>
        <p className="more-comments">Ver todos os 8 comentários</p>
        <div className="comment-container">
          <div className="comment">
            <span className="user-comment">
              <span className="user">Silva Santos</span> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod
            </span>
          </div>
          <button className="like-comment">
            <AiOutlineHeart />
          </button>
        </div>
        <div className="comment-container">
          <div className="comment">
            <span className="user-comment">
              <span className="user">Silva Santos</span> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod
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
          />
          <button type="submit" className="button-submit">
            <span>Publicar</span>
          </button>
        </form>
      </section>
    </article>
  );
};
