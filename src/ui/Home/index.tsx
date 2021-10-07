import instagramLogo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpg";
import postImage from "../../assets/post-image-example.jpg";
import { GrHomeRounded } from "react-icons/gr";
import { BiPaperPlane, BiSearch } from "react-icons/bi";
import { AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";
import "./styles.scss";
import { Post } from "./components/Post";

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

         <Post username="Zika" postImage={postImage}/>
        </div>
        {/* <section className="recommended">
          
        </section> */}
      </main>
    </>
  );
};
