<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <show-blog></show-blog>

  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';

export default {
  components: {
    'addBlog' : addBlog,
    'showBlog': showBlogs,
  },
  data () {
    return {
    }
  },
  methods:{

  }
}
</script>

<style scoped>
body{
  margin: 0;
  font-family: 'Gill Sans';
}
</style>
