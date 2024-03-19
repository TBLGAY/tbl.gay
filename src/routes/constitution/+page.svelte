<script lang="ts">
  import IconButton from "$lib/LinkButton.svelte";
  import LinkButtonList from "$lib/LinkButtonList.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import SplitContainer from "$lib/SplitContainer.svelte";
  import links_data from "$lib/assets/constitution.toml";

  const links = Object.values(links_data);
</script>

<svelte:head>
  <title>TBLGAY's Constitution</title>
</svelte:head>

<SplitContainer>
  <div slot="left" class="left">
    <h1 style:font-family="'Signika Negative', sans-serif">TBLGAY's Constitution</h1>
    <p
      style:font-family="'DM Sans', sans-serif"
      style:margin-top="0"
      style:font-size="1.2em"
    >
      Our constitution is written and approved by our volunteer body, the TBLGAY Collective. It's made up of three documents: the primary Constitution and two Auxiliary Documents, governing compensation and events.
      <br />
    </p>
  </div>
  <hr />
  <div slot="right" class="right">
    <LinkButtonList {links} />
  </div>
</SplitContainer>

<style>
  .left {
    height: 100%;

    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: flex-start;
  }

  .left h1 {
    margin-top: 0.2em;
    color: rgb(66, 59, 59);
    font-size: 4em;
    margin-bottom: 0;
    text-shadow: 1px 1px 2px rgb(211, 173, 173);
  }
</style>
