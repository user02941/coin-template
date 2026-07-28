<script lang="ts">
	import { site } from '$lib/config';
</script>

<section id="roadmap" class="border-t border-border px-6 py-20">
	<div class="mx-auto max-w-4xl">
		<h2 class="mt-6 font-display text-3xl font-bold sm:text-4xl">{site.roadmap.heading}</h2>

		<div class="relative mt-12 grid gap-6 md:grid-cols-3">
			<div class="absolute top-6 left-0 right-0 hidden h-px bg-border md:block"></div>

			{#each site.roadmap.phases as phase}
				<div class="relative">
					<div
						class="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg font-display text-sm text-primary"
					>
						{phase.phase.replace('Phase ', '')}
					</div>
					<div
						class="rounded-2xl border border-border bg-surface p-6 text-center transition hover:border-primary"
					>
						<h3 class="font-display text-xl">{phase.name}</h3>
						<p class="mt-2 text-muted">{phase.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>