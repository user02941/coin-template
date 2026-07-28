<script lang="ts">
	import { site } from '$lib/config';

	let copied = $state(false);

	function copyCA() {
		navigator.clipboard.writeText(site.contractAddress);
		copied = true;
		setTimeout(() => (copied = false), 1500);
	}
</script>

<section id="home" class="relative overflow-hidden px-6 pt-16 pb-24 sm:pt-24">
	<!-- Background glow -->
	<div
		class="pointer-events-none absolute top-1/2 right-0 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-primary/25 blur-[120px]"
	></div>

	<div class="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
		<!-- LEFT COLUMN -->
		<div>
			<!-- Live badge -->
			<span
				class="inline-block rounded-full border border-border bg-surface px-4 py-1 text-sm font-medium text-secondary"
			>
				{site.ticker} · Live on Pump Fun
			</span>

			<!-- Title -->
			<h1 class="mt-6 font-display text-5xl font-black tracking-[0.05em] sm:text-7xl">
				{site.name}
			</h1>

			<!-- Tagline + Description -->
			<p class="mt-4 text-lg text-muted sm:text-xl">{site.tagline}</p>
			<p class="mt-4 max-w-lg text-muted">{site.description}</p>

			<!-- CTA Buttons -->
			<div class="mt-8 flex flex-wrap gap-4 text-sm">
				<a
					href={site.buyUrl}
					class="rounded-full bg-primary px-6 py-3 font-bold text-bg transition hover:opacity-90"
				>
					{site.buyLabel}
				</a>
				{#each site.socials as social}
					<a
						href={social.href}
						class="rounded-full border border-border px-6 py-3 font-semibold text-text transition hover:border-primary"
					>
						{social.label}
					</a>
				{/each}
			</div>

			<!-- Contract Address (CA) -->
			{#if site.contractAddress}
				<button
					onclick={copyCA}
					class="mt-6 flex w-full max-w-xs items-center justify-between gap-2 rounded-lg border border-border bg-surface px-3 py-1.5 text-left transition hover:border-primary sm:w-fit"
				>
					<div class="min-w-0">
						<span class="block text-[10px] uppercase tracking-wider text-muted">Contract Address</span>
						<p class="truncate font-mono text-xs text-primary">{site.contractAddress}</p>
					</div>
					<span
						class="shrink-0 rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold text-muted"
					>
						{copied ? 'Copied!' : 'Copy'}
					</span>
				</button>
			{/if}
		</div>

		<!-- RIGHT COLUMN: Hero Image -->
		<div class="relative mx-auto w-full max-w-md">
			<div class="absolute inset-0 -z-10 rounded-full bg-secondary/20 blur-[100px]"></div>
			<img
				src={site.heroImage}
				alt={site.name}
				class="w-full rounded-3xl border border-border object-cover shadow-2xl"
			/>
		</div>
	</div>
</section>