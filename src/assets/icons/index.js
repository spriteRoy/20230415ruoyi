import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

// register globally
Vue.component('svg-icon', SvgIcon)

// 把所有图标都取出来
// 参数一:从哪个目录取图标
// 参数二:是否需要做子目录的跟进
// 参数三:匹配的规则,取出以svg结尾的图标
const req = require.context('./svg', false, /\.svg$/)


// keys()方法
// https://www.yisu.com/zixun/628314.html
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
