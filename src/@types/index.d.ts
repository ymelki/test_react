export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  owner: {
    avatar_url: string;
    login: string;
  };
}
