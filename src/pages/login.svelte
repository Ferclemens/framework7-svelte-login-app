<Page>
    <Navbar title="My Login App
    " ></Navbar>
    <BlockTitle large>
      <LoginScreenTitle >Login to <br/>your account</LoginScreenTitle>
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
        bind:value={password}
      />
    </List>
    <List>
      <ListButton fill title="Sign In" onClick={() => login(username, password)} />
    </List>
    <Block medium>
      No account yet?  <a href={'/form/'}>Sign Up</a>
    </Block>
  <List strong outlineIos dividersIos insetMd accordionList>
    <ListItem accordionItem title="Instructions">
      <AccordionContent>
        <Block>
          <p>
            You can use hardcode user to login or create one in "Sign Up":
            <br/>user: admin | password: admin <br/>user: user | password: user
          </p>
        </Block>
      </AccordionContent>
    </ListItem>
  </List>
  </Page>
  <script>
    import { Page, LoginScreenTitle, List, ListInput, ListButton, BlockFooter, Navbar, f7, Block, BlockTitle, AccordionContent, ListItem } from 'framework7-svelte';
    import store from '../js/store.js'
    import { onMount } from 'svelte';

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