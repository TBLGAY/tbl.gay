<script>
  import IconButton from "$lib/LinkButton.svelte";
  import LinkButtonList from "$lib/LinkButtonList.svelte";
  import Navbar from "$lib/Navbar.svelte";
  import SplitContainer from "$lib/SplitContainer.svelte";
  import links_data from "$lib/assets/links.toml";

  const links = Object.values(links_data);
</script>

<svelte:head>
  <title>TBLGAY: YorkU's queer student community</title>
</svelte:head>

<SplitContainer>
  <div slot="left" class="left">
    <h1 style:font-family="'Signika Negative', sans-serif">TBLGAY</h1>
    <h3
      style:font-family="'DM Sans', sans-serif"
      style:font-size="1.196em"
      style:margin-bottom="0.1em"
    >
      Trans, Bisexual, Lesbian, Gay, Asexual at York
    </h3>
    <p
      style:font-family="'DM Sans', sans-serif"
      style:margin-top="0"
      style:font-size="1.02em"
    >
      a student-run service for the queer and trans community at York
      University. we host a drop-in space, vibrant discord community, events and
      more!
      <br />
      <br />
      funded by the York Federation of Students.
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
