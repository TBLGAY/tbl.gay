<script lang="ts">
  import LinkButton from "./LinkButton.svelte";
  export let links: any;
</script>

<ul>
  {#each links as link}
    <li>
      <LinkButton {...link} />
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 0;
    padding: 0;
    list-style: none outside;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* width: 100%; */
    /* align-items: center; */
    /* width: 100%; */
    /* flex-shrink:; */
  }

  ul li {
    flex: 1 1 auto;
    margin: 1em 0;
    min-width: 13em;
    width: 16em;
    max-width: 100%;
    /* flex-basis: content; */
    /* flex-basis: max-content; */
  }
</style>
