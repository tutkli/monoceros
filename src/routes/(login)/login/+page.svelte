<script lang="ts">
	import * as Card from '$lib/components/ui/card/index'
	import * as Form from '$lib/components/ui/form'
	import { Input } from '$lib/components/ui/input/index'
	import { superForm } from 'sveltekit-superforms'
	import { zod } from 'sveltekit-superforms/adapters'
	import type { PageData } from './$types'
	import { toast } from 'svelte-sonner'
	import { goto } from '$app/navigation'
	import { loginSchema } from '$lib/schemas/login.schema'
	import { userStore } from '$lib/stores/user.store'

	export let data: PageData

	const form = superForm(data.form, {
		SPA: true,
		dataType: 'json',
		validators: zod(loginSchema),
		customValidity: true,
		resetForm: false,
		onUpdate({ form }) {
			if (form.valid) {
				userStore.set({ username: form.data.username })
				toast.success(`Welcome ${form.data.username}!`)
				goto('/app')
			}
		},
	})

	const { form: formData, enhance } = form
</script>

<form use:enhance>
	<Card.Root class="w-full max-w-sm">
		<Card.Header class="items-center">
			<img src="/monoceros.png" width="128" height="128" alt="Project logo" class="mb-4" />
			<Card.Title class="text-2xl">¡Bienvenido a Monoceros!</Card.Title>
			<Card.Description>Tu aplicación Todo local</Card.Description>
		</Card.Header>
		<Card.Content class="grid gap-4">
			<Form.Field {form} name="username">
				<Form.Control let:attrs>
					<div class="grid gap-2">
						<Form.Label for="username">Username</Form.Label>
						<Input
							{...attrs}
							id="username"
							type="text"
							placeholder="Enter username"
							bind:value={$formData.username} />
					</div>
				</Form.Control>
				<Form.FieldErrors />
			</Form.Field>
		</Card.Content>
		<Card.Footer>
			<Form.Button class="w-full">ENTRAR</Form.Button>
		</Card.Footer>
	</Card.Root>
</form>
