<Page>
  <Navbar title="My Login App"/>
  <BlockTitle>Welcome to My Login App</BlockTitle>
  <Block>
    <h1>Welcome {user}!</h1>
    <h2>Enjoy</h2>
  </Block>
  <List  strong outlineIos dividersIos insetMd accordionList >
    <ListButton onClick={()=>logOut()}>
      <LoginScreenTitle>Log out</LoginScreenTitle>
    </ListButton>
  </List>
</Page>
<script>
  import { Page, Navbar, Block, BlockTitle, Button, List, ListButton, LoginScreenTitle, f7 } from 'framework7-svelte';
  import store from '../js/store.js'
  //console.log(store.state.users);
  let usersStore = store.state.users
  let user = setWelcomeName()

  //navigate to login
  export let f7router
  function navigateToLogin(){
    f7router.navigate('/login/');
  }


  //find name of user loged (online = true)
  function setWelcomeName(){
    let match = usersStore.find((user) => user.online === true)
    console.log('Welcome match', match);
    if(match) {
      return match.name
    }
  }
  //log out (set online = false)
  function logOut() {
    store.dispatch('setUserState', user)
    //console.log(usersStore);
    f7.dialog.preloader('We miss you! Redirect to log in')
      setTimeout(()=>{
        f7.dialog.close()
        navigateToLogin()
      },1500)
  }
  
</script>
