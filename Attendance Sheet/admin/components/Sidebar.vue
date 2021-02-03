<template>
    		<nav id="sidebar"  >
				<div class="p-4 pt-5">
		  		<nuxt-link to="/user/profile" class="img logo rounded-circle mb-5" ><img :src="$auth.$state.user.photo" alt=" product image"  width="100% "  class="rounded-circle mr-3" ></nuxt-link>
	        <ul class="list-unstyled components mb-5">
	       
	           
                <li  class="active">
                    <nuxt-link to="/user/addClass">Add Class</nuxt-link>
                </li>
               
                <li>
                    <nuxt-link to="/user/addStudent">Add Student</nuxt-link>

                </li>
	           
	         
	           <li>
                    <nuxt-link to="/user/f_student">Student Attedance</nuxt-link>
	          </li>
			   <li>
                    <nuxt-link to="/user/studentTable">Student List</nuxt-link>
	          </li>
	         
<!--
            <li>
	              <nuxt-link to="/user/signup">Signup</nuxt-link>
	          </li>
             <li>
	              <nuxt-link to="/user/login">Login</nuxt-link>
	          </li>
            -->
	        </ul>

	       

	      </div>
    	</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>