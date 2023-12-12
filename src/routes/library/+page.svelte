<script>
  export let data;
</script>
<body>
<article class="flex flex-row justify-evenly">
  {#each data.books as post}
  <section class="bg-sbb h-96 w-96 m-6 ">
    <h1 class="font-book text-xl p-2 text-center">{post.title}</h1>
    <h2 class="font-book text-lg p-2 text-center">{post.author}</h2>
    <img src="{post.cover}" alt="book covers">
  </section>

  {/each}
</article>

</body>

<style>
  :global(body) {
    background-color: #393E41;
    
  }
</style>