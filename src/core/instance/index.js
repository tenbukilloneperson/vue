import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  // 开发环境
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
// 给 Vue 实例挂载 _init() 方法
initMixin(Vue)
// 注册 Vue 实例的 $data/$prop/$set/$delete/$watch
stateMixin(Vue)
// 初始化事件相关方法 $on/$once/$off/$emit
eventsMixin(Vue)
// 初始化生命周期相关的混入方法 _update()/ $forceUpdate() / $destory()
lifecycleMixin(Vue)
// 混入 _render /$nextTick()
renderMixin(Vue)

export default Vue
