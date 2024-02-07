<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import { page } from "$app/stores";

  const { date } = $page.data as PageData;

  let remains = $state(date.getTime() - new Date().getTime());

  const getRemaining = (d: number) => {
    const days = Math.floor(d / (1000 * 60 * 60 * 24));
    const hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((d % (1000 * 60)) / 1000);
    return [days, hours, minutes, seconds];
  };
  const [days, hours, minutes, seconds] = $derived(getRemaining(remains));

  onMount(() => {
    const interval = setInterval(() => {
      if (remains > 0) {
        remains -= 1000;
      }
    }, 1000);
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>{days} days {hours}:{minutes}:{seconds} - Quentin Moessner</title>
</svelte:head>

<div class="bg-[#191A24] h-screen">
  <div
    class="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16"
  >
    <div class="flex justify-center gap-3 sm:gap-8">
      <div class="flex flex-col gap-5 relative">
        <div
          class="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg"
        >
          <div
            class="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"
          ></div>
          <span
            class="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]"
          >
            {days}
          </span>
          <div
            class="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"
          ></div>
        </div>
        <span class="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
          {days == 1 ? "Day" : "Days"}
        </span>
      </div>
      <div class="flex flex-col gap-5 relative">
        <div
          class="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg"
        >
          <div
            class="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"
          ></div>
          <span
            class="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]"
          >
            {hours}
          </span>
          <div
            class="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"
          ></div>
        </div>
        <span
          class="text-[#8486A9] text-xs sm:text-2xl text-center font-medium"
        >
          {hours == 1 ? "Hour" : "Hours"}
        </span>
      </div>
      <div class="flex flex-col gap-5 relative">
        <div
          class="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg"
        >
          <div
            class="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"
          ></div>
          <span
            class="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]"
          >
            {minutes}
          </span>
          <div
            class="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"
          ></div>
        </div>
        <span class="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
          {minutes == 1 ? "Minute" : "Minutes"}
        </span>
      </div>
      <div class="flex flex-col gap-5 relative">
        <div
          class="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg"
        >
          <div
            class="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"
          ></div>
          <span
            class="lg:text-7xl sm:text-6xl text-3xl font-semibold text-[#a5b4fc]"
          >
            {seconds}
          </span>
          <div
            class="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"
          ></div>
        </div>
        <span class="text-[#8486A9] text-xs sm:text-2xl text-center capitalize">
          {seconds == 1 ? "Second" : "Seconds"}
        </span>
      </div>
    </div>
  </div>
</div>
