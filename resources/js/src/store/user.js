import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: JSON.parse(localStorage.getItem('userInfo')),
    token: localStorage.getItem('token')
  }),
  actions: {
    LoginIn(data) {
      this.token = data.token;
      this.userInfo = data;
      localStorage.setItem('userInfo', JSON.stringify(data));
      localStorage.setItem('token', data.token);
      localStorage.setItem('expire', data.expire);
    },
    LoginOut() {
      localStorage.removeItem('userInfo');
      localStorage.removeItem('token');
      localStorage.removeItem('expire');
      location.href = '/';
    }
  }
});
