<template>
    <nav id="sidebar">
        <div class="sidebar-header">
            <a href="#" class="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">CodeToInspire</a>
            <div class="bottom-border pb-3">
            <img src="/images/admin.png" width="50" class="rounded-circle mr-3">
            <a href="#" class="text-white">Marjan Sadat</a>
            </div>
        </div>

        <ul class="list-unstyled components">
            <li class="active nav-item"><a href="#" class="nav-link text-white p-3 mb-2 current"><i class="fas fa-home text-light fa-lg mr-3"></i>Dashboard</a></li>
            
            <li class="nav-item">
                        <nuxt-link to="/student">Student</nuxt-link>
            </li>
                    
               <li class="nav-item">
                        <nuxt-link to="/teacher">Teacher</nuxt-link>
            </li>
                           
            <li class="nav-item">
                <nuxt-link to="/exam" >Exam</nuxt-link>
            </li>
            
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>