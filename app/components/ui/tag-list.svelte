<svelte:options tag="tag-list" />

<script lang="ts">
  export const limit = 3;
  export let tags: string;
  export let shuffle: boolean = false;
  $: tagList = tags
    .split(/[,|; ]+/gi)
    .sort((a, b) => (shuffle ? Math.random() - 0.5 : 1));
  $: visibles = tagList.slice(0, limit);
  $: hidden = tagList
    .slice(limit)
    .map((t) => `#${t}`)
    .join(", ");
</script>

<div class="list">
  {#each visibles as tag}
    <span class="tag tag-{tag}">#{tag}</span>
  {/each}
  {#if hidden.length > 0}
    <div class="tag more" data-tooltip={hidden}>+</div>
  {/if}
</div>

<style>
  .list {
    @apply grid grid-flow-col gap-1;
  }
  .tag {
    @apply inline-block mr-1 pt-1 pb-1.5 px-2 text-sm rounded-md border-none bg-black bg-opacity-30 text-white dark:text-gray3;
  }
  .more {
    @apply rounded-full bg-pink-800 text-white cursor-pointer;
  }

  .tag-javascript,
  .tag-js {
    background: #f0db4f;
    color: black;
  }

  .tag-typescript {
    background: #2775c3;
    color: white;
  }

  .tag-angular {
    background: #dc0530;
    color: #fff;
  }

  .tag-node {
    background: #90c53f;
    color: #46483d;
  }

  .tag-flutter {
    background: #54c5f8;
    color: #003b6c;
  }

  .tag-svelte {
    color: #ffffff;
    background: #ff3e00;
  }

  .tag-react {
    color: #00d8ff;
    background: #222;
  }

  .tag-ionic {
    background: white;
    color: #4a8afc;
  }

  .tag-nest {
    color: #e0234e;
    background: #000;
  }

  .tag-css {
    color: #313244;
    background: #f954be;
  }

  .tag-docker {
    color: #ffffff;
    background: #2496ed;
  }

  .tag-nextjs {
    color: #ffffff;
    background: #000000;
  }

  .tag-go {
    color: #ffffff;
    background: #00add8;
  }

  .tag-mongo {
    color: #6eb00c;
    background: #000;
  }

  .tag-elastic {
    color: #f0db4f;
    background: #000;
  }

  .tag-k8s {
    color: #4958e3;
    background: #000;
  }

  .tag-gcp {
    color: #808080;
    background: #000;
  }

  .tag-gitlab,
  .tag-github {
    color: #a2310b;
    background: #000;
  }

  .tag-c,
  .tag-vb,
  .tag-c,
  .tag-access {
    color: #497db7;
    background: #fff;
  }

  .tag-html {
    color: #fff;
    background: #497db7;
  }

  .tag-css {
    color: #ffffff;
    background: #d20909;
  }

  .tag-php,
  .tag-symphony {
    color: #ffffff;
    background: #9d20db;
  }

  [data-tooltip] {
    position: relative;
    z-index: 2;
  }

  [data-tooltip]:before,
  [data-tooltip]:after {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: 0.2s ease-out;
    transform: translate(-50%, 5px);
  }

  [data-tooltip]:before {
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-bottom: 5px;
    padding: 7px;
    width: 200px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: #000;
    background-color: hsla(0, 0%, 20%, 0.9);
    color: #fff;
    content: attr(data-tooltip);
    text-align: center;
    font-size: 14px;
    line-height: 1.2;
    transition: 0.2s ease-out;
  }

  [data-tooltip]:after {
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 0;
    border-top: 5px solid #000;
    border-top: 5px solid hsla(0, 0%, 20%, 0.9);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: " ";
    font-size: 0;
    line-height: 0;
  }

  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, 0);
  }
  [data-tooltip="false"]:hover:before,
  [data-tooltip="false"]:hover:after {
    visibility: hidden;
    opacity: 0;
  }
</style>
