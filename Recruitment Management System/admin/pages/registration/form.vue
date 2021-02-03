<template>
    <div class="container-fluid form-container">
        <div class="main">
            <div class="row">
                <div class="col-md-5">
                    <div class="appointment-form ml-md-5">
                        <h2>Registratin Form</h2>
                        <div class="form-group-2">
                            <!-- Name input -->
                                <label for="name">FullName<span style="color:red;">*</span></label>
                                    <input type="text" v-model="name" name="name" id="name" placeholder="Your FullName" required />
                                
                            <!-- Email input -->
                                <label for="email">Email<span style="color:red;">*</span></label>
                                    <input type="email" v-model="email" name="email" id="email" placeholder="Your Email" required />
                                
                            <!-- Age input -->
                                    <input type="number" v-model="age" name="age" id="age" placeholder="Your Age" />
                                
                            <!-- Birthday input -->
                            <label for="birthday">Birthday<span style="color:red;">*</span></label>
                            <input type="date" v-model="birthday" name="birthday" id="birthday" placeholder="Your Birthday " required/>
                            <!-- Gender input -->
                            <label for="gender">Gender<span style="color:red;">*</span></label>
                            <div class="form-row">
                                <label for="male">Male</label>
                                <input type="radio" v-model="gender" value="male" name="gender" id="male" required>
                                
                                <label for="female">Female</label>
                                <input type="radio" v-model="gender" value="female" name="gender" id="female" required>
                                
                            </div>
                            
                            <!-- CV input -->
                            <label for="cv">CV<span style="color:red;">*</span></label>
                                <input type="file" @change="onSelectedFile" name="cv" id="cv" placeholder="Your CV" required />
                                <p>{{ fileName }}</p>
                            
                            <!-- phone input -->
                            <label for="phone">Phone<span style="color:red;">*</span></label>
                            <input type="number" v-model="phone" name="phone" id="phone" placeholder="Phone number" required />
                            
                        </div>
                        <br><br>
                        <div class="form-submit">
                            <!-- submit input -->
                            <input type="submit" @click="onAddEmployee" id="submit" class="submit" value="Request an appointment" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    layout: "none",
    data() {
        return {
            name: "",
            email: "",
            age: "",
            gender: "",
            fileName: "",
            phone: "",
            birthday: "",
            selectedFile: null

        }
    },
    async asyncData({$axios}) {
        try{
            const userResponse = await $axios.$get('http://localhost:3000/api/employees')
            const adminResponse = await $axios.$get('http://localhost:3000/api/user')

            return {
                users: userResponse.user,
                admins: adminResponse.admin
            }
        } catch(err) {
            console.log(err)
        }
    },
    methods: {
        onSelectedImage(event) {
            this.selectedFile = event.target.files[0]
            this.imageName = event.target.files[0].name
            console.log(this.selectedFile);
        },
        onSelectedFile(data) {
            this.selectedFile = data.target.files[0]
            this.fileName = data.target.files[0].name
            console.log(this.selectedFile);
        },
        async onAddEmployee() {
            try {
                const data = new FormData()
                data.append('name', this.name)
                data.append('email', this.email)
                data.append('age', this.age)
                data.append('gender', this.gender)
                data.append('cv',  this.selectedFile, this.selectedFile.name)
                data.append('phone', this.phone)
                data.append('birthday', this.birthday)
                console.log("-----------",this.name)
                console.log("-----------",data)

                await this.$axios.$post(
                    'http://localhost:3000/api/employees',
                    data
                )

                this.name= ""
                this.email= ""
                this.age= ""
                this.gender= ""
                this.fileName= ""
                this.phone= ""
                this.birthday= ""
                this.selectedFile= null

                const updateUser = await this.$axios.$get('http://localhost:3000/api/employees')
                this.users = updateUser.users

                console.log("--------done---")
            }catch(err) {
                console.log(err)
            }
        }
    }
}
</script>

<style scoped>

</style>