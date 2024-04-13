<script>
	import '../app.pcss'
	import { Toaster } from '$lib/components/ui/sonner/index'
	import { ModeWatcher } from 'mode-watcher'
</script>

<ModeWatcher />
<Toaster richColors />

<slot></slot>
