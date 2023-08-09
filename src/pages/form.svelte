<Page name="form">
  <Navbar title="Create account" backLink="Back"></Navbar>
  <List strongIos outlineIos dividersIos>
    <ListInput
      label="Username"
      type="text"
      placeholder="Your username"
    ></ListInput>
    <ListInput
      label="Password"
      type="password"
      placeholder="Password"
    ></ListInput>
    <ListInput
    label="Re-password"
    type="password"
    placeholder="Re enter your password"
  ></ListInput>
  <ListButton fill title="Create"/>
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

    ListButton

  } from 'framework7-svelte';
</script>
