<template>
    <div>
        <!-- Title page -->
        <div class="row">
            <div class="col">
                <div class="jumbotron">
                    <h1 class="display-4">Interview Level</h1>
                </div>
            </div>
        </div>

        <!-- Table -->
        <div class="row">
            <div class="col px-5 pt-5">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">FUll Name</th>
                            <th scope="col">Properties</th>
                            <th scope="col" class="d-none d-sm-table-cell">Curriculum Vitae</th>
                            <th scope="col" class="d-none d-sm-table-cell">Your Reason for choose this Employee</th>
                            <th scope="col" class="d-none d-sm-table-cell">Send an Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(employee, index) in employees" :key="employee._id">
                            <th scope="row">{{ index+1 }}</th>
                            <td>{{ employee.name }}</td>
                            <td>
                                <button type="button" @click="onViewemployee(employee._id)" class="btn btn-outline-warning d-none d-sm-table-cell" data-toggle="modal" data-target="#viewModal">More...</button>
                                
                                <div class="d-block d-sm-none">
                                    <div>
                                        <button @click="previewCv = employee.cv" type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#cvModal">Open_CV</button>
                                    </div>

                                     <div class="form-group row">
                                        <div class="col-sm-9">
                                            <button v-if="employee.comment ==''" @click="onViewComment(employee._id)" type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#addModal">Add</button>
                                            <button v-else @click="onViewComment(employee._id)" type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#addModal">Edit</button>
                                            <p>{{ employee.comment }}</p>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <p>Send Email</p>
                                        <!-- Confirmation -->
                                        <a href="" class="btn" title="Accept" @click="onAcceptEmail(employee._id, index)"><i class="fa fa-check" style="color: #96d999;"></i></a>
                                            <!-- Rejection -->
                                        <a href="" class="btn" title="Reject" @click="onRejectEmail(employee._id, index)"><i class="fa fa-times" style="color: #e04343;"></i></a>
                                    </div>
                                </div>
                            </td>

                            <td class="d-none d-sm-table-cell"><button @click="previewCv = employee.cv" type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#cvModal">Open_CV</button></td>
                             
                            <td class="d-none d-sm-table-cell">
                                <!-- <textarea v-model="comment" name="type" type="text" class="form-control form-control-sm" id="comment" cols="50" rows="1"></textarea> -->
                                <!-- <input  type="button" value="add"> -->
                                <button v-if="employee.comment ==''" @click="onViewComment(employee._id)" type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#addModal">Add</button>
                                <button v-else @click="onViewComment(employee._id)" type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#addModal">Edit</button>
                                <!-- <input v-else type="button" @click="onViewComment(employee._id)" value="edit"> -->  
                                <p>{{ employee.comment }}</p>
                            </td>

                            <td class="d-none d-sm-table-cell">
                                <!-- Confirmation -->
                                <button class="btn" title="Accept" :disabled="(employee.status == 'accepted') || (employee.status == 'failed')" @click="onAcceptEmail(employee._id, index)"><i class="fa fa-check" style="color: rgb(16 224 64 / 90%);"></i></button>
                                <!-- Rejection -->
                                <button class="btn" title="Reject" :disabled="(employee.status == 'failed') || (employee.status == 'accepted')" @click="onRejectEmail(employee._id, index)"><i class="fa fa-times" style="color: #e04343;"></i></button>
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        
        <!-- More information Modal -->
        <div class="modal fade" id="viewModal" tabindex="-1" role="dialog" aria-labelledby="viewModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content" v-if="employeeDetails">
                <div class="modal-header">
                    <h5 class="modal-title" id="viewModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row px-md-5">
                        <div class="col px-md-5">
                            <form class="px-md-5" style="padding: 0 !important;">
                                <div class="row">
                                    <div class="col-9">
                                        <!-- Name input -->
                                        <div class="form-group row">
                                            <label class="col-4 col-form-label">Full Name</label>
                                            <div class="col-8">
                                                <label class="col-form-label">{{ employeeDetails.name }}</label>
                                            </div>
                                        </div>

                                        <!-- Email input -->
                                        <div class="form-group row">
                                            <label class="col-4 col-form-label">Email</label>
                                            <div class="col-8">
                                                <label class="col-form-label">{{ employeeDetails.email }}</label>
                                            </div>
                                        </div>

                                        <!-- Age input -->
                                        <div class="form-group row">
                                            <label class="col-4 col-form-label">Age</label>
                                            <div class="col-8">
                                                <label class="col-form-label">{{ employeeDetails.age }}</label>
                                            </div>
                                        </div>

                                        <!-- birthday input -->
                                        <div class="form-group row">
                                            <label class="col-4 col-form-label">Birthday</label>
                                            <div class="col-8">
                                                <label class="col-form-label">{{ employeeDetails.birthday }}</label>
                                            </div>
                                        </div>

                                        <!-- Gender input -->
                                        <div class="form-group row">
                                            <label class="col-4 col-form-label">Gender</label>
                                            <div class="col-8">
                                                <label class="col-form-label">{{ employeeDetails.gender }}</label>
                                            </div>
                                        </div>

                                        <!-- cv input -->
                                        <div class="form-group row">
                                            <label class="col-4 col-form-label">CV</label>
                                            <div class="col-8">
                                                <label class="col-form-label">pdf</label>
                                            </div>
                                        </div>

                                        <!-- phone input -->
                                        <div class="form-group row">
                                            <label class="col-4 col-form-label">Phone</label>
                                            <div class="col-8">
                                                <label class="col-form-label">{{ employeeDetails.phone }}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
        <!-- Comment Modal -->
        <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="commentModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content" v-if="employeeComment">
                <div class="modal-header">
                    <h5 class="modal-title" id="commentModalLabel">Comment</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row px-md-5">
                        <div class="col px-md-5">
                            <form class="px-md-5" style="padding: 0 !important;">
                                <div class="row">
                                    <div class="col-12">
                                        <!-- input -->
                                        <div class="form-group row">
                                            <label class="col-4 col-form-label">Write your reason to choose this employee</label>
                                            <div class="col-8">
                                                <textarea v-model="employeeComment.comment" class="form-control form-control-sm" id="comment" cols="50" rows="5"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button @click="commentUpdate(employeeComment._id)" type="button" class="btn btn-warning" style="color: white;">Update</button>
                </div>
                </div>
            </div>
        </div>
        <!-- open cv Modal -->
        <div class="modal fade" id="cvModal" tabindex="-1" role="dialog" aria-labelledby="cvModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="cvModalLabel">Modal title</h5>
                <button @click="previewCv = null" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col">
                        <form class="px-md-5" style="padding: 0 !important;">
                            <div class="row">
                                <div class="col-12">
                                    <!-- cv input -->
                                    <div class="form-group row">
                                        <div class="col-12">
                                            <iframe :src="previewCv" width="100%" height="500px"></iframe>
                                            <!-- <embed src="images/employeeDetails.cv" width="100%" height="500px" /> -->
                                            <!-- <label class="col-form-label">{{ employeeDetails.cv }}</label>  -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button @click="previewCv = null" type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            previewCv: null,
             disabled: 0
        }
    },
    async asyncData({$axios}) {
        try{
            const employeeResponse = await $axios.$get('http://localhost:3000/api/empaccept')
            const commentResponse = await $axios.$get('http://localhost:3000/api/employees')
            console.log("-----",employeeResponse.employees)
            return {
                employees: employeeResponse.employees,
                comment: commentResponse.updateEmployee,
                employeeDetails: null,
                employeeComment: null
            }
        } catch(err) {
            console.log(err)
        }
    },
    methods: {
        async onViewemployee(id) {
            try{
                console.log("clicked", id)
                const employeeResponse = await this.$axios.$get('http://localhost:3000/api/employees/'+id)
                    console.log("hhhhhhhhhhhhhhhhhhhhhhhh",employeeResponse.employee)
                this.employeeDetails = employeeResponse.employees
            } catch(err) {
                console.log(err)
            }
        },
        async onAcceptEmail(id, index) {
            try {
                const result = await this.$axios.$get('http://localhost:3000/api/sendAcceptInterviewEmail/'+id)

                
                const data = new FormData()
                data.append('sendEmail', "true")
                data.append('status', "accepted")
                const commentResponse = await this.$axios.$put(
                    'http://localhost:3000/api/sent/'+id, 
                    data
                    )
            } catch (err) {
                console.log(err)
            }
        },
        async onRejectEmail(id, index) {
            try {
                const result = await this.$axios.$get('http://localhost:3000/api/sendRejectInterviewEmail/'+id)

                const data = new FormData()
                data.append('sendEmail', "true")
                data.append('status', "failed")

                const commentResponse = await this.$axios.$put(
                    'http://localhost:3000/api/sent/'+id, 
                    data
                    )
            } catch (err) {
                console.log(err)
            }
        },
        async onViewComment(id) {
            try {
            //     data.append('comment', this.comment)
                const commentResponse = await this.$axios.$get('http://localhost:3000/api/employees/'+id)
                this.employeeComment = commentResponse.employees
                console.log("---------------------",commentResponse.employees)
                
                // const updateComment = await this.$axios.$get('http://localhost:3000/api/users')
                // this.comment = updateComment.comment
            } catch(err) {
                console.log(err)
            }
        },
        async commentUpdate(id) {
            try {
                const data = new FormData()
                data.append('comment', this.employeeComment.comment)
                // data.append('sendemail', 'true')

                const commentResponse = await this.$axios.$put(
                    'http://localhost:3000/api/employees/'+id, 
                    data
                    )
                
                $('#addModal').modal('hide')

                const updateComment = await this.$axios.$get('http://localhost:3000/api/employees')
                this.employeeComment = updateComment.employees   
                console.log("uuuuuuuuuuuuuuuuuuuuuuuuu",updateComment.employees)

            } catch(err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>
button:disabled {
    cursor: not-allowed !important;
}
</style>