<script lang="ts">
	import Sun from 'lucide-svelte/icons/sun'
	import Moon from 'lucide-svelte/icons/moon'
	import { toggleMode } from 'mode-watcher'
	import { Button } from '$lib/components/ui/button/index'
	import * as Tooltip from '$lib/components/ui/tooltip/index'
</script>

<Tooltip.Root>
	<Tooltip.Trigger asChild let:builder>
		<Button
			on:click={toggleMode}
			variant="outline"
			size="icon"
			builders={[builder]}
			class="ml-auto">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<span class="sr-only">Toggle theme</span>
		</Button>
	</Tooltip.Trigger>
	<Tooltip.Content sideOffset={5}>Cambiar tema</Tooltip.Content>
</Tooltip.Root>
