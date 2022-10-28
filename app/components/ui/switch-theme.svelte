<svelte:options tag="switch-theme" />

<script lang="ts">
  let darkTheme: boolean = true;

  const toggle = () => {
    darkTheme = !darkTheme;
    localStorage.setItem("theme", darkTheme ? "dark" : "light");

    darkTheme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  if (window) {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      darkTheme = true;
    } else {
      document.documentElement.classList.remove("dark");
      darkTheme = false;
    }
  }
</script>

<div>
  <input
    type="checkbox"
    checked={darkTheme}
    on:click={toggle}
    id="theme-toggle"
  />
  <label for="theme-toggle" />
</div>

<style lang="postcss">
  #theme-toggle {
    @apply hidden;
  }

  #theme-toggle + label {
    @apply inline-block cursor-pointer h-8 w-8 rounded-full duration-300 content-[''];
  }

  #theme-toggle:not(:checked) + label {
    @apply bg-yellow-400;
  }

  #theme-toggle:checked + label {
    @apply bg-transparent;
    box-shadow: inset -10px -8px 1px 1px #ddd;
  }
</style>
