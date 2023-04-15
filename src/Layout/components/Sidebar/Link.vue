<template>
    <!-- v-bind : 动态绑定属性 -->
    <component :is="type" v-bind="linkProps(to)">
        <slot></slot>
    </component>
</template>

<script>
import { isExternal } from '@/utils/validate'
export default {
    name: 'AppLink',
    props: {
        to: {
            type: String,
            required: true
        }
    },
    computed: {
        // 判断to是否以 http 、 https 、 mailto 、 tel 开头
        isExternal() {
            return isExternal(this.to)
        },
        type(){
            if (this.isExternal) {
                return 'a'
            }
            return 'router-link'
        }
    },
    methods: {
    linkProps(to) {
      if (this.isExternal) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        // 给 router-link 标签添加 to 属性,不添加会报错
        // missing required prop: "to"
        to: to
      }
    }
  }
}
</script>
 
<style lang = "scss" scoped></style>