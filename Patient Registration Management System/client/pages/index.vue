<template>
  <div>
      <div class="row">
      <div class="col px-5 pt-5">
          <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">LastName</th>
                <th scope="col">Phone</th>
                <th scope="col" class="d-none d-sm-table-cell">Occupation</th>
                <th scope="col">Problems</th>
                <th scope="col">Date</th>
                <th scope="col" class="d-none d-sm-table-cell">Gender</th>
                <th scope="col">Option</th>
            
                </tr>
            </thead>
            <tbody>
                <tr v-for="Patients in patient" :key="Patients._id">
                <th scope="row">1</th>
                <td>{{Patients.Name}}</td>
                <td>{{Patients.LastName}}</td>
                <td>{{Patients.Phone}}</td>
                <td  class="d-none d-sm-table-cell">{{Patients.Occupation}}</td>
                <td>{{Patients.Problems}}</td>
                <td>{{Patients.Date}}</td>
                <td  class="d-none d-sm-table-cell">{{Patients.Gender}}</td>
                <!-- <td>
                    <a class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-flag" style="color:#ffc107"></i></a>
                    <a class="custom-btn openEditModal" data-toggle="modal" data-target="#editModal"><i class="fa fa-facebook" style="color:#343a40"></i></a>
                    <a class="custom-btn"><i class="fa fa-trash" style="color:#dc3545"></i></a>
                </td> -->
                     <td>
                            <a @click="onviewProduct(product._id)" class="custom-btn openViewModal" data-toggle="modal" data-target="#viewModal"><i class="fa fa-flag" style="color: #ffc107"></i></a>
                            <a @click="onviewProduct(product._id)" class="custom-btn openEditModal " data-toggle="modal" data-target="#editModal"><i class="fa fa-edit" style="color: #343a40"></i></a>
                            <a @click="onDeleteProduct(product._id,index)" class="custom-btn"><i class="fa fa-trash" style="color: #dc3545"></i></a>
                    </td>
                  
                </tr>
            </tbody>
          </table>

      </div>
      </div>
<!-- view Modal -->
<div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="viewModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <form class="px-md-5">
                  <!-- title input -->
                  <div class="form-group row">
                     <label class="col-sm-4 col-form-label">Name</label>
                       <div class="col-sm-8">
                        <label class="col-form-label">Ahmad</label>
                        </div>
                  </div>
                  <!-- title input -->
                  <div class="form-group row">
                     <label for="LastName" class="col-sm-4 col-form-label">LastName</label>
                       <div class="col-sm-8">
                        <label class="col-form-label">Ahmadi</label>
                        </div>
                  </div>
                   <!-- title input -->
                  <div class="form-group row">
                     <label for="Phone" class="col-sm-4 col-form-label">Phone</label>
                       <div class="col-sm-8">
                        <label class="col-form-label">039832382</label>
                        </div>
                  </div>
                   <!-- title input -->
                  <div class="form-group row">
                     <label for="Occupation" class="col-sm-4 col-form-label">Occupation</label>
                       <div class="col-sm-8">
                        <label class="col-form-label">teacher</label>
                        </div>
                  </div>
                   <!-- title input -->
                  <div class="form-group row">
                     <label for="Problems" class="col-sm-4 col-form-label">Problems</label>
                       <div class="col-sm-8">
                        <label class="col-form-label">ncnncm</label>
                        </div>
                  </div>
                  <!-- title input -->
                  <div class="form-group row">
                     <label for="Date" class="col-sm-4 col-form-label">Date</label>
                       <div class="col-sm-8">
                        <label class="col-form-label">1399/5/3</label>
                        </div>
                  </div>
                   <!-- title input -->
                  <div class="form-group row">
                     <label for="Gender" class="col-sm-4 col-form-label">Gender</label>
                     <div class="form-check form-check-inline">
                        <label class="col-form-label">male</label>
                     </div>

                  </div>
              </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> 
      </div>
    </div>
  </div>
