<Page>
  <Navbar title="My Login App"/>
    <div>
      <h1>Welcome <br/>{user} !</h1>
      <img src="./rafa.gif" alt="Rafa say Hi!"/>
    </div>
  <List  strong outlineIos dividersIos insetMd accordionList >
    <ListButton onClick={()=>logOut()}>
      <LoginScreenTitle>Log out</LoginScreenTitle>
    </ListButton>
  </List>
</Page>
<script>
  import { Page, Navbar, List, ListButton, LoginScreenTitle, f7 } from 'framework7-svelte';
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
    //console.log('Welcome match', match);
    if(match) {
      return match.name
    }
  }
  //log out (set online = false)
  function logOut() {
    store.dispatch('setUserState', user)
    //console.log(usersStore);
    f7.dialog.preloader('Byee! Byee! Redirect to log in')
      setTimeout(()=>{
        f7.dialog.close()
        navigateToLogin()
      },1500)
  }
  
</script>
<style>
  @font-face {
    font-family: 'Simpson';
    src: url(/Simpson.otf);
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Simpson';
    background-color: #252525;
    padding: 5px 0;
    margin: 80px 20px;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    text-shadow: 2px 2px 0 black;
  }
  h1 {
    font-size: 2.3rem;
    margin: 10px;
    text-align: center;
  }
  img {
    width: 90%;
    border-radius: 5px;
    margin: 20px 0;
  }
</style>
