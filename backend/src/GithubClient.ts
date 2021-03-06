// https://developer.github.com/v3/search/#search-users
import fetch from 'node-fetch';
import querystring from 'querystring';

interface PaginationOptions {
    per_page: number;
    page: number;
}

const defaultPaginationOptions: PaginationOptions = {
    per_page: 10,
    page: 0,
};

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

interface UsersResponse {
    "total_count": number;
    "incomplete_results": boolean;
    "items": Array<User>;
}

class GithubClient {
    // todo: add OAuth tokens etc.

    baseURL = 'https://api.github.com';

    async users(query: string, options: Partial<PaginationOptions> = {}): Promise<UsersResponse> {
        if (query === '') {
            throw new Error('Query can\'t be empty');
        }
        const mergedOptions = { ...defaultPaginationOptions, ...options };
        const qString = querystring.stringify({
            q: query,
            ...mergedOptions
        });
        const response = await fetch(this.baseURL + '/search/users?' + qString);
        if (response.status !== 200) {
            throw new Error((await response.json()).message);
        }
        return response.json();
    }

    async user(username: string): Promise<User> {
        const response = await fetch(this.baseURL + '/users/' + username);
        // todo: unhappy path
        return response.json();
    }
}

export default GithubClient;
