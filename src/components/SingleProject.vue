<script>
import { store } from '../store';
import axios from 'axios';
export default {
    name: 'SingleProject',
    data(){
        return{
            store,
            project: '',
        }
    },
    mounted(){
        axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
            this.project = response.data.project;
            
        });
    }
}
</script>
<template lang="">
    <div class='container my_detail_project'>
        <div>
            <h3 class='pt-3'>
                {{project.title}}
            </h3>
        </div>
        <hr>
        <div>
            Budget: {{project.budget}}&euro;
        </div>
        <hr>
        <div>
            Number of partecipants: {{project.members_num}}
        </div>
        <hr>
        <div class='pb-3 pe-3'>
            <div class='mb-3'>Project:</div>
            {{project.description}}
        </div>
    </div>
</template>
<style lang="scss" scoped>

    h3{
        margin: 0;
    }
    .my_detail_project{
        border: 3px solid rgb(158, 23, 23);
        background-color: rgb(255, 249, 249);
        border-radius: 10px;
    }
</style>