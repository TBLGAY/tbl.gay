<script lang="ts">
    // import resources from '$lib/assets/resources.toml';
    export let color: string;
    export let name: string;
    export let links: any[];

</script>

<section>
    <h3 style:background-color={color}>{name}</h3>
    <ul role="list">
        {#each links as link}
        <li><a href={link.link} target="_blank" rel="noopener noreferrer">{link.name}</a></li>
        {/each}
    </ul>
</section>


<style>

    h3 {
        background-color: rgba(129, 7, 93, 0.884);
        padding: 0.3em 1em;
        width: fit-content;
        border-radius: 0.2em;
        font-size: 1.4em;
        margin-bottom: 0em;
        font-family: 'Signika Negative', sans-serif;
        color: white;
        margin-top: 0;
    }

    a {
        color: #1a090b;
        text-decoration: underline;
    }

    a:hover {
        color: #9b0b19;
    }

    ul {
        list-style-type: none;
        font-size: 1.1em;
        padding: 0em 0.2em;
    }

    ul li {
        margin-bottom: 0.3em;
    }

    ul li::before {
        content: "> ";
    }

    section {
        box-shadow: 0px 0px 3px black;
        /* border: 1px solid #1a090b; */
        background-color: #fff5f6;
        border-radius: 1em;
        padding: 1em 1em;
        /* max-width: 33%; */
        /* flex-basis: 30%; */
        flex: 1 1 33%;
        /* width: 50%; */
    }

    @media only screen and (orientation: portrait) {
        section {
            flex: 1 1 100%;
        }
    }
</style>