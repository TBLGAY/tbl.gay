<script lang="ts">
  import fonts from "$lib/assets/styles/fonts.css";
  import IconButton from "$lib/LinkButton.svelte";
  import LinkButtonList from "$lib/LinkButtonList.svelte";
  import Navbar from "$lib/Navbar.svelte";
  // import Discord from

  const links = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "about",
      href: "/about",
    },
    {
      name: "constitution",
      href: "/constitution",
    },
    {
      name: "drop-in",
      href: "/space",
    },
    {
      name: "resources",
      href: "/resources",
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
  <meta
    name="description"
    content="a student-run service for the queer, asexual and trans community at York University."
  />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="https://tbl.gay" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="TBLGAY" />
  <meta
    property="og:description"
    content="a student-run service for the queer, asexual and trans community at York University."
  />
  <meta property="og:image" content="https://tbl.gay/cover.jpg" />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="tbl.gay" />
  <meta property="twitter:url" content="https://tbl.gay" />
  <meta name="twitter:title" content="TBLGAY" />
  <meta
    name="twitter:description"
    content="a student-run service for the queer, asexual and trans community at York University."
  />
  <meta name="twitter:image" content="https://tbl.gay/cover.jpg" />

  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />

  <link
    rel="preload"
    href="/fonts/dm-sans-v13-latin-regular.woff2"
    as="font"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/roboto-serif-v13-latin-regular.woff2"
    as="font"
    crossorigin="anonymous"
  />
  <link
    rel="preload"
    href="/fonts/signika-negative-v20-latin-700.woff2"
    as="font"
    crossorigin="anonymous"
  />

  <script
    async
    src="https://umami.cat-girl.gay/script.js"
    data-website-id="25038b8d-7b3b-46d1-a1c0-16a61e78c18f"
  ></script>

  <script type="application/ld+json">
    {
       "@context": "https://schema.org",
       "@type": "Organization",
       "url": "https://tbl.gay",
       "image": "https://tbl.gay/black-logo.png",
       "logo": "https://tbl.gay/black-logo.png",
       "name": "TBLGAY",
       "description": "York University's student-run queer & LGBTQ+ community service! We have a drop-in space, events and more.",
       "email": "tblgay@yfs.ca",
       "address": {
         "@type": "PostalAddress",
         "streetAddress": "94 York Blvd",
         "addressLocality": "Toronto",
         "addressCountry": "CA",
         "addressRegion": "Ontario",
         "postalCode": "M3J1P3"
       }
     }

  </script>
</svelte:head>

<Navbar {links} />

<hr class="nav-separator" />

<slot />

<style>
  hr.nav-separator {
    margin: 0 0;
    align-self: normal;
    color: rgba(170, 167, 167, 0.164);
  }
</style>
