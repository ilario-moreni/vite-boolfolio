<script>
export default {
    name: 'AppHeader',
    data(){
        return{
            menu: [
                {
                    label: 'Projects',
                    route: 'projects'
                }
            ]
        }
    }
}
</script>
<template lang="">
    <div class="navbar my_nav">
        <div class="container">
            <div class="row">
                <div class="col">
                    <ul>
                        <li class="nav-item" v-for='(item, id) in menu' :key='id'>
                            <a :href="item.route">
                                {{ item.label }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
ul{
    list-style-type: none;
}
a{
    text-decoration: none;
}

</style>