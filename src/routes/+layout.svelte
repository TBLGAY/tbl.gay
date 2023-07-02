<script lang="ts">
    import '$lib/assets/styles/fonts.css';

    import IconButton from "$lib/LinkButton.svelte";
    import LinkButtonList from "$lib/LinkButtonList.svelte";
    import Navbar from "$lib/Navbar.svelte";
    // import Discord from

    const links = [
        {
            "name": "home",
            "href": "/",
        },
        {
            "name": "about",
            "href": "/about"
        },
        {
            "name": "drop-in",
            "href": "/space"
        },
        {
            "name": "resources",
            "href": "/resources"
        },
        // {
        //     "name": "Drop-in Space",
        //     "href": "/space",
        //     "icon": "mdi:location",
        //     "color": "white",
        //     "background": "#647d6a"
        // }
    ];
</script>

<Navbar {links} />

<hr class="nav-separator">

<style>
        hr.nav-separator {
        margin: 0 0;
        align-self: normal;
        color: rgba(170, 167, 167, 0.164);
    }
</style>

<slot />
