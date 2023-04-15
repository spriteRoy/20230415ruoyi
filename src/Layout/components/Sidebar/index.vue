<template>
  <div>
    <Logo></Logo>
    <el-scrollbar>
      <el-menu default-active="2" class="el-menu-vertical-demo" :background-color="variables.menuBackground"
        text-color="yellow" :unique-opened="true" active-text-color="#ffd04b">
        <!-- :bath-path="route.path" 路径拼接 -->
        <SidebarItem v-for="(route, index) in sidebarRouters" :item="route" :key="route.path + index" :bath-path="route.path"></SidebarItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
import variables from "@/assets/styles/variables.scss";
import SidebarItem from "./SidebarItem.vue";
export default {
  name: "Sidebar",
  components: {
    Logo, SidebarItem
  },
  data() {
    return {
      sidebarRouters:[]
    };
  },
  methods: {},
  computed: {
    variables() {
      return variables;
    },
  },
};
</script>

<style scoped lang="scss">
.el-scrollbar {
  height: calc(100% - 50px);
}
</style>