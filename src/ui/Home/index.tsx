import instagramLogo from "../../assets/logo.png";
import { GrHomeRounded } from "react-icons/gr";
import { BiPaperPlane, BiSearch } from "react-icons/bi";
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
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
