<Page loginScreen>
    <Navbar title="log in" backLink="Back"></Navbar>
    <LoginScreenTitle>Login to <br/>your account</LoginScreenTitle>
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
      <ListButton fill title="Sign In" onClick={() => login(username, password)} />
    </List>
    <BlockFooter>
      Some text about login information.<br />Click "Sign In" to close Login Screen
    </BlockFooter>
  </Page>
  <script>
    import { Page, LoginScreenTitle, List, ListInput, ListButton, BlockFooter, Navbar, f7 } from 'framework7-svelte';
  import { onMount } from 'svelte';
    // Login screen demo data
    let username = '';
    let password = '';
    //Hardcode users
    let validUsername = 'admin';
    let validPassword = 'admin';

    //props to receive component
    //export let f7route;
    export let f7router;

    //interesante para realizar acciones cuando carga el componente (svelte)
    /* onMount(() => {
      console.log(f7route.url)
    }); */

    //root to navigate if login is success
    const navigate = () => {
      f7router.navigate('/about/');
    }
    //user validation
    function login(username, password) {
      if(username === validUsername && password === validPassword){
        f7.dialog.preloader('Success login, Welcome!')
          setTimeout(()=>{
            f7.dialog.close()
            navigate()
          },2000)
      } else {
        f7.dialog.alert('Incorrect username or password', () => {
        f7.loginScreen.close();
        });
      }
    }
  </script>