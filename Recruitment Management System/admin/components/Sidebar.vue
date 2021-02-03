<template>
    <nav id="sidebar">
        <div class="p-4 pt-5">
            <div class="user-logo">
                <a href="#" class="img logo rounded-circle mb-5" style="background-image: url(/images/logo.jpg);"></a>

                    <nuxt-link v-if="$auth.$state.loggedIn" to="#" style="color: #f8b739;" class="ml-4"><h3>{{$auth.$state.user.name}}</h3></nuxt-link>
                    <nuxt-link v-else  style="color: #f8b739;" to="/login" class="ml-4"><h3>LogIn</h3></nuxt-link>

            </div>

            <ul class="list-unstyled components mb-5">
                <li>
                    <nuxt-link to="/" exact>New Employee</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/admin/interview" exact>Interview</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/admin/listOfEmployee" exact>List of Employee</nuxt-link>
                </li>
            </ul>

        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.nuxt-link-active {
    font-weight: bold;
    color: #f8b739 !important;
}
</style>