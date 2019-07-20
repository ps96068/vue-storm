<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Create new ad</h1>
                <v-form
                        ref="form"
                        v-model="valid"
                        validation
                        class="mb-3"
                >
                    <v-textarea
                            label="Ad title"
                            name="title"
                            type="text"
                            v-model="title"
                            required
                            :rules="[v => !!v || 'Title is required']"
                    ></v-textarea>
                    <v-textarea
                            name="description"
                            label="Ad description"
                            type="text"
                            v-model="description"
                            multi-line
                            required
                            :rules="[v => !!v || 'Title is required']"
                    ></v-textarea>
                </v-form>
                <v-layout row class="mb-3">
                    <v-flex xs12>
                        <v-btn class="warning">
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>

                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                                v-model="promo"
                                label="Add to promo"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                           :disabled = "!valid"
                           class="success"
                           v-on:click="createAd"
                        >Create ad</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                title: '',
                description: '',
                promo: false,
                valid: false
            }
        },
        methods: {
            createAd() {
                if (this.$refs.form.validate()) {
                    // logic
                    const ad = {
                        title: this.title,
                        description: this.description,
                        promo: this.promo,
                        imageSrc: 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-300.png'
                    }

                    this.$store.dispatch('createAd', ad)
                }
            }
        }
    }
</script>

<style scoped>

</style>
