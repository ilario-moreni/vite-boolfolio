<script>
export default {
    name: 'ProjectCard',
    props:{
        project: Object,
        baseUrl: String,
    }
}
</script>
<template lang="">
        
    <div class="card-title">
        {{project.title}}
    </div>
    <div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">{{project.budget}}&euro;</li>
            <li class="list-group-item">{{project.members_num}}</li>
            <li>
                <router-link :to="{ name:'singleproject', params: { slug: project.slug} }" class='mt-4 btn btn-success'>
                Info</router-link>
            </li>
        </ul>
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