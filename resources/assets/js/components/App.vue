<template>
    <div class="columns is-gapless">
        <aside class="column is-narrow has-background-light">
            <div class="section">
                <sidebar></sidebar>
            </div>
        </aside>
        <div class="container column">
            <admin class="section"></admin>
        </div>
    </div>
</template>

<script>
    // todo move sidebar to admin component
    import Admin from './admin/Admin.vue';
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
        components: {
            Admin,
            Sidebar
        }
    }
</script>

<style>
  html, body {
      background-color: #fff;
      color: #636b6f;
      /* font-family: 'Raleway', sans-serif; */
      /* font-weight: 100; */
      /* height: 100vh; */
      height: 100%;
      margin: 0;
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
        width: 200px;
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
</style>