<script setup>
const { data: posts } = await useAsyncData('latest-posts', () =>
    queryContent('/blog')
        .sort({ data: 1 })
        .limit(3)
        .find()
)
</script>

<template>
  <section>
    <h1 class="text-5xl font-bold mt-20">Hello, I'm nothing</h1>
    <p class="text-base text-gray-900 p-2 italic">Frontend Developer</p>
  </section>
  <section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
      <h2 class="text-3xl font-bold mt-8">My Story</h2>
      <p class="text-lg py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid amet
        aspernatur
        assumenda consectetur, dignissimos fugiat harum inventore modi necessitatibus nesciunt nobis numquam,
        provident quam quas quo quos. Architecto, reiciendis.
      </p>
      <p class="text-lg py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid amet
        aspernatur
        assumenda consectetur, dignissimos fugiat harum inventore modi necessitatibus nesciunt nobis numquam,
        provident quam quas quo quos. Architecto, reiciendis.
      </p>
      <p class="text-lg py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid amet
        aspernatur
        assumenda consectetur, dignissimos fugiat harum inventore modi necessitatibus nesciunt nobis numquam,
        provident quam quas quo quos. Architecto, reiciendis.
      </p>
    </div>
    <img src="~/assets/images/me.jpg" class="w-1/2 md:max-w-sm p-8 max-auto" alt="me">
  </section>
  <section>
    <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
    <div class="grid md:grid-cols-3 mt-8 gap-10">
      <PostCard :posts="posts"/>
    </div>
  </section>
</template>