<App { ...f7params }>
  <View main class="safe-areas" url="/login/" />
</App>
<script>
  import { onMount } from 'svelte';
  import { f7ready, App, View } from 'framework7-svelte';
  import routes from '../js/routes';
  import store from '../js/store';


  // Framework7 Parameters
  let f7params = {
    name: 'My Login App', // App name
    theme: 'auto', // Automatic theme detection

    darkMode: true,


    // App store
    store: store,
    // App routes
    routes: routes,

    // Register service worker (only on production build)
    serviceWorker: process.env.NODE_ENV ==='production' ? {
      path: '/service-worker.js',
    } : {},
  };
  onMount(() => {
    f7ready(() => {


      // Call F7 APIs here
    });
  })
</script>