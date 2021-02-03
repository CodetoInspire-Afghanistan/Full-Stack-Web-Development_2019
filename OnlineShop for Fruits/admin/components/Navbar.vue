<template>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">

            <button type="button" id="sidebarCollapse" class="btn btn-primary">
              <i class="fa fa-bars"></i>
              <span class="sr-only">Toggle Menu</span>
            </button>
            <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>

                <!--  start Search button -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="nav navbar-nav ml-auto">
               <form>
                <div class="input-group">
                    <input type="text" class="form-control search-input" placeholder="Search...">
                    <button type="button" class="btn btn-white search-button"><i class="fas fa-search text-danger"></i></button>
                </div>
                </form>
                <!--  end Search button -->
              </ul>
            </div>
          </div>
        </nav>
</template>

<script>
export default {
    
}
</script>

<style>

</style>