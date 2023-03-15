<script>
import axios from 'axios';
import {store} from '../store';
export default {
    name: 'Contacts',
    data(){
        return{
            name: '',
            surname: '',
            phone: '',
            email: '',
            message: '',
            errors: '',
            loading: false,
            /* store */
            store,
        }
    },
    methods:{
        sendForm(){
            /* acquisizione dati v-model in variabile contact_data */
            const contact_data = {
                name: this.name,
                surname: this.surname,
                phone: this.phone,
                email: this.email,
                message: this.message,
            }
            this.loading = true;
            /* chiamata api di invio */
            axios.post(`${this.store.baseUrl}/api/contacts`, contact_data).then((response) => {
                if(!response.data.success){
                    this.errors = response.data.errors
                    this.loading = false;
                }else{
                    this.loading = false;
                    this.name = '';
                    this.surname = '';
                    this.phone = '';
                    this.email = '';
                    this.message = '';
                    this.$router.push({ 'name': 'thank-you' });
  
                    
                }
            })

            
        }
    }
}
</script>
<template lang="">
    <div>

    </div>
    <!-- form -->
    <div class='container-fluid p-5 bg_form'>
        <form @submit.prevent="sendForm">
            <div class="row pt-5">
                <div class="col">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Name</span>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" v-model='name'>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Surname</span>
                        <input type="text" class="form-control" placeholder="Surname" aria-label="Surname" aria-describedby="basic-addon1" v-model='surname'>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Phone</span>
                        <input type="number" class="form-control" placeholder="es. 3334445566"  aria-describedby="basic-addon1" v-model='phone'>
                    </div>
                </div>
                <div class="col">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Email</span>
                        <input type="email" class="form-control" placeholder="@mail" aria-label="@mail" aria-describedby="basic-addon1" v-model='email'>
                    </div>
                </div>
            </div>
            <div class="input-group pb-5">
                <span class="input-group-text">Message</span>
                <textarea class="form-control" aria-label="With textarea" v-model='message'></textarea>
            </div>
            <div class="col-12 justify-content-end d-flex">
                <button class="btn btn-success" type="submit" :disabled="loading">{{loading ? 'Wait please' : 'submit'}}</button>
            </div>
        </form>
    </div>
</template>
<style lang="scss" scoped>

.bg_form{
    background-color: rgb(255, 226, 81);
}
    
</style>