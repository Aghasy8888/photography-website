import axios from 'axios';

const apiUrl = import.meta.env.VITE_HIGH_BRIDGE_APP_API_URL;

export function checkLoginStatus() {
  const token = localStorage.getItem('token');
  if (!token) {
    return false;
  }
  return true;
}
