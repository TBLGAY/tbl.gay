<script lang="ts">
    export let links = [
        {"name": "about", "href": ""},
        {"name": "drop-in", "href": ""},
        {"name": "staff", "href": ""},
        {"name": "resources", "href": ""}
    ];
</script>

<nav>
    <ul>
    {#each links as link}
    <li>
        <a href={link.href}> {link.name}</a>
    </li>
    {/each}
    </ul>
</nav>

<style>
    ul {
        display: flex;
        list-style: none;
        flex-direction: row;
        /* justify-content: space-eve; */
        padding: 0.3em 1.3em;
        margin: 0;
        flex-wrap: wrap;
        /* align-content: stretch; */
    }


    ul li {
        /* background-color: rgb(176, 189, 201); */
        border: 2px solid rgba(27, 19, 19, 0.486);       box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
        border-radius: 0.3em;
        padding: .5em 1em;
        margin: 0.2em .2em;
        display: block;
        font-size: 1.2em;
        font-family: 'DM Sans', sans-serif;
    }

    ul li:hover {
        border: 2px solid rgba(0, 0, 0, 1);    
    }
    
    ul li:hover a {
        color: rgb(248, 86, 86);
    }

    ul li a {
        color: black;
        text-decoration: none;
    }

    /* ul li {
        margin-left: 
    } */
</style>