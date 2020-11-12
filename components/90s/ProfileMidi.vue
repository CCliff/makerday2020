<template>
  <div 
  	:class="$nameClass(className, null, variations)"
  >
    <div :class="$nameClass(className, 'container')">
    	<div :class="$nameClass(className, 'player')">
        <div :class="$nameClass(className, 'playerControls')">
      		<button 
      			:class="$nameClass(className, 'play')"
      			@click="onPlayClick"
      		>Play</button>
      		<button 
      			:class="$nameClass(className, 'play')"
      			@click="onPauseClick"
      		>Pause</button>
        </div>
    		<span :class="$nameClass(className, 'play')">Now Playing: {{midi}}</span>
    	</div>
    </div>
  </div>
</template>

<script>  
  export default {
    name: 'ProfileMidi',

    props: {
    	variations: {
    		type: Array
    	},
      midi: {}
    },

    data () {
      return {
        className: 'profileMidi',
      }
    },

    mounted () {
    	this.playMidi();
    },

    methods: {
    	onPlayClick () {
    		this.playMidi();
    	},

    	onPauseClick () {
    		MIDIjs.pause();
    	},

    	playMidi () {
    		MIDIjs.play(this.midi);
    	},
    }
  }
</script>

<style lang="scss">
	$class: nameClass(profileMidi);


	#{$class} {
    margin-bottom: remify(32px);

	  @include desktop {

	  }
	}
</style>
