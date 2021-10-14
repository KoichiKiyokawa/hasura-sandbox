<script lang="ts">
	import client from '../modules/client';
	import { setClient } from 'svelte-apollo';

	setClient(client);
</script>

<slot />
