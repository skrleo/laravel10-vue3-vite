import { defineStore, createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

interface GlobalState {
    token: string,
    userInfo: any
}
// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
    id: 'GlobalState', // id: 必须的，在所有 Store 中唯一
    // 开启数据持久化
    persist: true,
    // state: 返回对象的函数
    state: (): GlobalState => ({
        token: '',
        userInfo: {}
    }),
    getters: {},
    actions: {
        // 不使用箭头函数
        setToken(token: string) {
            this.token = token;
        },
        setUserInfo(userInfo: any) {
            this.userInfo = userInfo;
        },
        removeToken() {
            this.token = undefined
        },
    },
});
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;

