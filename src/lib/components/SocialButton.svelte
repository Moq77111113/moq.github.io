<script lang="ts">
  let clazz: string = ''
  let icon: `fa-${string} ${string}`
  let name: string
  export { clazz as class, icon, name }
</script>

<div class={`relative ${clazz}`}>
  <button
    class={`peer
      flex h-20 w-20 items-center justify-center rounded-3xl border-2 border-transparent bg-white bg-opacity-10 text-3xl shadow
      hover:border-4 hover:border-white hover:bg-opacity-35 hover:outline-none`}
  >
    <span class={` text-white ${icon}`} />
  </button>

  <span
    class="absolute left-1/2 top-1/2 mx-auto mt-4 -translate-x-1/2 translate-y-full whitespace-nowrap rounded-lg bg-white px-3 py-1
    text-sm text-gray-600 opacity-0 transition-opacity peer-hover:opacity-100"
    >{name}
    <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
  </span>
</div>
