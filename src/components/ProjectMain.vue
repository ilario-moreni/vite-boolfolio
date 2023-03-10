<script>
import axios from 'axios';
export default {
    name: 'ProjectMain',
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
                    <div class="card-img-top">
                        <img :src="projects.file_img != null ? projects.file_img : ''" alt="" class="img-fluid">
                    </div>
                    <div class="card-title">
                        {{project.title}}
                    </div>
                    <div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">{{project.budget}}&euro;</li>
                            <li class="list-group-item">{{project.members_num}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

</template>
<style lang="scss" scoped>
    
</style>