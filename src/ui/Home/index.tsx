import instagramLogo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpg";
import { GrHomeRounded } from "react-icons/gr";
import { BiPaperPlane, BiSearch } from "react-icons/bi";
import { AiOutlineCompass, AiOutlineHeart } from "react-icons/ai";
import { Post } from "./components/Post";
import { useEffect, useRef, useState } from "react";
import { users } from "../../shared/data/users";
import { StoryList } from "./components/StoryList";
import { posts } from "../../shared/data/posts";
import { Story } from "./components/Story";

import "./styles.scss";
import { Suggestion } from "./components/Suggestion";
import { BsXLg } from "react-icons/bs";

export const Home: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const storiesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const resize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      <header id="page-header">
        <div className="nav-container">
          <img src={instagramLogo} alt="Instagram logo" />

          <div className="search-field">
            <input type="text" placeholder="Pesquisar" />
            <div className="recent-container">
              
              <div className="recent-list">
                <div className="title">
                  <strong>Recentes</strong>
                  <button>Limpar tudo</button>
                </div>
                {users.slice(0, 8).map((user) => (
                  <div className="recent">
                    <img src={user.avatar_url} alt={user.name} />
                    <div className="user-info">
                      <strong>{user.name}</strong>
                      <span>{user.displayName}</span>
                    </div>
                    <button className="button-remove">
                      <BsXLg fill="#8e8e8e"/>
                    </button>
                  </div>
                ))}
              </div>
              <div className="recent-square"></div>
            </div>
          </div>

          <nav className="navigation">
            <ul>
              <li>
                <GrHomeRounded fill="#000" size={22} />
              </li>
              <li>
                <BiPaperPlane size={25} />
              </li>
              <li>
                <AiOutlineCompass size={26} />
              </li>
              <li>
                <AiOutlineHeart size={26} />
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
          <StoryList
            ref={storiesRef}
            containerWidth={storiesRef.current?.offsetWidth}
            scrollWidth={storiesRef.current?.scrollWidth}
          >
            {users.map((user, index) => (
              <Story key={index} user={user} hasStories={user.hasStories} />
            ))}
          </StoryList>

          {posts.map((post, index) => (
            <Post key={index} data={post} />
          ))}
        </div>
        <section
          className="recommended"
          style={{ left: `${(windowWidth - 961) / 2 + 630}px` }}
        >
          <div className="user">
            <div className="user-details">
              <img src={avatar} alt="Foto do usuário" />
              <div className="user-info">
                <strong>arthur_luciano65</strong>
                <span>Arthur Oliveira Luciano</span>
              </div>
            </div>
            <button className="user-change-details">Mudar</button>
          </div>
          <div className="suggestions">
            <div className="title">
              <span className="suggestions-user">Sugestões para você</span>
              <button className="show-more">Ver tudo</button>
            </div>
            {users.slice(0, 5).map((user) => (
              <Suggestion user={user} />
            ))}
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="">Sobre</a>
              </li>
              <li>
                <a href="">Ajuda</a>
              </li>
              <li>
                <a href="">Imprensa</a>
              </li>
              <li>
                <a href="">API</a>
              </li>
              <li>
                <a href="">Carreiras</a>
              </li>
              <li>
                <a href="">Privacidade</a>
              </li>
              <li>
                <a href="">Termos</a>
              </li>
              <li>
                <a href="">Localizações</a>
              </li>
              <li>
                <a href="">Principais contas</a>
              </li>
              <li>
                <a href="">Hashtags</a>
              </li>
              <li>
                <a href="">Idioma</a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};
