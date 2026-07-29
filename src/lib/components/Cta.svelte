<script lang="ts">
	import { site } from '$lib/config';

	const twitter = site.socials.find((s) => /twitter|x\s*\//i.test(s.label));
</script>

<section class="relative overflow-hidden border-t border-border px-6 py-20 text-center">
	<div
		class="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]"
	></div>

	<div class="relative mx-auto max-w-2xl">
		<h2 class="font-display text-3xl font-bold sm:text-4xl">Ready to join {site.name}?</h2>
		<p class="mt-3 text-muted">{site.tagline}</p>

		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<a
				href={site.buyUrl}
				class="rounded-full bg-primary px-8 py-3 font-bold text-bg transition hover:opacity-90"
			>
				{site.buyLabel}
			</a>
			{#if twitter}
				<a
					href={twitter.href}
					class="rounded-full border border-border px-8 py-3 font-semibold text-text transition hover:border-primary"
				>
					{twitter.label}
				</a>
			{/if}
		</div>
	</div>
</section>