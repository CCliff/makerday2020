<template>
  <div 
  	:class="$nameClass(className, null, variations)"
  	:style="style"
  >
  	<div :class="$nameClass(className, 'container')">
  		<div :class="$nameClass(className, 'titleWrapper')">
  			<h2 :class="$nameClass(className, 'title')">My First Blog Post</h2>
  		</div>
  		<div :class="$nameClass(className, 'contentWrapper')">
  			<div :class="$nameClass(className, 'container')">
  				<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis gravida augue nec felis vehicula scelerisque. Morbi vitae iaculis velit, nec vulputate sem. Nulla bibendum mi sed nisi imperdiet, sed auctor diam commodo. Phasellus venenatis nulla sodales augue efficitur finibus. Cras porta luctus quam, vel rhoncus purus varius in. Phasellus id sagittis tellus. Fusce sem ligula, bibendum eget erat laoreet, pulvinar tempus dolor. Pellentesque accumsan fringilla rhoncus. Sed erat purus, vehicula at rutrum at, iaculis quis sapien. Maecenas turpis tellus, faucibus a cursus fringilla, tincidunt quis sapien. Donec eget tristique ante.</p>
					<p>Vestibulum varius lectus leo, sed gravida eros laoreet porttitor. Sed leo ante, varius sit amet nibh sit amet, porttitor condimentum ligula. Aenean mollis dapibus ipsum, vel venenatis neque tempus a. Cras in lobortis neque. Mauris porttitor, risus ut laoreet fermentum, leo dolor malesuada nisl, vel faucibus est felis sit amet leo. Morbi libero nisl, viverra sit amet scelerisque id, sollicitudin a diam. Donec lobortis elit sit amet ipsum vestibulum porta. In gravida gravida mattis. Cras ullamcorper viverra pulvinar. Vestibulum quis turpis sapien. Donec congue turpis ut nibh ullamcorper, mollis placerat ante hendrerit. Sed porttitor sed elit ac condimentum. Phasellus et tempus est.<p>
					<p>Sed id massa a ligula gravida lacinia non rutrum metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu cursus libero. Curabitur eleifend odio sapien, vel feugiat mauris malesuada nec. Maecenas nec enim nec massa aliquet lacinia vel eget turpis. Suspendisse pretium diam ut mauris fermentum, quis aliquam erat aliquam. Nulla eget congue massa. Mauris felis risus, aliquam in fringilla id, pretium vel nibh. Integer tincidunt, velit a rhoncus interdum, lectus quam tincidunt augue, non rhoncus ligula ex ultrices erat. Pellentesque consequat lacinia ornare. Nulla porttitor ipsum sit amet metus interdum, at imperdiet enim porta. Sed pellentesque laoreet libero, non euismod mi varius ut. Proin luctus suscipit ultrices. Sed nec massa elementum, scelerisque tortor sed, fermentum nisl. In hac habitasse platea dictumst.</p> 
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
    	}
    },

    data () {
      return {
        className: 'profileInfo',
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
