<template>
  <div :class="$nameClass(className, null, variations)">
  	<Page90s
  		:data="data"
  	/>
  </div>
</template>

<script>
	import Page90s from '~/components/90s/Page90s';

	export default {
	  name: 'Profile',

	  components: {
	  	Page90s,
	  },

	  props: {
	  	variations: {
	  		type: Array
	  	},
	  	data: {
	  		type: Object,
	  	}
	  },

	  data () {
	    return {
	      className: 'profile',
	    }
	  },
	}
</script>

<style lang="scss">
	
</style>
