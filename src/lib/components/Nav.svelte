<script lang="ts">
	import { site } from '$lib/config';
</script>

<header class="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
	<nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
		<a href="#home" class="flex items-center gap-2 font-display text-lg font-bold">
			<img src={site.logo} alt={site.name} class="h-8 w-8 rounded-full" />
			{site.name}
		</a>

		<ul class="hidden items-center gap-8 text-sm text-muted sm:flex">
			{#each site.nav as item}
				<li><a href={item.href} class="transition hover:text-text">{item.label}</a></li>
			{/each}
		</ul>

		<a
			href={site.buyUrl}
			target="_blank"
			class="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-bg transition hover:opacity-90"
		>
			{site.buyLabel}
		</a>
	</nav>
</header>
