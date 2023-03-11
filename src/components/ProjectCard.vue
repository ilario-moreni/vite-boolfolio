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
        </ul>
    </div>
                
</template>
<style lang="">
    
</style>