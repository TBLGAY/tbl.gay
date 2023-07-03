<script lang="ts">
  export let icon: string;
  export let name: string;
  export let href: string;
  export let color: string = "black";
  export let background: string = "aliceblue";
</script>

<a
  {href}
  style:color
  style:background-color={background}
  target="_blank"
  rel="noopener noreferrer"
>
  <span
    ><span
      class="iconify"
      data-icon={icon}
      style="vertical-align: middle;"
    /></span
  >
  {name}
</a>

<style>
  a {
    text-decoration: none;
    display: flex;
    flex-direction: row;

    justify-content: flex-start;
    align-items: center;

    font-size: 1.5em;
    font-family: "DM Sans", sans-serif;

    border-radius: 1em;
    box-shadow: 1px 1px 1px black;

    padding-top: 0.4em;
    padding-bottom: 0.4em;
    padding-left: 1em;
    padding-right: 0em;

    /* width: 60%; */

    /* flex-basis: 60%; */
    /* flex-grow: 1; */
    /* max-width: 100%; */
    /* flex-grow: 1; */
    /* flex-shrink: 1; */
  }

  a:hover {
    box-shadow: 5px 3px 5px rgb(170, 100, 100);
  }

  a span {
    margin-right: 0.5em;
    font-size: 1.6em;
  }
</style>
