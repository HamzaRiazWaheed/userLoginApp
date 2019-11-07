<template>
    <div class="user-page">
        <div class="main-title">Your Info</div>
        <div class="users-info-block">
            <div class="a-user-info-block">
                <h3>Name</h3>
                <span>{{name}}</span>
            </div>
            <div class="a-user-info-block">
                <h3>Address</h3>
                <span class="span-button edit-button" @click="editAddress=!editAddress">{{editControl}}</span>
                <div v-if="editAddress" class="edit-block">
                    <div class="a-edit-block">
                        <div class="label">Street Name</div>
                        <input type="text" v-model="userFullInfo.address.streetName">
                    </div>
                    <div class="a-edit-block">
                        <div class="label">Street Address</div>
                        <input type="text" v-model="userFullInfo.address.streetAddress">
                    </div>
                    <div class="a-edit-block">
                        <div class="label">Zip code</div>
                        <input type="text" v-model="userFullInfo.address.zipCode">
                    </div>
                    <div class="a-edit-block">
                        <div class="label">Country</div>
                        <input type="text" v-model="userFullInfo.address.countryCode">
                    </div>
                    <div class="submit-block">
                        <span class="span-button button-save" @click="saveUserData">Save</span>
                    </div>
                </div>
                <span v-else v-html="fullAddress"></span>
            </div>
        </div>

    </div>
</template>
<script>
    import store from '../store';
    import axios from 'axios';
    import {
        mapState
    } from 'vuex';

    export default {
        name: 'userPage',
        data() {
            return {
                editAddress: false,
            }
        },
        computed: {
            ...mapState([
                'userFullInfo',
            ]),
            name() {
                return this.userFullInfo.firstName + ' ' + this.userFullInfo.lastName;
            },
            fullAddress() {
                return this.userFullInfo.address.streetAddress + ' ' + this.userFullInfo.address.streetName + ' ' + this
                    .userFullInfo.address.zipCode + ' ' + this.userFullInfo.address.countryCode;
            },
            editControl() {
                return this.editAddress ? 'cancel' : 'edit';
            }

        },
        methods: {
            saveUserData() {
                console.log('save user data')
                store.dispatch('UPDATE_USER_INFO', this.userFullInfo).then(res =>  this.editAddress = false).catch(err => console.log(err))
               
            }
        }
    }
</script>
<style lang="scss" scoped>
    .user-page {
        position: relative;

        .a-user-info-block {
            position: relative;

            .edit-button {
                position: absolute;
                right: 0;
                top: 0;
            }
        }

        .a-edit-block {
            margin-bottom: 10px;
            font-size: 13px;

            .label {
                font-style: italic;
            }

            input {
                border: none;
                padding: 5px;
                background-color: #d3d3d3;
            }
        }

        .submit-block {
            text-align: right;
        }
    }
</style>