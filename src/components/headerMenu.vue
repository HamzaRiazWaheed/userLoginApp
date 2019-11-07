<template>
    <div class="header-wrapper">
        <div class="menu-wrapper">
            <div class="container">
                <div id="logo_home">
                    <router-link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" height="44" widht="83" viewBox="0 0 48 26">
                            <g>
                                <path id="HBL_logo" data-name="HBL logo" class="cls-1"
                                    d="M240.784,550.824V529.992h-5.94v26H248v-5.167h-7.217ZM210.2,540.035h-4.331V529.992H200v26h5.873V545.428H210.2v10.563h5.873v-26H210.2v10.043Zm19.72,2.294-0.145-.074,0.159-.143a4.573,4.573,0,0,0,3.441-4.466V535.7c0-6.3-6.981-5.694-6.981-5.694H218.04v25.972h9.281s6.561,0.514,6.561-5.82v-2.43C233.882,542.62,229.923,542.329,229.923,542.329ZM224,535.038c0.878-.029,1.8,0,1.8,0a2.129,2.129,0,0,1,2.014,1.461,7.614,7.614,0,0,1,.014,2.285,1.611,1.611,0,0,1-1.561,1.29,15.144,15.144,0,0,1-2.263.057v-5.093Zm4.159,14.267a1.73,1.73,0,0,1-1.706,1.473s-0.907.049-2.453-.008V544.6c0.952-.033,1.946,0,1.946,0a2.255,2.255,0,0,1,2.235,1.863A11.409,11.409,0,0,1,228.155,549.3Z"
                                    transform="translate(-200 -530)"></path>
                            </g>
                        </svg>
                    </router-link>
                </div>
                <div id="nav-container">
                    <ul class="main-menu">
                        <li id="menu-item-main">
                            <a class="toggle-menu" href="#">
                                <svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1"
                                    viewBox="0 0 32 32" width="32px" xml:space="preserve"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <path
                                        d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z">
                                    </path>
                                </svg>
                                Meny
                            </a>
                        </li>

                        <li id="menu-item-7378" class="nav_menu_item  hidden-xs hidden-sm"><a
                                href="https://www.hbl.fi/nyheter/">Nyheter</a></li>
                        <li id="menu-item-164910" class="nav_menu_item  hidden-xs hidden-sm"><a
                                href="https://www.hbl.fi/livsstil/">Livsstil</a></li>
                        <li id="menu-item-7209" class="nav_menu_item  hidden-xs hidden-sm"><a
                                href="https://www.hbl.fi/opinion/">Opinion</a></li>
                        <li id="menu-item-414" class="nav_menu_item  hidden-xs hidden-sm"><a
                                href="https://www.hbl.fi/kultur/">Kultur</a></li>
                        <li id="menu-item-484" class="nav_menu_item  hidden-xs hidden-sm"><a
                                href="https://www.hbl.fi/sport/">Sport</a></li>
                        <li id="menu-item-183928" class="nav_menu_item  hidden-xs hidden-sm"><a
                                href="https://www.hbl.fi/bloggar-poddar/">Poddar</a></li>
                        <li id="menu-item-28128" class="nav_menu_item  hidden-xs hidden-sm"><a
                                href="https://www.hbl.fi/epaper/">E-tidningen</a></li>
                        <li id="menu-item-203485" class="nav_menu_item  hidden-xs hidden-sm"><a
                                href="https://www.hbl.fi/lucia2019/">Lucia 2019</a></li>
                    </ul>
                    <div class="ksf-main-nav-right">
                        <div class="ksf-user-login">
                            <ul class="user ">
                                <li class="user-login"> 
                                    <span class="login-button" @click="loginControl()"> 
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"
                                            width="17.5" height="15" viewBox="0 0 17.5 15" class="user-icon">
                                            <path
                                                d="M15.298,11.312 C14.231,10.837 12.683,9.638 10.361,9.246 C10.947,8.604 11.407,7.632 11.867,6.476 C12.118,5.795 12.077,5.214 12.077,4.409 C12.077,3.788 12.202,2.837 12.035,2.297 C11.533,0.502 10.235,0.006 8.729,0.006 C7.202,0.006 5.905,0.502 5.403,2.297 C5.257,2.837 5.361,3.809 5.361,4.409 C5.361,5.214 5.319,5.795 5.591,6.476 C6.052,7.632 6.491,8.625 7.097,9.246 C4.796,9.658 3.227,10.858 2.182,11.312 C0.006,12.262 0.006,13.316 0.006,13.316 L0.006,15.001 L17.495,15.001 L17.495,13.316 C17.495,13.316 17.474,12.262 15.298,11.312 Z"
                                                class="cls-1"></path>
                                        </svg> 
                                        <span>{{ loginText }}</span>
                                    </span>
                                </li>
                                <li class="user-advertise"> <a href="http://mediekortet.ksfmedia.fi/">Annonsera</a>
                                </li>
                                <li class="user-subscribe"> <a
                                        href="http://prenumerera.ksfmedia.fi/#/hbl">Prenumerera</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        mapState
    } from 'vuex';
    import store from '../store';

    export default {
        name: 'headerMenu',
        data(){
            return {
            }
        },
        computed: {
            ...mapState([
                'loggedIn',
            ]),
            loginText(){
                return this.loggedIn ? 'Logout' : 'Login';
            }
        },
        methods: {
            loginControl() {
                console.log( this.loggedIn)
                this.loggedIn ? this.signOut() : this.signIn();
            },
            signOut() {
                console.log('signout')
                store.commit('CHANGE_LOGIN_STATUS', {
                    status: false
                })
            },
            signIn() {
                console.log('signIn')
                store.commit('CHANGE_SHOW_LOGIN_FORM', {
                    status: true
                })
                console.log(store)
            },
        }

    }
