import instagramLogo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpg";
import postImage from "../../assets/post-image-example.jpg";
import { GrHomeRounded } from "react-icons/gr";
import { BiPaperPlane, BiSearch } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";
import "./styles.scss";

export const Home: React.FC = () => {
  return (
    <>
      <header className="page-header">
        <div className="nav-container">
          <img src={instagramLogo} alt="Instagram logo" />

          <div className="search-field">
            {/* <BiSearch /> */}
            <input type="text" placeholder="Pesquisar" />
          </div>

          <nav className="navigation">
            <ul>
              <li>
                <GrHomeRounded />
              </li>
              <li>
                <BiPaperPlane />
              </li>
              <li>
                <AiOutlineCompass />
              </li>
              <li>
                <AiOutlineHeart />
              </li>
              <li>
                <div className="user-configuration">
                  <img src={avatar} alt="Foto do usuário" />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="feed-container">
        <div className="feed">
          <section className="stories-container">
            <div className="stories-list">
              <div className="story">
                <div className="story-user">
                  <img src={avatar} alt="Foto do usuário do story" />
                </div>
                <span>Arthur Oliveira</span>
              </div>
              <div className="story">
                <div className="story-user">
                  <img src={avatar} alt="Foto do usuário do story" />
                </div>
                <span>Arthur Oliveira</span>
              </div>
            </div>
          </section>

          <article className="post-container">
            <section className="post-header">
              <div className="user-post">
                <img src={avatar} alt="Foto do usuário" />
                <span>Arthur Oliveira</span>
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
          </article>
        </div>
        {/* <section className="recommended">
          
        </section> */}
      </main>
    </>
  );
};
