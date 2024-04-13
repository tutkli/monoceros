<script lang="ts">
	import '../app.pcss'
	import { Toaster } from '$lib/components/ui/sonner/index'
	import { ModeWatcher } from 'mode-watcher'
	import Menu from 'lucide-svelte/icons/menu'
	import Search from 'lucide-svelte/icons/search'
	import { Button } from '$lib/components/ui/button/index'
	import * as Sheet from '$lib/components/ui/sheet/index'
	import ModeButton from '$lib/components/ModeButton.svelte'
	import NavigationMenu from '$lib/components/navigation/NavigationMenu.svelte'
	import MobileNavigationMenu from '$lib/components/navigation/MobileNavigationMenu.svelte'
	import MonocerosLogo from '$lib/components/MonocerosLogo.svelte'
</script>

<ModeWatcher />
<Toaster richColors />

<div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
	<div class="hidden border-r md:block">
		<div class="flex h-full max-h-screen flex-col gap-2">
			<div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
				<MonocerosLogo />
			</div>
			<div class="flex-1">
				<NavigationMenu />
			</div>
		</div>
	</div>
	<div class="flex flex-col">
		<header class="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
			<Sheet.Root>
				<Sheet.Trigger asChild let:builder>
					<Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
						<Menu class="h-5 w-5" />
						<span class="sr-only">Toggle navigation menu</span>
					</Button>
				</Sheet.Trigger>
				<Sheet.Content side="left" class="flex flex-col">
					<MobileNavigationMenu />
				</Sheet.Content>
			</Sheet.Root>
			<div class="flex w-full flex-1 justify-center">
				<Button variant="secondary" class="w-full md:w-2/3 xl:w-1/3">
					<Search class="mr-2 size-4" />
					Search tasks
				</Button>
			</div>
			<ModeButton />
		</header>
		<main class="flex flex-1 flex-col gap-4 bg-muted/80 p-4 dark:bg-muted/40 lg:gap-6 lg:p-6">
			<div class="flex items-center">
				<h1 class="text-lg font-semibold md:text-2xl">Good morning! 👋</h1>
			</div>

			<slot />
		</main>
	</div>
</div>
