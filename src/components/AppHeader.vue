<script>
export default {
    name: 'AppHeader',
    data(){
        return{
            menu: [
            {
                    label: 'Home',
                    route: 'homepage'
                },
                {
                    label: 'Projects',
                    route: 'projects'
                },
                {
                    label: 'Contacts',
                    route: 'contacts'
                }
            ]
        }
    }
}
</script>
<template lang="">
    <div class="navbar my_nav">
        <div class="container py-3">
            <div class="row">
                <div class="col">
                    <ul class='d-flex'>
                        <li class="nav-item me-3" v-for='(item, id) in menu' :key='id'>
                            <router-link :to="{ name: item.route }" class=''>
                                {{ item.label }}
                            </router-link>
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