<script>
	import * as Card from '$lib/components/ui/card/index'
	import { Button } from '$lib/components/ui/button/index'
	import { Label } from '$lib/components/ui/label/index'
	import { Input } from '$lib/components/ui/input/index'
</script>

<Card.Root class="w-full max-w-sm">
	<Card.Header class="items-center">
		<img src="/login/logo-square.png" width="128" height="128" alt="Project logo" />
		<Card.Title class="text-2xl">¡Bienvenido a MTC!</Card.Title>
	</Card.Header>
	<Card.Content class="grid gap-4">
		<div class="grid gap-2">
			<Label for="email">Nombre de usuario / Email</Label>
			<Input id="email" type="email" placeholder="m@example.com" required />
		</div>
		<div class="grid gap-2">
			<Label for="password">Contraseña</Label>
			<Input id="password" type="password" required />
		</div>
	</Card.Content>
	<Card.Footer>
		<Button class="w-full">ENTRAR</Button>
	</Card.Footer>
</Card.Root>
