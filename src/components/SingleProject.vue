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
    <div>
        {{project.title}}
    </div>
</template>
<style lang="">
    
</style>