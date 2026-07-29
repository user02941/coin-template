<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Lore from '$lib/components/Lore.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import HowToBuy from '$lib/components/HowToBuy.svelte';
	import Roadmap from '$lib/components/Roadmap.svelte';
	import Cta from '$lib/components/Cta.svelte';
	import { site } from '$lib/config';
</script>

<svelte:head>
	<title>{site.name} | {site.tagline}</title>
	<meta name="description" content={site.description} />
</svelte:head>

<Nav />
<Hero />
<Lore />
<HowToBuy />
<Roadmap />
<Cta />
<Footer />
