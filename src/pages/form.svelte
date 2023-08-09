<Page name="form">
  <Navbar title="Create account" backLink="Back"></Navbar>
  <List strongIos outlineIos dividersIos>
    <ListInput
      label="Username"
      type="text"
      placeholder="Your username"
      bind:value={username}
    ></ListInput>
    <ListInput
      label="Password"
      type="password"
      placeholder="Password"
      bind:value={password}
    ></ListInput>
    <ListInput
    label="Re-password"
    type="password"
    placeholder="Re enter your password"
    bind:value={repassword}
  ></ListInput>
  <ListButton fill title="Create" onClick={() => addUserToDB(username, password)}/>
  </List>
</Page>
<script>
  import {
    Page,
    Navbar,
    List,
    ListInput,
    ListItem,
    Toggle,
    BlockTitle,
    Button,
    Range,
    Block,

    ListButton,

    f7


  } from 'framework7-svelte';
  import store from '../js/store';
  
  
  //form data
  let username = ''
  let password = ''
  let repassword = ''
  
  function checkPassword(pass, repass){
    if(pass === repass){
      return pass
    } else {
      f7.dialog.alert('passwords must match. Try again',() => {
        f7.dialog.close()
      })
    }
  }   
  //props
  export let f7router;
  //root to login
  function navigateToLogin(){
    f7router.navigate('/login/');
  }
  // agregamos nuevo usuario a la db, despues de verificar password
  function addUserToDB(user, pass){
    let newUser = {}
    let passwordOK = checkPassword(pass, repassword)
    if(passwordOK){
      newUser = {
        ['name']: user,
        ['password']: pass
      }
      //add new user to db (like Redux)
      store.dispatch('addUser', newUser)
      f7.dialog.preloader('Success! Redirect to login')
      setTimeout(()=>{
        f7.dialog.close()
        navigateToLogin()
      },1500)
    }
  }
</script>
