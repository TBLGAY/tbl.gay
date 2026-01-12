<script>
  import SplitContainer from "$lib/SplitContainer.svelte";
  import space from "$lib/assets/space.toml";
</script>

<svelte:head>
  <title>tblgay | drop-in</title>
  <link rel="preload" href="{space.photo}" as="image" />
</svelte:head>

<SplitContainer>
  <div slot="left" class="left">
    <img
      src={space.photo}
      alt="The TBLGAY drop-in space; a colorful room with couches arranged in a circle."
    />
  </div>
  <hr />
  <div slot="right" class="right">
    <p>
      Our <b>drop-in space</b> is located at <b>Room 449A</b> of the
      <a
        href="https://goo.gl/maps/kx6jZiPE35HM4k6y9"
        target="_blank"
        rel="noopener noreferrer">First Student Centre</a
      >.
    </p>
    <p>It's a cozy space to relax, study and meet new people!</p>

    <h3>Open Hours - Winter 2026</h3>
    {#each Object.values(space.open) as times}
      <h4>{times.term}</h4>
      <p>{times.hours}</p>
    {/each}

    <p><sub>*Due to understaffing, TBLGAY is currently operating at slightly reduced hours. We'll be back to our usual 10-4 on weekdays as soon as we can!</sub></p>

  </div>
</SplitContainer>

<style>
  .left {
    height: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: flex-start;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  img {
    max-width: 100%;
    border-radius: 1em;
  }

  p {
    font-family: "DM Sans", sans-serif;
    margin-top: 0;
    font-size: 1.05em;
  }

  h3,
  h4 {
    font-family: "DM Sans", sans-serif;
    margin-bottom: 0.1em;
  }

  h4 {
    font-size: 1.09em;
  }

  a {
    color: #db1225;
  }

  a:hover {
    color: #9b0b19;
  }
</style>
