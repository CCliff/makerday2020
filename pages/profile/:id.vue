<template>
  <div :class="$nameClass(className, null, variations)">
  	<Profile
  		:data="profileData"
  	/>
  </div>
</template>

<script>
	import Profile from '~/components/Profile/Profile';

	export default {
	  name: 'ProfilePage',

	  components : {
	  	Profile,
	  },

	  props: {
	  	variations: {
	  		type: Array
	  	},
	  },

	  data () {
	  	const profileData = require(`~/static/data/${this.$route.params.id}.json`);

	    return {
	      className: 'profilePage',
	      profileData
	    }
	  },

	}
</script>

<style lang="scss">
	
</style>
