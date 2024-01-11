<script lang="ts">
  import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte'
</script>

<!-- // TODO : Data driven selection -->
<div class="flex items-center space-x-4">
  <Skeleton class="h-16 w-16 rounded-full" />
  <div class="space-y-2">
    <Skeleton class="h-10 w-[250px]" />
    <Skeleton class="h-6 w-[200px]" />
  </div>
</div>
