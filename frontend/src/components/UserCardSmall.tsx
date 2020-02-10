import { User } from "../client";
import React from "react";

interface UserCardProps {
    user: User;
    onClick: () => any;
}
const UserCard = ({ user, onClick }: UserCardProps) => (
    <div className="user" onClick={onClick}>
        <h1>{user.login}</h1>
        <img src={user.avatar_url} />
    </div>
)

export default UserCard;