<script lang="ts">
    import ResourceBox from "$lib/ResourceBox.svelte";
    import resources from "$lib/assets/resources.toml";
    
</script>

<svelte:head>
    <title>tblgay | resources</title>
</svelte:head>

<main>
    {#each Object.values(resources) as section}
    <ResourceBox {...section} />
    {/each}
</main>

<style>
    main {
        /* max-width: 100%; */
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        justify-content: center;
        /* width: fit-content; */

        font-family: 'DM Sans', sans-serif;

        padding: 2em 2em;

        gap: 1em;

        margin: auto;
    }

    @media only screen and (min-width: 1440px) {
        main {
            max-width: 70%;
        }
    }


</style>