<script>
export default {
    name: 'ThankYou'
}
</script>
<template lang="">
    <div class='container-fluid bg_form'>
        <div class="container py-5">
            <div class="row my-5">
                <div class="col-12 text-center">
                    <h2>Thanks for contacting us!</h2>
                    <router-link :to="{ name : 'homepage'}" class="btn btn-sm btn-success mt-5">Torna alla home</router-link>
                </div>
            </div>
            
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .bg_form{
        background-color: rgb(255, 226, 81);
    }
</style>