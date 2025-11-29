<template>
  <div>
    <section class="section-c21fbea cc-sct">
      <div class="container-c4ef559 cc-cntr">
        <h1 class="paragraph-c826c7b">Development Notes</h1>
        <p class="paragraph-cfafab9">Follow the development journey of Ether Racing League.</p>
      </div>
    </section>

    <section class="section-blog cc-sct">
      <div class="cc-cntr">
        <div class="blog-posts">
          <article v-for="post in blogPosts" :key="post.slug" class="blog-post">
            <router-link :to="`/${post.slug}`" class="blog-post__link">
              <h2 class="blog-post__title">{{ post.title }}</h2>
              <time class="blog-post__date">{{ post.date }}</time>
              <p class="blog-post__excerpt">{{ post.excerpt }}</p>
            </router-link>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const blogPosts = [
  {
    slug: 'the-writing-process',
    title: 'The writing process',
    date: 'December 18, 2023',
    excerpt: 'An inside look at how the story and lore of Ether Racing League comes together.'
  },
  {
    slug: 'going-fast',
    title: 'Going fast',
    date: 'December 14, 2023',
    excerpt: 'Exploring the mechanics of high-speed hover bike racing.'
  },
  {
    slug: 'the-origin-of-the-idea',
    title: 'The origin of the idea',
    date: 'December 11, 2023',
    excerpt: 'How Ether Racing League came to be and what inspired its creation.'
  },
  {
    slug: 'about-the-website',
    title: 'About the website',
    date: 'December 6, 2023',
    excerpt: 'Details about the creation of this website and its purpose.'
  },
  {
    slug: 'development-starts-now',
    title: 'Development starts… now!',
    date: 'December 5, 2023',
    excerpt: 'The official announcement that development has begun on Ether Racing League.'
  }
]
</script>