</div>

<!-- EditeModal -->
<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editModalLabel">Edit Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <div class="row px-md-5">
          <div class="col px-5">
              <form class="px-md-5">
                  <!-- title input -->
                  <div class="form-group row">
                     <label for="name" class="col-sm-3 col-form-label">Name</label>
                       <div class="col-sm-9">
                        <input type="text" class="form-control" id="name" placeholder="name">
                        </div>
                  </div>
                  <!-- title input -->
                  <div class="form-group row">
                     <label for="LastName" class="col-sm-3 col-form-label">LastName</label>
                       <div class="col-sm-9">
                        <input type="text" class="form-control" id="LastName" placeholder="LastName">
                        </div>
                  </div>
                   <!-- title input -->
                  <div class="form-group row">
                     <label for="Phone" class="col-sm-3 col-form-label">Phone</label>
                       <div class="col-sm-9">
                        <input type="num" class="form-control" id="Phone" placeholder="Phone">
                        </div>
                  </div>
                   <!-- title input -->
                  <div class="form-group row">
                     <label for="Occupation" class="col-sm-3 col-form-label">Occupation</label>
                       <div class="col-sm-9">
                        <input type="text" class="form-control" id="Occupation" placeholder="Occupation">
                        </div>
                  </div>
                   <!-- title input -->
                  <div class="form-group row">
                     <label for="Problems" class="col-sm-3 col-form-label">Problems</label>
                       <div class="col-sm-9">
                        <input type="text" class="form-control" id="Problems" placeholder="Problems">
                        </div>
                  </div>
                  <!-- title input -->
                  <div class="form-group row">
                     <label for="Date" class="col-sm-3 col-form-label">Date</label>
                       <div class="col-sm-9">
                        <input type="Date" class="form-control" id="Date" placeholder="Date">
                        </div>
                  </div>
                   <!-- title input -->
                  <div class="form-group row">
                     <label for="Gender" class="col-sm-3 col-form-label">Gender</label>
                     <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label" for="inlineCheckbox1">Femal</label>
                        </div>
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label" for="inlineCheckbox2">Male</label>
                     </div>

                  </div>
              </form>
          </div>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">Save</button>
      </div>
    </div>
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
      Date:0,
      Gender:""

    }
  },
  async asyncData({$axios}){
    try{
      const patientResponse = await $axios.$get('http://localhost:3000/api/patient')

      return{
        patient : patientResponse.patient
      }

    }catch(err){
      console.log(err)

    }
   },

 methods: {
    async Delete(id, index) {
      try {
        const result = await this.$axios.$delete('http://localhost:3000/api/patient/'+id)
        if(result.status) {
          this.products.splice(index, 1)
        }
      } catch (err) {
        console.log(err)
      }
    },
    async onviewPatient(id) {
      try {
        const productResponse = await this.$axios.$get('http://localhost:3000/api/patient/'+id)
        this.patientDetails = patientResponse.patient
      } catch(err) {
        console.log(err)
      }
    },
    async patientUpdate(id) {
      try {
        const data = new FormData()
        data.append('Name', this.patientDetails.Name)
        data.append('LastName', this.patientDetails.LastName)
        data.append('Phone', this.patientDetails.Phone)
        data.append('Occupation', this.patientDetails.Occupation)
        data.append('Problems', this.patientDetails.Problems)
        data.append('Doctor', this.patientDetails.Doctor)
        data.append('Date', this.patientDetails.Date)
        data.append('Gender', this.patientDetails.Gender)




      

        const patientResponse = await this.$axios.$put(
          'http://localhost:3000/api/patient/'+id,
          data
          )

        $('#editModal').modal('hide')

        const updatepatient = await this.$axios.$get('http://localhost:3000/api/patient')
        this.patient = updatepatient.patient

      } catch(err) {
        console.log(err)
      }
      }
  }
}

</script>

<style>

</style>