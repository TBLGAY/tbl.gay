<script>
  import SplitContainer from "$lib/SplitContainer.svelte";
  import staff from "$lib/assets/staff.toml";
</script>

<svelte:head>
  <title>tblgay | about</title>
</svelte:head>

<SplitContainer>
  <div slot="left" class="left">
    <h1 style:font-family="'Signika Negative', sans-serif">about</h1>
    <p>
      Trans, Bisexual, Lesbian, Gay, Asexual at York is a student-run service,
      funded by the York Federation of Students to offer resources and support
      for the LGBTQ+/queer, trans and asexual community in and around York University.
    </p>
    <p>
      We campaign for better conditions for queer students at YorkU, host a
      drop-in space, run events for the queer community on campus, and provide a
      free library and gender-affirming items.
    </p>
  </div>
  <hr />
  <div slot="right" class="right">
    <h2 style:font-family="'Signika Negative', sans-serif">current staff</h2>
    <ul role="list" class="positions">
      {#each Object.values(staff) as position}
        <li class="position">
          <h4 style:margin-bottom="0.3em">{position.name}</h4>
          <ul class="positions">
            {#each position.members as person}
              <li>
                <span style:margin-left="1em"
                  >{person.name} <sub>{person.pronouns}</sub></span>
              </li>
            {/each}
          </ul>
        </li>
      {/each}
      <!-- <li class="position">
                <h4 style:margin-bottom="0.3em">Programming Chair</h4>
                <span style:margin-left="1em">Ryver Winters <sub>fae/faer/it/its</sub></span>
            </li>
            <li class="position">
                <h4 style:margin-bottom="0.3em">Resource & Administration Chair</h4>
                <span style:margin-left="1em">Jia Yu <sub>they/she</sub></span>
            </li> -->
    </ul>
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

  p {
    font-family: "DM Sans", sans-serif;
    margin-top: 0;
    font-size: 1.05em;
  }

  .right ul.positions {
    list-style-type: none;
    font-family: "DM Sans", sans-serif;
    padding-left: 0;
    font-size: 1.05em;
  }

  sub {
    margin-left: 0.2em;
    font-size: 0.9em;
  }
</style>
