// 事件总线 @link https://juejin.cn/post/7224733037488783415?searchId=202403091731274110FF11755F01B22041
type BusClass = {
    emit: (name: string) => void,
    on: (name: string, cb: Function) => void
}

type ParamsKey = string | number | symbol

type List = {
    // 因为函数可以多次订阅，所以要 key-array 的形式，array 就是一个函数数组
    // 一旦 key 被发布，那么这个 key 对应的数组里面的所有函数将被一起触发
    [key: ParamsKey]: Array<Function>
}

class Bus implements BusClass{
    // 定义一个对象，key 是事件名称，value 是事件回调数组
    list: List
    // 类构造函数初始化
    constructor() {
        this.list = {}
    }

    // 事件订阅函数
    on(name: string, cb: Function) {
        // 将 list 里面的 同名函数（形成一个函数数组） 都取出来
        let fnArr: Array<Function> = this.list[name] || []
        // 将 订阅的函数回调 放入这个数组
        fnArr.push(cb)
        this.list[name] = fnArr
    }

    // 事件发布函数
    emit(name: string, ...args: Array<any>) {
        // name(key) 被发布，其对应的所有函数都被触发
        let fnArr: Array<Function> = this.list[name]
        fnArr.forEach(fn => {
            fn.apply(this, args)
        })
    }
}

// 暴露一个事件总线实例
export default new Bus()
