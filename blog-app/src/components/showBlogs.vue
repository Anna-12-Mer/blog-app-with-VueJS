<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" :key="blog" class="single-blog">
      <h3>{{blog.title}}</h3>
      <article> {{blog.body}} </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs:[]
    }
  },
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then((data) => {
        console.log(data);
        this.blogs= data.body.slice(0,10);
    }).catch((err) => {
        console.log(err);
    });
  }
}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

</style>
