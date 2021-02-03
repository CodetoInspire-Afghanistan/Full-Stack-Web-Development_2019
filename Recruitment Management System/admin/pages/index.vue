<template>
    <div>
        <!-- Title page -->
        <div class="row">
            <div class="col">
                <div class="jumbotron">
                    <h1 class="display-4">Properties Of New Employee</h1>
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
                            <th scope="col">Name</th>
                            <th scope="col">Properties</th>
                            <th scope="col" class="d-none d-sm-table-cell">Curriculum Vitae</th>
                            <th scope="col" class="d-none d-sm-table-cell">Send an Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(employee, index) in employees" :key="employee._id">
                            <th scope="row">{{ index+1 }}</th>
                            <td>{{ employee.name }}</td>
                            <td>
                                <button type="button" @click="onViewemployee(employee._id)" class="btn btn-outline-warning" data-toggle="modal" data-target="#viewModal">More...</button>
                               
                                <div class="d-block d-sm-none">
                                    <div>
                                        <button @click="previewCv = employee.cv" type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#cvModal">Open_CV</button>
                                    </div>
                                    <div>
                                        <p>Send Email</p>
                                        <!-- Confirmation -->
                                        <a href="" class="btn" title="Accept" @click="onAcceptEmail(employee._id, index)"><i class="fa fa-check" style="color: #96d999;"></i></a>
                                        <br>
                                         <!-- Rejection -->
                                        <a href="" class="btn" title="Reject" @click="onRejectEmail(employee._id, index)"><i class="fa fa-times" style="color: #e04343;"></i></a>
                            
                                    </div>
                                </div>
                            
                            </td>
                            <td class="d-none d-sm-table-cell"><button @click="previewCv = employee.cv" type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#cvModal">Open_CV</button></td>
                            
                            <td class="d-none d-sm-table-cell">
                                <!-- Confirmation -->
                                <button class="btn" title="Accept" :disabled="employee.sendEmail == 'true'" @click="onAcceptEmail(employee._id, index)"><i class="fa fa-check" style="color: #96d999;"></i></button>
                                <!-- Rejection -->
                                <button class="btn" title="Reject" :disabled="employee.sendEmail == 'true'" @click="onRejectEmail(employee._id, index)"><i class="fa fa-times" style="color: #e04343;"></i></button>
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
                <h5 class="modal-title" id="viewModalLabel">More information about employee</h5>
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
                                            <label class="col-form-label">{{ employeeDetails.cv }}</label>
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

        <!-- open cv Modal -->
        <div class="modal fade" id="cvModal" tabindex="-1" role="dialog" aria-labelledby="cvModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="cvModalLabel">Curriculum Vitae</h5>
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
                                            <iframe :src="previewCv" frameBorder="0" scrolling="auto" width="100%" height="500px"></iframe>
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
            employeeDetails: null,
            previewCv: null,
             disabled: 0
        }
    },
    computed: {
        classObject: function () {
            return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    },
    async asyncData({$axios}) {
        try{
            const employeeResponse = await $axios.$get('http://localhost:3000/api/employees')
                console.log(employeeResponse.employees)
            return {
                employees: employeeResponse.employees,
                employeeDetails: null,
                employeeEmail: null
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
                    console.log("This is just for test",employeeResponse.employees)
                this.employeeDetails = employeeResponse.employees
            } catch(err) {
                console.log(err)
            }
        },
        async onAcceptEmail(id, index) {
            try {
                const result = await this.$axios.$get('http://localhost:3000/api/sendemail/'+id)

                const data = new FormData()
                data.append('sendEmail', "true")
                data.append('status', "accept")
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
                const result = await this.$axios.$get('http://localhost:3000/api/sendRejectEmail/'+id)

                const data = new FormData()
                data.append('sendEmail', "true")
                data.append('status', "reject")

                const commentResponse = await this.$axios.$put(
                    'http://localhost:3000/api/sent/'+id, 
                    data
                    )

            } catch (err) {
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