<script lang="ts">
	import { Badge } from '$lib/components/ui/badge'
	import { getListsState } from '$lib/stores/lists.store'
	import { page } from '$app/stores'
	import { cn } from '$lib/utils'
	import ListForm from '$lib/components/ListForm.svelte'

	const listsState = getListsState()
</script>

<nav class="grid items-start px-2 text-sm font-medium lg:px-4">
	{#if $listsState}
		{#each $listsState as list (list.id)}
			<a
				href={list.id}
				class={cn(
					'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground',
					$page.url.pathname === '/' + list.id ? 'bg-muted' : ''
				)}>
				<!--		Icon	<Home class="h-4 w-4" />-->
				{list.name}
				<!--				<Badge-->
				<!--					variant={$page.url.pathname === '/' + list.id ? 'default' : 'secondary'}-->
				<!--					class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">-->
				<!--					{list.tasks.length}-->
				<!--				</Badge>-->
			</a>
		{/each}

		<ListForm />
	{/if}
</nav>
