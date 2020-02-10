import { User } from "../client";
import React from "react";

interface UserCardProps {
    user: User;
    onClick: () => any;
}
const UserCardSmall = ({ user, onClick }: UserCardProps) => (
    <div className="user-card-small" onClick={onClick}>
        <h1>{user.login}</h1>
        <img src={user.avatar_url} />
    </div>
);

export default UserCardSmall;