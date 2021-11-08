import React from "react";
import { IUser } from "../../../../shared/data/users";
import "./styles.scss";

interface StoryProps {
  user: IUser;
  hasStories?: boolean;
}

export const Story: React.FC<StoryProps> = ({ user, hasStories }) => {
  return (
    <div className={`story ${hasStories ? "has" : ""}`}>
      <div className="story-user">
        <div className="story-border">
          <img src={user.avatar_url} alt="Foto do usuário do story" />
        </div>
      </div>
      <span className={`${hasStories ? "bold" : ""}`}>
        {user.name.length > 9 ? `${user.name.slice(0, 9)}...` : user.name}
      </span>
    </div>
  );
};
