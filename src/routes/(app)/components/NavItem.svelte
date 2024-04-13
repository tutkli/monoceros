<script lang="ts">
	import { Button } from '$lib/components/ui/button/index'
	import * as Tooltip from '$lib/components/ui/tooltip/index'
	import { page } from '$app/stores'

	export let tooltip: string
	export let href: string | undefined = undefined
</script>

<Tooltip.Root>
	<Tooltip.Trigger asChild let:builder>
		<Button
			on:click
			variant="ghost"
			size="icon"
			{href}
			class={$page.url.pathname === href ? 'rounded-lg bg-muted' : ''}
			aria-label={tooltip}
			builders={[builder]}>
			<slot />
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content side="right" sideOffset={5}>
		{tooltip}
	</Tooltip.Content>
</Tooltip.Root>
