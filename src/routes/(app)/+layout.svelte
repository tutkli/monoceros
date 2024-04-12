<script lang="ts">
	import Bot from 'lucide-svelte/icons/bot'
	import SquareTerminal from 'lucide-svelte/icons/square-terminal'
	import CodeXML from 'lucide-svelte/icons/code-xml'
	import Settings2 from 'lucide-svelte/icons/settings-2'
	import LifeBuoy from 'lucide-svelte/icons/life-buoy'
	import Book from 'lucide-svelte/icons/book'
	import SquareUser from 'lucide-svelte/icons/square-user'
	import Share from 'lucide-svelte/icons/share'
	import { Button } from '$lib/components/ui/button/index'
	import * as Tooltip from '$lib/components/ui/tooltip/index'
	import ModeButton from '$lib/components/ModeButton.svelte'
</script>

<div class="grid h-screen w-full pl-[53px]">
	<aside class="inset-y fixed left-0 z-20 flex h-full flex-col border-r">
		<div class="border-b p-2">
			<Button variant="link" size="icon" aria-label="Home">
				<img src="/monoceros.png" width="24" height="24" alt="Monoceros logo" />
			</Button>
		</div>
		<nav class="grid gap-1 p-2">
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<Button
						variant="ghost"
						size="icon"
						class="rounded-lg bg-muted"
						aria-label="Playground"
						builders={[builder]}>
						<SquareTerminal class="size-5" />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="right" sideOffset={5}>Playground</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<Button
						variant="ghost"
						size="icon"
						class="rounded-lg"
						aria-label="Models"
						builders={[builder]}>
						<Bot class="size-5" />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="right" sideOffset={5}>Models</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<Button
						variant="ghost"
						size="icon"
						class="rounded-lg"
						aria-label="API"
						builders={[builder]}>
						<CodeXML class="size-5" />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="right" sideOffset={5}>API</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<Button
						variant="ghost"
						size="icon"
						class="rounded-lg"
						aria-label="Documentation"
						builders={[builder]}>
						<Book class="size-5" />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="right" sideOffset={5}>Documentation</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<Button
						variant="ghost"
						size="icon"
						class="rounded-lg"
						aria-label="Settings"
						builders={[builder]}>
						<Settings2 class="size-5" />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="right" sideOffset={5}>Settings</Tooltip.Content>
			</Tooltip.Root>
		</nav>
		<nav class="mt-auto grid gap-1 p-2">
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<ModeButton builders={[builder]} />
				</Tooltip.Trigger>
				<Tooltip.Content side="right" sideOffset={5}>Cambiar tema</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<Button
						variant="ghost"
						size="icon"
						class="mt-auto rounded-lg"
						aria-label="Help"
						builders={[builder]}>
						<LifeBuoy class="size-5" />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="right" sideOffset={5}>Help</Tooltip.Content>
			</Tooltip.Root>
			<Tooltip.Root>
				<Tooltip.Trigger asChild let:builder>
					<Button
						variant="ghost"
						size="icon"
						class="mt-auto rounded-lg"
						aria-label="Account"
						builders={[builder]}>
						<SquareUser class="size-5" />
					</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="right" sideOffset={5}>Account</Tooltip.Content>
			</Tooltip.Root>
		</nav>
	</aside>
	<div class="flex flex-col">
		<header class="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
			<h1 class="text-xl font-semibold">Monoceros</h1>
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
