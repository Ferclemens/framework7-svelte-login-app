<Page name="home">
  <!-- Top Navbar -->
  <Navbar sliding={false}>
<!--     <NavLeft>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="left" />
    </NavLeft> -->
<!--     <NavTitle sliding>My login App</NavTitle>
    <NavRight>
      <Link iconIos="f7:menu" iconMd="material:menu" panelOpen="right" />
    </NavRight> -->
    <NavTitle>My login App</NavTitle>
  </Navbar>
  <!-- Toolbar -->
  <Toolbar bottom>
    <!-- <Link>Left Link</Link> -->
    <!-- <Link>Right Link</Link> -->
    <Block>
      <p>Here is your blank Framework7 app. Let's see what we have here.</p>
    </Block>
  </Toolbar>
  <!-- Page content -->
<!--   <Block>
    <p>Here is your blank Framework7 app. Let's see what we have here.</p>
  </Block> -->

  <BlockTitle>Welcome to my login app</BlockTitle>
  <List strong inset dividersIos>
    <ListItem link="/login/" title="Log in"/>
    <ListItem link="/form/" title="Create acount"/>
  </List>

  <!-- <BlockTitle>Modals</BlockTitle> -->
<!--   <Block class="grid grid-cols-2 grid-gap">
    <Button fill loginScreenOpen="#my-login-screen">Have account? Log in</Button>
    <Button fill popupOpen="#my-popup">Not yet? Create one!</Button>
  </Block> -->

  <!-- <BlockTitle>Panels</BlockTitle>
  <Block class="grid grid-cols-2 grid-gap">
    <Button fill panelOpen="left">Left Panel</Button>
    <Button fill panelOpen="right">Right Panel</Button>
  </Block> -->

<!--   <List strong inset dividersIos>
    <ListItem
      title="Dynamic (Component) Route"
      link="/dynamic-route/blog/45/post/125/?foo=bar#about"
    />
    <ListItem
      title="Default Route (404)"
      link="/load-something-that-doesnt-exist/"
    />
    <ListItem
      title="Request Data & Load"
      link="/request-and-load/user/123456/"
    />
  </List> -->
</Page>
<script>
  import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Button
  } from 'framework7-svelte';
</script>