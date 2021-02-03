<template>
  <div>
      <!-- title page -->
      <div class="row">
          <div class="col">
              <h3 class="display-4">Properties of Patients</h3>
          </div>

      </div>
      <!-- form -->
      <div class="row px-md-5">
          <div class="col px-5">
              <form class="px-md-5">
                  <!-- title input -->
                  <div class="form-group row">
                     <label for="name" class="col-sm-3 col-form-label">Name</label>
                       <div class="col-sm-9">
                        <input v-model="Name" type="text" class="form-control" id="name" placeholder="name">
                        </div>
                  </div>
                  <!-- title input -->
                  <div class="form-group row">
                     <label for="LastName" class="col-sm-3 col-form-label">LastName</label>
                       <div class="col-sm-9">
                        <input v-model="LastName" type="text" class="form-control" id="LastName" placeholder="LastName">
                        </div>
                  </div>
                   <!-- title input -->
                  <div class="form-group row">
                     <label for="Phone" class="col-sm-3 col-form-label">Phone</label>
                       <div class="col-sm-9">
                        <input v-model="Phone" type="num" class="form-control" id="Phone" placeholder="Phone">
                        </div>
                  </div>
                   <!-- title input -->
                  <div class="form-group row">
                     <label for="Occupation" class="col-sm-3 col-form-label">Occupation</label>
                       <div class="col-sm-9">
                        <input v-model="Occupation" type="text" class="form-control" id="Occupation" placeholder="Occupation">
                        </div>
                  </div>
                   <!-- title input -->
                  <div class="form-group row">
                     <label for="Problems" class="col-sm-3 col-form-label">Problems</label>
                       <div class="col-sm-9">
                        <input v-model="Problems" type="text" class="form-control" id="Problems" placeholder="Problems">
                        </div>
                  </div>
                   <!-- dp dropdown -->
                <div class="form-group row">
                    <label for="DoctorId" class="col-sm-3 col-form-label col-form-label-sm">Doctor</label>
                    <div class="col-sm-9">
                    <select v-model="DoctorId" class="form-control form-control-sm" id="DoctorId" >
                        <option value="ah">ahmad </option>
                        <option value="ali">ali </option>
                    </select>
                    </div>
                </div>
                  <!-- title input -->
                  <div class="form-group row">
                     <label for="Date" class="col-sm-3 col-form-label">Date</label>
                       <div class="col-sm-9">
                        <input v-model="Date" type="Date" class="form-control" id="Date" placeholder="Date">
                        </div>
                  </div>
                   <!-- title input -->
                  <fieldset class="form-group">
                      <div class="row">
                        <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                        <div class="col-sm-10">
                          <div class="form-check">
                            <input v-model="Gender" class="form-check-input" type="radio" name="Gender" id="gridRadios1" value="option1" checked>
                            <label class="form-check-label" for="gridRadios1">
                              Femal
                            </label>
                          </div>
                          <div class="form-check">
                            <input v-model="Gender" class="form-check-input" type="radio" name="Gender" id="gridRadios2" value="option2">
                            <label class="form-check-label" for="gridRadios2">
                              Male
                            </label>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  <button @click="onAddpatient" type="button" class="btn btn-primary">Save</button>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {

   data(){
    return{
      Name:"",
      LastName:"",
      Phone:0,
      Occupation:"",
      Problems:"",
      DoctorId:"",
      Date:0,
      Gender:""

    }
  },
  //  async asyncData({$axios}){
  //   try{
  //     const patientResponse = await $axios.$get('http://localhost:3000/api/patient')

  //     return{
  //       patient : patientsResponse.patient
  //     }

  //   }catch(err){
  //     console.log(err)

  //   }
  //  },
methods: {
async onAddpatient(){
  try{
    const data = {
    'Name':  this.Name,
    'LastName': this.LastName,
    'Phone': this.Phone,
    'Occupation': this.Occupation,
    'Problems': this.Problems,
    'DoctorId': this.DoctorId,
    'Date': this.Date,
    'Gender': this.Gender
    }
    console.log("k-------",data)

    await this.$axios.$post(
      'http://localhost:3000/api/patient',
      data
    ) 

  }catch(err){
      console.log(err)

    }
}
}
}



</script>

<style>

</style>