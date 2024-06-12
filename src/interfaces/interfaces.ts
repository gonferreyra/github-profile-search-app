export interface ApiUserResponse {
  avatar_url: string;
  bio: string;
  blog: string;
  company: null;
  created_at: Date;
  email: null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null;
  type: string;
  updated_at: Date;
  url: string;
}

export interface ApiReposResponse {
  id: number;
  name: string;
  url: string;
  forks: number;
  watchers: number;
  updated_at: Date;
  description: string;
  license: License | null;
}

export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: null | string;
}
