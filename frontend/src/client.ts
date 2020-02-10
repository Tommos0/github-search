const BACKEND_URL = 'http://localhost:8000';

interface User {
    "login": string;
    "id": number;
    "node_id": string;
    "avatar_url": string;
    "gravatar_id": string;
    "url": string;
    "html_url": string;
    "followers_url": string;
    "following_url": string;
    "gists_url": string;
    "starred_url": string;
    "subscriptions_url": string;
    "organizations_url": string;
    "repos_url": string;
    "events_url": string;
    "received_events_url": string;
    "type": string;
    "site_admin": boolean;
    "score": number;
}

const Client = {
    usersSearch: async (query: string, per_page = 10, page = 1): Promise<User[]> => {
        const url = `${BACKEND_URL}/users?q=${query}&per_page=${per_page}&page=${page}`;
        const response = await fetch(url);
        return await response.json();
    },
    user: async (username: string): Promise<User> => {
        const url = `${BACKEND_URL}/user/${username}`;
        const response = await fetch(url);
        return await response.json();
    },
};

// eslint-disable-next-line
export { Client, User }
