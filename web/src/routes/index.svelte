<script lang="ts">
	import { GetCategoresWithProduct } from '../generated/gql';

	$: categoriesWithProducts = GetCategoresWithProduct({});
</script>

<h2>index</h2>
{#if $categoriesWithProducts.loading}
	<span>Loading...</span>
{:else}
	{#each $categoriesWithProducts?.data?.categories.flatMap( (category) => category.product_categories.map( (pc) => ({ ...pc.product, categoryName: category.name }) ) ) || [] as productWithCategory}
		<div>
			<span>{productWithCategory.id}</span>
			<span>{productWithCategory.name}</span>
			<span>{productWithCategory.price}</span>
			<span>{productWithCategory.categoryName}</span>
		</div>
	{/each}
{/if}
