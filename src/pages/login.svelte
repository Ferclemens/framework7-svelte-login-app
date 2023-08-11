<Page>
    <Navbar title="My Log in App"></Navbar>
    <BlockTitle large>
      <LoginScreenTitle >Log in to <br/>your account</LoginScreenTitle>
    </BlockTitle>
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
        autocomplete= "off"
        bind:value={password}
      />
    </List>
    <List  strong outlineIos dividersIos insetMd accordionList>
      <ListButton onClick={() => login(username, password)}>
        <LoginScreenTitle>Log in</LoginScreenTitle>
      </ListButton>
    </List>
    <Block medium>
      <p class="msj">No account yet?  <a href={'/form/'}>Sign Up</a></p>
    </Block>
  <List strong outlineIos dividersIos insetMd accordionList>
    <ListItem accordionItem title="Instructions">
      <AccordionContent>
        <Block>
          <p>
            You can create user in "Sign Up" or log in with hardcode users:
            <br/>user: admin | password: admin <br/>user: user | password: user
          </p>
        </Block>
      </AccordionContent>
    </ListItem>
  </List>
  </Page>
  <script>
    import { Page, LoginScreenTitle, List, ListInput, ListButton, Navbar, f7, Block, BlockTitle, AccordionContent, ListItem } from 'framework7-svelte';
    import store from '../js/store.js'
    import routes from '../js/routes.js'

    // Login screen data
    let username = '';
    let password = '';

    //props to receive component
    export let f7router;
    
/*     //WIP
    function changeTheme(){
      f7.params.darkMode = !f7.params.darkMode
      console.log(f7.params.darkMode)
    } */

    //root to navigate if login success
    function navigateToWelcomePage(){
      f7router.navigate('/welcome/');
    }
    
    //console.log(store.state.users);
    //users store
    const usersStore = store.state.users
    //user validation
    function login(username, password) {
      //buscamos hacer match con algun usuario de la db
      let match = usersStore.find((user) => user.name === username && user.password === password )
      if(match){
        store.dispatch('setUserState', match.name)
        //console.log(match);
        f7.dialog.preloader('Success! Welcome!')
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
  <style>
    .msj {
      text-align: center;
    }
  </style>