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
    import store from '../js/store.js'
    import { onMount } from 'svelte';
    /* //Hardcode users
    let validUsername = 'admin';
    let validPassword = 'admin';
    */
   // Login screen data
   let username = '';
   let password = '';

   //props to receive component
   //export let f7route;
   export let f7router;
   
   //interesante para realizar acciones cuando carga el componente como un useEffect (svelte)
   /* onMount(() => {
     console.log(f7route.url)
    }); */
    
    //root to navigate if login success
    function navigateToWelcomePage(){
      f7router.navigate('/about/');
    }
    console.log(store.state.users);
    //users store
    const usersStore = store.state.users
    //user validation
    function login(username, password) {
      //buscamos hacer match con algun usuario de la db
      let match = usersStore.find((user) => user.name === username && user.password === password )
      if(match){
        f7.dialog.preloader('Success login Welcome!')
        setTimeout(()=>{
            f7.dialog.close()
            navigateToWelcomePage()
          },1500)
      } else {
        f7.dialog.alert('Incorrect username or password', () => {
        f7.dialog.close();
        });
      }
    }
  </script>