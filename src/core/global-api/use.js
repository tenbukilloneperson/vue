/* @flow */

import { toArray } from '../util/index'

export function initUse (Vue: GlobalAPI) {
  // Vue.use 方法传入的参数如果是 Function 就会直接调用。如果是对象就必须要有一个install方法
  // 第一个参数为 Vue 构造函数
  Vue.use = function (plugin: Function | Object) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    // toArray 将argumrnts转化为真实数组 并删除第一个元素
    const args = toArray(arguments, 1)
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }
    installedPlugins.push(plugin)
    return this
  }
}
