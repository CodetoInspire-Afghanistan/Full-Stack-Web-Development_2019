<template>
    <div>
        <!-- Title page -->
        <div class="row">
            <div class="col">
                <div class="jumbotron">
                    <h1 class="display-4">List of Employee</h1>
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
                            <th scope="col">FullName</th>
                            <th scope="col" class="d-none d-sm-table-cell">Age</th>
                            <th scope="col" class="d-none d-sm-table-cell">Email</th>
                            <th scope="col" class="d-none d-sm-table-cell">Birthday</th>
                            <th scope="col" class="d-none d-sm-table-cell">Gender</th>
                            <th scope="col" class="d-none d-sm-table-cell">phone</th>
                            <th scope="col">Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(employee, index) in employees" :key="employee._id">
                            <th scope="row">{{ index+1 }}</th>
                            <td>{{ employee.name }}</td>
                            <td class="d-none d-sm-table-cell">{{ employee.age }}</td>
                            <td class="d-none d-sm-table-cell">{{ employee.email }}</td>
                            <td class="d-none d-sm-table-cell">{{ employee.birthday }}</td>
                            <td class="d-none d-sm-table-cell">{{ employee.gender }}</td>
                            <td class="d-none d-sm-table-cell">{{ employee.phone }}</td>
                            <td><button @click="previewCv = employee.cv" type="button" class="btn btn-outline-warning" data-toggle="modal" data-target="#cvModal">Open_CV</button></td>
                        </tr>
                    </tbody>
                </table>
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
                                            <iframe :src="previewCv" width="100%" height="500px"></iframe>
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
            previewCv: null
        }
    },
     async asyncData({$axios}) {
        try{
            const employeeResponse = await $axios.$get('http://localhost:3000/api/mainemployees')

            return {
                employees: employeeResponse.employees,
                employeeDetails: null
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
                    console.log("This is just for test",employeeResponse.employee)
                this.employeeDetails = employeeResponse.employees
            } catch(err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>

</style>