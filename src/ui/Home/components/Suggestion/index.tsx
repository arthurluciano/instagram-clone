import React from "react";
import { IUser } from "../../../../shared/data/users";
import './styles.scss';

interface SuggestionProps {
  user: IUser;
}

export const Suggestion: React.FC<SuggestionProps> = ({ user }) => {
  return (
    <div className="suggestion">
      <div className="user-suggestion">
        <img src={user.avatar_url} alt="Foto do usuário" />
        <div className="user">
          <strong>{user.name}</strong>
          <span>Seguido(a) por ...</span>
        </div>
      </div>
      <button className="user-follow">Seguir</button>
    </div>
  );
};
