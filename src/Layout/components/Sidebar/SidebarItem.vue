<template>
  <!-- index : 唯一标志 -->
  <div v-if="!item.hidden">
    <template v-if="!item.children">
      <!-- AppLink中的路径应该是拼接之后的路径  -->
      <AppLink :to="bathPath">
        <el-menu-item :index="item.path">
          <MenuItem :title="item.meta.title" :icon="item.meta.icon">
          </MenuItem>
        </el-menu-item>
      </AppLink>
    </template>

    <el-submenu v-else :index="item.path">
      <template slot="title">
        <span>{{ item.name }}</span>
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
  methods:{
    resolvePath(routePath){
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.bathPath,routePath)
    }
  }
};
</script>

<style></style>