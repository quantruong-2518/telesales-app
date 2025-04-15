export interface IAuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}