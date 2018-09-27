<template>
    <div>
        <div id="header">
            <div class="logo"></div>
        </div>     
        <template v-if="isFront">
                <div class="container column">
                    <front class="section"></front>
                </div>
        </template>
        <template v-if="isLaravel">
                <div class="container column">
                    <!-- <front class="section"></front> -->
                    <!-- <passport-clients></passport-clients>
                    <passport-authorized-clients></passport-authorized-clients>
                    <passport-personal-access-tokens></passport-personal-access-tokens> -->
                </div>
        </template>
        <template v-if="isAdmin">
            <div class="columns is-gapless">
                <!-- <aside class="column is-narrow has-background-light"> -->
                <aside class="column is-narrow">
                    <div class="section">
                        <sidebar></sidebar>
                    </div>
                </aside>
                <div class="container column">
                    <admin class="section"></admin>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    // todo move sidebar to admin component
    import Admin from './admin/Admin.vue';
    import Front from './front/Front.vue';
    import Sidebar from './admin/generic/Sidebar.vue';
    // import plugins from '../vue-plugins';
    import store from '../store/index';

    // todo Move to plugin file
    const StorePlugin = {
        install(Vue, options) {
            Vue.prototype.$store = store
        }
    }

    Vue.use(StorePlugin);

    export default {
        data() {
            return {
                subdomain: ''
            }
        },
        computed: {
            // temp
            isFront() {
                return this.subdomain === 'front'
            },
            isAdmin() {
                return this.subdomain === 'admin'
            },
            isLaravel() {
                return this.subdomain === 'laravel'
            },
        },
        created() {
            console.log('app.vue');
            
            this.subdomain = location.hostname.split('.').shift();
        },
        components: {
            Admin,
            Front,
            Sidebar
        }
    }
</script>

<style>
  html, body {
      background-color: #fff;
      color: #636b6f;
      font-family: 'Nunito', sans-serif;
      /* font-size: 1rem; */
      /* font-weight: 100;  */
      /* height: 100vh; */
      height: 100%;
      margin: 0;
  }

  p, label {
      font-size: .8rem;
  }

  .input, .textarea, .button {
      font-family: 'Nunito', sans-serif;
  }

    /* .full-height {
      height: 100vh;
  }

  .flex-center {
      align-items: center;
      display: flex;
      justify-content: center;
  }

  .position-ref {
      position: relative;
  }

  .top-right {
      position: absolute;
      right: 10px;
      top: 18px;
  }

  .content {
      text-align: center;
  }

  .title {
      font-size: 84px;
  }

  .links > a {
      color: #636b6f;
      padding: 0 25px;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: .1rem;
      text-decoration: none;
      text-transform: uppercase;
  }

  .m-b-md {
      margin-bottom: 30px;
  } */


    /* ---------------- */
    /* Custom */
    /* ---------------- */
    /* todo make responsive */
    .container {
        max-width: 700px;
        width: 700px;
    }

    .field {
        margin-bottom: 0.75rem;
    }

    textarea {
        resize: vertical
    }

    /* Menu todo not mobile responsive */
    aside.column {
        height: 100vh;
        position: sticky;
        top: 0;
        left: 0;
        /* z-index: 1; */
        /* overflow-x: hidden; */
    }
    .menu {
        min-width: 150px;
    }
    .menu-label {
        /* background-color: #f1f1f1; */
        /* border: 5px solid transparent; */
        /* border-radius: 5px; */
        text-transform: none;
        /* font-size: .75rem; */
        font-weight: 800;
        font-family: 'nunito', sans-serif;
        letter-spacing: 0;
        color: #3c3c3c;
        margin-top: 0;
        border: 0;
    }
    .menu-label:not(:last-child) {
        margin-bottom: .7em;
    }
    .menu-label:not(:first-child) {
    margin-top: 3.4em;
    }
    .menu-list a {
        padding: 0.5em 0em;
        font-weight: 700;
        font-size: .8rem;
        margin-left: 10px;
        color: #4a4a4a;
    }

    .column:first-child {
        padding-left: 0.75rem !important;
    }
    .column:last-child {
        padding-right: 0.75rem !important;
    }
    .columns.input-row > .column {
        padding: 0.25rem;
    }

    .select {
        width: 100%;
    }
    .select select {
        margin-bottom: 0.5em;
        width: 100%;
    }

    .tag.active {
        background-color: paleturquoise !important;
    }
    .tag.clickable:hover {
        cursor: pointer;
        /* Darkens bgc */
        filter: brightness(95%);
    }
    .tags.big .tag {
        padding: 2rem;
        font-weight: 500;
    }

    table th > .button {
        float: right;
    }

    .table thead th, .label {
        font-family: sans-serif;
        font-weight: 700;
        font-size: 0.75rem;
    }

    .table tr {
        /* border-bottom: 5px solid #e2e2e200;
        border-top: 5px solid #e2e2e200; */
    }

    thead {
        /* background-color: #f7f7f7; */
        /* border-bottom: 10px solid white; */
    }

    .menu-list a:hover {
        background-color: transparent;
    }

    thead th span {
        background-color: #f1f1f1;
        border: 5px solid transparent;
        border-radius: 5px;
        text-transform: uppercase;
        font-size: .6rem;
    }

    .table td, .table th {
        font-size: 0.75rem;
        font-weight: 600;
        vertical-align: middle;
    }
    .table td.buttons {
        vertical-align: none
    }

    .table thead th, .table th, .table td {
        border: none;
        padding-bottom: 10px;
        /* padding-left: 0; */
    }
    .table.form {
        margin-top: 30px;
    }
    .table.form thead th, .table.form th, .table.form td {
        padding-left: 0;
    }

    .table thead th {
        padding-bottom: 20px;
    }

    button a {
        color: #363636;
    }
    button a:hover {
        text-decoration: none;
    }
    .button.is-small {
        border-radius: 3px;
        font-weight: 600;
    }
    .input.is-small {
        border-radius: 4px;
    }
    .input, .textarea {
        box-shadow: none;
        font-weight: 600;
    }

    #header {
        height: 50px;
        padding: 20px;
        width: 100%;
    }

    #header .logo {
        height: 50px;
        width: 50px;
        background-image: url("/logo.png");
        background-size: cover;
    }

    .fa-circle {
        font-size: .4rem;
        color: #e8e8e8;
    }
</style>