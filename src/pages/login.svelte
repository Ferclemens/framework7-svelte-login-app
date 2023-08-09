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
    // Login screen demo data
    let username = '';
    let password = '';
    let validUsername = 'admin';
    let validPassword = 'admin';

    function login(username, password) {
      if(username === validUsername && password === validPassword){
        f7.dialog.alert('Success!, your redirect to welcome page', () => {
        router.navigate('/about/', { transition: 'f7-cover' })
        });
      } else {
        f7.dialog.alert('Incorrect username or password', () => {
        f7.loginScreen.close();
        });
      }
    }
  </script>