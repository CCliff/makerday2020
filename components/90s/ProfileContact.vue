<template>
  <div 
  	:class="$nameClass(className, null, variations)"
  	:style="style"
  >
  	<div :class="$nameClass(className, 'container')">
  		<ul :class="$nameClass(className, 'contactList')">
  			<li :class="$nameClass(className, 'contact')">
		  		<div :class="$nameClass(className, 'emailWrapper')">
		  			<div :class="$nameClass(className, 'email')">
		  				<span :class="$nameClass(className, 'emailLabel')">Email: </span>
		  				<a 
		  					:class="$nameClass(className, 'emailAddress')"
		  					href="mailto:cclifford@wearebarbarian.com"
		  				>cclifford@wearebarbarian.com</a>
		  			</div>
		  		</div>
  			</li>
  			<li :class="$nameClass(className, 'contact')">
		  		<div :class="$nameClass(className, 'slackWrapper')">
		  			<div :class="$nameClass(className, 'slack')">
		  				<span :class="$nameClass(className, 'slackLabel')">Slack: </span>
		  				<a 
		  					:class="$nameClass(className, 'slackAddress')"
		  					href="#TODO"
		  				>CCliff</a>
		  			</div>
		  		</div>
  			</li>
  		</ul>
  	</div>
  </div>
</template>

<script>  
  export default {
    name: 'ProfileContact',

    props: {
    	variations: {
    		type: Array
    	}
    },

    data () {
      return {
        className: 'profileContact',
        style: {
        	backgroundColor: 'pink',
        	color: 'black',
        	border: '1px solid black',
        }
      }
    },
  }
</script>

<style lang="scss">
	$class: nameClass(profileContact);


	#{$class} {
	  padding: remify(8px);
	  margin-bottom: remify(32px);
	  border: 1px sold transparent;

	  &_contact {
	  	margin-bottom: remify(4px);
	  }


	  @include desktop {

	  }
	}
</style>
