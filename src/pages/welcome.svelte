<Page>
  <Navbar title="My Login App"/>
  <BlockTitle>Welcome to My Login App</BlockTitle>
  <Block>
    <h1>Welcome {user}!</h1>
    <h2>Enjoy</h2>
  </Block>
</Page>
<script>
  import { Page, Navbar, Block, BlockTitle } from 'framework7-svelte';
  import store from '../js/store.js'
  //console.log(store.state.users);
  let usersStore = store.state.users
  let user = setWelcomeName()
  function setWelcomeName(){
    let match = usersStore.find((user) => user.online === true)
    console.log('Welcome match', match);
    if(match) {
      return match.name
    }
  }
  
</script>
