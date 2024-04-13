<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js'
	import { listsStore } from '$lib/stores/lists.store'
	import { page } from '$app/stores'
	import { cn } from '$lib/utils'
	import MonocerosLogo from '$lib/components/MonocerosLogo.svelte'
</script>

<nav class="grid gap-2 text-lg font-medium">
	<MonocerosLogo />

	{#each $listsStore as list (list.id)}
		<a
			href={list.id}
			class={cn(
				'mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-primary',
				$page.url.pathname === list.id ? 'bg-muted' : ''
			)}>
			<!--			<Home class="h-5 w-5" />-->
			{list.name}
			<Badge
				variant="secondary"
				class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
				{list.tasks.length}
			</Badge>
		</a>
	{/each}
</nav>
