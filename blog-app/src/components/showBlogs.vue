<template>
  <div id="show-blogs">
    <br>

    <div class="d-flex justify-content-between">
      <h2>All Blog Articles</h2>
      <input type="text" v-model="search" placeholder="search blogs..."/>
    </div>
    <div v-for="blog in filterBlogs" :key="blog" class="single-blog">
      <h3>{{blog.title | to-upercase }}</h3>
      <article> {{blog.body | snippet}} </article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs:[],
      search:''
    }
  },
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then((data) => {
        console.log(data);
        this.blogs= data.body.slice(0,10);
    }).catch((err) => {
        console.log(err);
    });
  },
  computed: {
    filterBlogs: function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search)
      })
    }
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
