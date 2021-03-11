
<template>
  <div id="add-blog">
    <h2>Add new Blog Post</h2>
    <form v-if="!submitted" >
      <label for="title">Blog title</label>
      <input type="text" required v-model.lazy="blog.title" />
      <label>Blog content</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label> Infographics</label>
        <input type="checkbox" value="Infographics" v-model="blog.categories" />
        <label>Interviews</label>
        <input type="checkbox" value="Interviews" v-model="blog.categories" />
        <label> Newsworthy Articles</label>
        <input type="checkbox" value="Newsworthy" v-model="blog.categories" />
        <label> Personal Stories</label>
        <input type="checkbox" value="Personal" v-model="blog.categories" />
      </div>
      <label>Author: </label>
      <select v-model="blog.author">
        <option v-for="author in authors" :key="author">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <!-- Preview -->
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title :{{blog.title}} </p>
      <p>Blog content: </p>
      <p>
        {{blog.content}}
      </p>
      <p>Categories Tag</p>
      <ul>
        <li v-for="cat in blog.categories" :key="cat">{{cat}} </li>
      </ul>
      <p>Author: {{ blog.author}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog: {
        title:'',
        content:'',
        categories: [],
        author: ''
      },
      authors:['Anna MAMMER ', 'Yoshi MAMMER', 'Mer MAMMER'],
      submitted:false
    }
  },
  methods: {
    post: function(){
      this.$http.post('http://jsonplaceholder.typicode.com/posts',{
        title: this.blog.title,
        body: this.blog.content,
        userID:1
      }).then((data)=>{
        console.log(data);
        this.submitted = true;
      });
    }
  }
}
</script>
<style scoped>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px ;
}
#checkboxes{
  display: inline-block;
  margin-right: 0px;
}
#checkboxes label {
  display: inline-block;
}
ul{
  display: inline-block;
}
</style>
