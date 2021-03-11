<template>
  <div>
    <add-blog></add-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';

export default {
  components: {
    'addBlog' : addBlog
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
