<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectMain',
    components:{
        ProjectCard,
    },
    data(){
        return{
            projects: [],
            loading: true,
            baseUrl: 'http://127.0.0.1:8000',

        }
    },
    methods:{
        getProjects(){
            this.loading = true;
            axios.get(`${this.baseUrl}/api/projects`).then((response) => {
                console.log(response);
                this.projects = response.data.projects;
                this.loading = false;
                console.log(this.projects)
            });
        }
    },
    mounted(){
        this.getProjects();
    }
}
</script>
<template lang="">
    
        <div v-if='loading'>
            <div class="loader">

            </div>
        </div>
        <div  v-else class='container'>

            <div class='d-flex row g-3'>
                <div v-for='project in projects' class="card card-body col-3 mx-2" :key="project.id">
                    <ProjectCard :project='project' :baseUrl='baseUrl' />
                </div>
            </div>
        </div>

</template>
<style lang="scss" scoped>
    
</style>