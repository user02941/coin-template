<script lang="ts">
	import { site } from '$lib/config';
</script>

<section id="lore" class="border-t border-border px-6 py-20">
	<div class="mx-auto max-w-3xl">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">{site.lore.heading}</h2>

		<div class="mt-6 space-y-5 text-lg leading-relaxed text-muted">
			{#each site.lore.paragraphs as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
	</div>
</section>
