<App { ...f7params }>

  <!-- Left panel with cover effect-->
<!--   <Panel left cover dark>
    <View>
      <Page>
        <Navbar title="Left Panel"/>
        <Block>Left panel content goes here</Block>
      </Page>
    </View>
  </Panel> -->


  <!-- Right panel with reveal effect-->
<!--   <Panel right reveal dark>
    <View>
      <Page>
        <Navbar title="Right Panel"/>
        <Block>Right panel content goes here</Block>
      </Page>
    </View>
  </Panel> -->


  <!-- Your main view, should have "view-main" class -->
  <View main class="safe-areas" url="/" />


  <!-- Popup -->
  <!-- <Popup id="my-popup">
    <Navbar title="Create account" backLink="Back"/>
    <List strongIos outlineIos dividersIos>
      <ListInput
        label="Username"
        type="text"
        placeholder="Your username"
      ></ListInput>
      <ListInput
        label="Password"
        type="password"
        placeholder="Password"
      ></ListInput>
      <ListInput
      label="Re-password"
      type="password"
      placeholder="Re enter your password"
    ></ListInput>
    <ListButton title="Create"/>
    </List>
  </Popup> -->

  <!-- <LoginScreen id="my-login-screen">
    <View>
      <Page loginScreen>
        <LoginScreenTitle>Login</LoginScreenTitle>
        <List form>
          <ListInput
            type="text"
            name="username"
            placeholder="Your username"
            bind:value={username}
          />
          <ListInput
            type="password"
            name="password"
            placeholder="Your password"
            bind:value={password}
          />
        </List>
        <List>
          <ListButton fill title="Sign In" onClick={() => alertLoginData()} />
        </List>
        <BlockFooter>
          Some text about login information.<br />Click "Sign In" to close Login Screen
        </BlockFooter>
      </Page>
    </View>
  </LoginScreen> -->
</App>
<script>
  import { onMount } from 'svelte';

  import {
    f7,
    f7ready,
    App,
    Panel,
    Views,
    View,
    Popup,
    Page,
    Navbar,
    Toolbar,
    NavRight,
    Link,
    Block,
    BlockTitle,
    LoginScreen,
    LoginScreenTitle,
    List,
    ListItem,
    ListInput,
    ListButton,
    BlockFooter
  } from 'framework7-svelte';


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
  /* // Login screen demo data
  let username = '';
  let password = '';

  function alertLoginData() {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  } */
  onMount(() => {
    f7ready(() => {


      // Call F7 APIs here
    });
  })
</script>