<script lang="ts">
	import { site } from '$lib/config';
</script>

<section id="how-to-buy" class="border-t border-border px-6 py-20">
	<div class="mx-auto max-w-4xl">
		<h2 class="mt-6 font-display text-3xl font-bold sm:text-4xl">{site.buyGuide.heading}</h2>

		<div class="relative mt-12 grid gap-6 md:grid-cols-3">
			<div class="absolute top-6 left-0 right-0 hidden h-px bg-border md:block"></div>

			{#each site.buyGuide.steps as step}
				<div class="relative flex flex-col">
					<div
						class="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-bg font-display text-lg text-primary"
					>
						{step.number}
					</div>
					<div
						class="flex-1 rounded-2xl border border-border bg-surface p-6 text-center transition hover:border-primary"
					>
						<p class="text-muted">{@html step.text}</p>
					</div>
				</div>
			{/each}
		</div>

		<p class="mt-8 text-center text-muted">{site.buyGuide.disclaimer}</p>
	</div>
</section>