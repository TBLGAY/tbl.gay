<script>
    import IconButton from "$lib/LinkButton.svelte";
    import LinkButtonList from "$lib/LinkButtonList.svelte";
    import Navbar from "$lib/Navbar.svelte";
    // import Discord from

</script>

<main class="splitcontainer">
    <section class="left">
        <slot name="left" />
    </section>
    <hr>
    <section class="right">
        <slot name="right" />
    </section>
</main>
<!-- <footer>
    <h1> thank youu </h1>
</footer> -->

<style>
    /* footer {
        position: fixed;
        bottom: 0;
    } */
    .splitcontainer {
        margin: auto;
        margin-top: 5em;

        display: flex;
        flex-direction: row;
        /* align-items: ; */
        /* justify-content: ; */
        padding: 0em 2em;
        width: fit-content;

    
    }

    .splitcontainer section {
        max-width: 50%;
        margin: 0 0 0 0;
    }

    main hr {
        /* border: none; */
        margin: 0 2em;
        /* width: 1px; */
        align-self: normal;
        color: rgba(170, 167, 167, 0.164);
    }


    .left {
        height: 100%;

        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: flex-start;
    }


    @media only screen and (max-width: 700px) {
        .splitcontainer {
            margin-top: 0;
            padding-top: 0;
            flex-direction: column;
            justify-content: flex-start;
            /* justify-content: center; */
            /* align-items: center; */
        }
        
        .splitcontainer section {
            max-width: 100%;

        }

        main hr {
            margin-right: 0;
            margin-left: 0;
            margin-top: 1em;
            margin-bottom: 1em;
        }

    }

</style>