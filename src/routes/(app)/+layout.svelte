<script lang="ts">
	import Bot from 'lucide-svelte/icons/bot'
	import Wrench from 'lucide-svelte/icons/wrench'
	import CodeXML from 'lucide-svelte/icons/code-xml'
	import Settings2 from 'lucide-svelte/icons/settings-2'
	import LifeBuoy from 'lucide-svelte/icons/life-buoy'
	import Book from 'lucide-svelte/icons/book'
	import SquareUser from 'lucide-svelte/icons/square-user'
	import Share from 'lucide-svelte/icons/share'
	import { Button } from '$lib/components/ui/button/index'
	import ModeButton from '$lib/components/ModeButton.svelte'
	import NavItem from './components/NavItem.svelte'
	import { headerStore } from '$lib/stores/app-header.store'
</script>

<div class="grid h-screen w-full pl-[53px]">
	<aside class="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
		<div class="border-b p-2">
			<Button variant="link" size="icon" aria-label="Home" href="/app">
				<img src="/monoceros.png" width="24" height="24" alt="Monoceros logo" />
			</Button>
		</div>
		<nav class="grid gap-1 p-2">
			<NavItem tooltip="Management" href="/app/management">
				<Wrench class="size-5" />
			</NavItem>
			<NavItem tooltip="Models">
				<Bot class="size-5" />
			</NavItem>
			<NavItem tooltip="API">
				<CodeXML class="size-5" />
			</NavItem>
			<NavItem tooltip="Documentation">
				<Book class="size-5" />
			</NavItem>
			<NavItem tooltip="Settings">
				<Settings2 class="size-5" />
			</NavItem>
		</nav>
		<nav class="mt-auto grid gap-1 p-2">
			<ModeButton />
			<NavItem tooltip="Help">
				<LifeBuoy class="size-5" />
			</NavItem>
			<NavItem tooltip="Account">
				<SquareUser class="size-5" />
			</NavItem>
		</nav>
	</aside>
	<div class="flex flex-col">
		<header class="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
			<h1 class="text-xl font-semibold">{$headerStore.title}</h1>
			<Button variant="outline" size="sm" class="ml-auto gap-1.5 text-sm">
				<Share class="size-3.5" />
				Share
			</Button>
		</header>
		<main class="grid flex-1 p-4">
			<slot />
		</main>
	</div>
</div>
