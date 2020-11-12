<template>
  <div 
  	:class="$nameClass(className, null, variations)"
  >
    <div :class="$nameClass(className, 'container')">
    	<div :class="$nameClass(className, 'blogPostsContainer')">
    		<ProfileBlogPost/>
    	</div>
    </div>
  </div>
</template>

<script>  
	import ProfileBlogPost from './ProfileBlogPost';
  export default {
    name: 'ProfileBlog',

    components: {
    	ProfileBlogPost,
    },

    props: {
    	variations: {
    		type: Array
    	}
    },

    data () {
      return {
        className: 'profileBlog',
      }
    },
  }
</script>

<style lang="scss">
	$class: nameClass(profileBlog);


	#{$class} {

	  @include desktop {

	  }
	}
</style>
