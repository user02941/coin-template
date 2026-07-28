<script lang="ts">
	import { site } from '$lib/config';
</script>

<footer class="border-t border-border bg-surface px-6 py-10">
	<div class="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
		<div class="flex items-center gap-2 font-display font-bold">
			<img src={site.logo} alt={site.name} class="h-6 w-6 rounded-full" />
			{site.name}
		</div>

		<ul class="flex flex-wrap justify-center gap-6 text-sm text-muted">
			{#each [...site.nav, ...site.socials] as item}
				<li><a href={item.href} class="transition hover:text-text">{item.label}</a></li>
			{/each}
		</ul>

		<p class="max-w-xl text-xs text-muted">{site.disclaimer}</p>
	</div>
</footer>
