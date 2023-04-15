<script>
export default {
    name: 'MenuItem',
    functional:true,
    props: {
        icon: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    render(h,context){
        const {icon,title} = context.props
        const vnodes = []
        if (icon) {
            
        }
        if (title) {
            // 问题：什么写法
            vnodes.push(<span>{(title)}</span>)
        }
        
        return vnodes
    }
}
</script>
