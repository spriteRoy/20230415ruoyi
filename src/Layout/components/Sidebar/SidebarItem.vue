<template>
  <!-- index : 唯一标志 -->
  <div v-if="!item.hidden">
    <!-- 只有一个孩子 -->
    <template v-if="hasOneShowingChild(item.children,item)">
      <!-- AppLink中的路径应该是拼接之后的路径  -->
      <AppLink :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <MenuItem :title="onlyOneChild.meta.title" :icon="onlyOneChild.meta.icon">
          </MenuItem>
        </el-menu-item>
      </AppLink>
    </template>

    <el-submenu v-else :index="bathPath">
      <template slot="title">
        <MenuItem :title="item.meta.title" :icon="item.meta.icon">
          </MenuItem>
      </template>
      <!-- 路径拼接 -->
      <SidebarItem v-for="child in item.children" :item="child" :key="child.path" :bathPath="resolvePath(child.path)"></SidebarItem>
    </el-submenu>
  </div>
</template>

<script>
import MenuItem from './Item.vue'
import AppLink from './Link.vue'
import path from 'path'
import { isExternal } from '@/utils/validate'
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    // 路径拼接需要的基础路径
    bathPath:{
      type:String,
      default:''
    }
  },
  components: {
    MenuItem,AppLink
  },
  data(){
    return{
      onlyOneChild:null
    }
  },
  methods:{
    resolvePath(routePath){
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.bathPath,routePath)
    },
    hasOneShowingChild(children = [], parent) {
      if (!children) {
        children = [];
      }
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ... parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
  }
};
</script>

<style></style>