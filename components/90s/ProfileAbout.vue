<template>
  <div 
  	:class="$nameClass(className, null, variations)"
  	:style="style"
  >
  	<div :class="$nameClass(className, 'container')">
  		<div :class="$nameClass(className, 'statusWrapper')">
  			<span :class="$nameClass(className, 'statusLabel')">Status: </span>
  			<p :class="$nameClass(className, 'status')">{{status}}</p>
  		</div>

  		<div :class="$nameClass(className, 'nameWrapper')">
  			<h2 :class="$nameClass(className, 'name')">{{name}}</h2>
  		</div>
  		<div :class="$nameClass(className, 'contentWrapper')">
  			<div :class="$nameClass(className, 'container')">
  				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida augue nec felis vehicula scelerisque. Morbi vitae iaculis velit, nec vulputate sem. Nulla bibendum mi sed nisi imperdiet, sed auctor diam commodo. Phasellus venenatis nulla sodales augue efficitur finibus. Cras porta luctus quam, vel rhoncus purus varius in. Phasellus id sagittis tellus. Fusce sem ligula, bibendum eget erat laoreet, pulvinar tempus dolor. Pellentesque accumsan fringilla rhoncus. Sed erat purus, vehicula at rutrum at, iaculis quis sapien. Maecenas turpis tellus, faucibus a cursus fringilla, tincidunt quis sapien. Donec eget tristique ante.</p>
        </div>
  		</div>
  	</div>
  </div>
</template>

<script>  
  export default {
    name: 'ProfileInfo',

    props: {
    	variations: {
    		type: Array
    	},
    	name: {},
    	status: {},
    	about: {},
    	design: {},
    },

    data () {
      return {
        className: 'profileInfo',
        style: {
        	backgroundColor: this.design.bgColor,
        	color: this.design.color,
        	borderColor: this.design.borderColor,
        }
      }
    },
  }
</script>

<style lang="scss">
	$class: nameClass(profileInfo);


	#{$class} {
	  padding: remify(8px);
	  margin-bottom: remify(32px);
	  border: 1px sold transparent;

	  &_title {
	  	font-size: remify(24px);
	  	margin-bottom: remify(8px);
	  }

	  p {
	  	line-height: remify(20px);
	  	margin-bottom: remify(20px);
	  }


	  @include desktop {

	  }
	}
</style>
