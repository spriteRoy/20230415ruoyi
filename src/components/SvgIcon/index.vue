<template>
    <svg :class="svgClass">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script>
import { use } from 'vue/types/umd';

export default {
    props: {
        className: {
            type: String,
            default: ""
        },
        iconClass:{
            type:String,
            required:true
        }
    },
    computed: {
        iconName(){
            return `#icon-${this.iconClass}`
        },
        svgClass() {
            if (this.className) {
                return "svg-icon" + this.className;
            }
            else {
                return "svg-icon";
            }
        }
    },
    components: { use }
}
</script>
 
<style lang = "scss" scoped>
.svg-icon{
    width: 1em;
    height: 1em;
    // 和字体颜色保持一致
    fill: currentColor;
}
</style>