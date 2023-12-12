<script>
  export let data;
</script>
<body>
<article class="m-4">
  {#each data.books as post}
  <section class="bg-sbb m-auto p-10 Card">
    <h1 class="font-book text-5xl p-2 text-center">{post.title}</h1>
    <h2 class="font-book text-2xl p-2 text-center">{post.author}</h2>
    <img src="{post.image}" alt="book covers" class="">
    <p class="font-book text-lg p-2">{post.thoughts}</p>
    <p class="font-book text-lg p-2 font-bold">{post.tags}</p>
  </section>

  {/each}
</article>

</body>

<style>
  :global(body) {
    background-color: #393E41;
    
  }



  .Card{
  max-width: 80ch;
  margin: auto;
  margin-top: .5rem;
  padding: 2rem;
  border-radius: 1rem;
  
  color: black;
  
  }
</style>