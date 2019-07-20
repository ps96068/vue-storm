<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form
                           ref="form"
                           v-model="valid"
                           lazy-validation
                        >
                            <v-text-field
                               prepend-icon="person"
                               label="E-mail"
                               name="email"
                               type="email"
                               v-model="email"
                               required
                               :rules="emailRules"
                            ></v-text-field>
                            <v-text-field
                               prepend-icon="lock"
                               name="password"
                               label="Password"
                               type="password"
                               v-model="password"
                               :counter="6"
                               required
                               :rules="passwordRules"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                           color="primary"
                           @click="'onSubmit'"
                           :disabled="!valid"
                        >Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    // Validare simpla
    const mailRegex1 = /^.+@.+\..+$/i
    // Validare tare cool, tre de tzinut minte
    const mailRegex2 = /^\w.([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    export default {
        data (){
            return {
                valid: false,
                email: '',
                password: '',
                emailRules: [
                    v => !!v || 'E-mail este necesar',
                    v => mailRegex2.test(v) || 'SUKAAA, scrie email, da nu huinea!!!'
                ],
                passwordRules: [
                    v => !!v || 'Password este necesar',
                    v => (v && v.length >= 6) || 'Password tre sa aiba 6 caratcere',
                ]
            }
        },
        method: {
            onSubmit() {
                if (this.$refs.form.validate()) {
                    const user = {
                        email: this.email,
                        password: this.password
                    }
                    print(this.user)
                }
            }
        }
    }

</script>

<style scoped>

</style>