</script>

<style lang="scss" scoped>
    .header-wrapper {
        width: 100%;
        min-height: 104px;
        min-width: 320px;
        background: #fff;
        position: absolute;

        a {
            text-decoration: none;
        }

        .menu-wrapper {
            overflow: auto;
            position: relative;
            z-index: 11000;
            border-top: 10px solid #f07e26;
            -webkit-transition: max-height 0.5s;
            -moz-transition: max-height 0.5s;
            -o-transition: max-height 0.5s;
            transition: max-height 0.5s;

            .container {
                padding: 15px 0;
                width: 940px;
                background: #fff;
                -webkit-transition: all 0.2s ease-out;
                -moz-transition: all 0.2s ease-out;
                -o-transition: all 0.2s ease-out;
                transition: all 0.2s ease-out;
                margin: auto;

                #logo_home {
                    height: 60px;
                    -webkit-transition: all 0.2s ease-out;
                    -moz-transition: all 0.2s ease-out;
                    -o-transition: all 0.2s ease-out;
                    transition: all 0.2s ease-out;
                    float: left;
                    margin-right: 15px;
                }

                .main-menu {
                    list-style: none;
                    padding: 23px 0 0 0px;
                    margin: 0;
                    display: inline-block;
                    white-space: nowrap;

                    li {
                        list-style-type: none;
                        display: inline-block;

                        a.toggle-menu {
                            position: relative;
                            background-color: #f07e26;
                            color: #fff;

                            svg {
                                margin-bottom: 0;
                                width: auto;
                                height: 14px;
                                fill: #fff;
                                position: relative;
                                top: 2px;
                                vertical-align: baseline;
                                -webkit-transition: fill 0.2s ease-out;
                                -moz-transition: fill 0.2s ease-out;
                                -o-transition: fill 0.2s ease-out;
                                transition: fill 0.2s ease-out;

                            }
                        }

                        a {
                            -webkit-transition: all 0.2s ease-out;
                            -moz-transition: all 0.2s ease-out;
                            -o-transition: all 0.2s ease-out;
                            transition: all 0.2s ease-out;
                            font: 600 15px 'Roboto', sans-serif;
                            color: #333;
                            padding: 2px 5px;
                            font-weight: 400;
                            font-size: 13px;
                            text-transform: uppercase;
                            display: block;
                        }
                    }

                }

                .ksf-main-nav-right {
                    float: right;
                    padding: 5px 0 0 0;
                    display: flex;

                    .ksf-user-login {
                        display: inline-block;

                        ul.user {
                            margin: 0;
                            padding: 0;
                            display: inline-block;
                            list-style: none;
                            white-space: nowrap;

                            li {
                                list-style-type: none;
                                position: relative;
                                display: inline-block;

                                a, .login-button{
                                    cursor: pointer;
                                    -webkit-transition: all 0.2s ease-out;
                                    -moz-transition: all 0.2s ease-out;
                                    -o-transition: all 0.2s ease-out;
                                    transition: all 0.2s ease-out;
                                    font: 600 15px 'Roboto', sans-serif;
                                    color: #333;
                                    padding: 2px 5px;
                                    font-weight: 400;
                                    font-size: 13px;
                                    text-transform: uppercase;
                                    display: block;
                                }
                            }

                            li.user-advertise a {
                                color: #00a1ab;
                            }

                            li.user-subscribe {
                                display: block;

                                a {
                                    border-radius: 3px;
                                    background-color: #00a1ab;
                                    color: #fff;
                                    text-align: center;
                                    padding: 3px 3px 1px 3px;
                                }
                            }
                        }
                    }
                }
            }

            .menu-burger-icon {
                float: right;
                width: 36px;
                height: 36px;
                background-image: url('../assets/icons/menu.svg');
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }
        }

        .navigation {
            position: fixed;
            top: 0;
            background-color: #ffffff;
            color: #ff007d;
            width: 100%;
            height: 100%;
            z-index: 99999;
            left: 0;
            padding: 5% 10%;

            .navigation-header {
                overflow: auto;
                margin: 15px 0 25px 0;

                >.loggin-button {
                    float: left;

                    button {
                        padding: 5px 15px;
                    }
                }

                >.close-menu {
                    float: right;
                    background-image: url('../assets/icons/close.svg');
                    background-repeat: no-repeat;
                    background-position: center;
                    background-size: contain;
                    width: 30px;
                    height: 30px;

                }
            }

            .menu-options-wrapper {
                .menu-options {
                    padding: 4% 0;
                    border-bottom: 1px solid #ff007d4f;
                    font-size: 20px;
                    text-align: left;
                    text-indent: 15px;
                }
            }
        }
    }
</style>