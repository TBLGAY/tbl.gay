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

<svelte:head>
    <meta name="description" content="a student-run service for the queer, asexual and trans community at York University.">

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://tbl.gay">
    <meta property="og:type" content="website">
    <meta property="og:title" content="TBLGAY">
    <meta property="og:description" content="a student-run service for the queer, asexual and trans community at York University.">
    <meta property="og:image" content="https://tbl.gay/cover.jpg">
  
    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:domain" content="tbl.gay">
    <meta property="twitter:url" content="https://tbl.gay">
    <meta name="twitter:title" content="TBLGAY">
    <meta name="twitter:description" content="a student-run service for the queer, asexual and trans community at York University.">
    <meta name="twitter:image" content="https://tbl.gay/cover.jpg">
</svelte:head>

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
