import { User } from "../client";
import React from "react";

interface UserCardDetailsProps {
    user: User;
}
const UserCardDetails = ({ user }: UserCardDetailsProps) => (
    <div className="user-card-details">
        <h1>{user.login}</h1>
        <img src={user.avatar_url} />
        <pre>{JSON.stringify(user, undefined, 2)}</pre>
    </div>
);

export default UserCardDetails;