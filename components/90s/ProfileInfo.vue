<template>
  <div 
  	:class="$nameClass(className, null, variations)"
  	:style="style"
  >
  	<div :class="$nameClass(className, 'container')">
			<div :class="$nameClass(className, 'imageWrapper')">
				<img 
					:class="$nameClass(className, 'image')"
					:src="photo"
				/>
			</div>
      <ProfileMidi
        :midi="midi"
      />
      <div :class="$nameClass(className, 'barbSinceWrapper')">
        <p :class="$nameClass(className, 'barbSinceWrapper')">Barbarian since {{joinDate}}</p>
      </div>
  		<div :class="$nameClass(className, 'detailsContainer')">
  			<ul :class="$nameClass(className, 'detailsList')">
  				<li :class="$nameClass(className, 'detail')"><span :class="$nameClass(className, 'detailLabel')">Pronouns</span><span :class="$nameClass(className, 'detailValue')">{{pronouns}}</span></li>
  				<li :class="$nameClass(className, 'detail')"><span :class="$nameClass(className, 'detailLabel')">Birthday</span><span :class="$nameClass(className, 'detailValue')">{{birthday}}</span></li>
  				<li :class="$nameClass(className, 'detail')"><span :class="$nameClass(className, 'detailLabel')">Relationship status / kids:</span><span :class="$nameClass(className, 'detailValue')">{{relationship}} / {{kids}}</span></li>
  				<li :class="$nameClass(className, 'detail')"><span :class="$nameClass(className, 'detailLabel')">Hometown</span><span :class="$nameClass(className, 'detailValue')">{{hometown}}</span></li>
  				<li :class="$nameClass(className, 'detail')"><span :class="$nameClass(className, 'detailLabel')">Spiritual Home</span><span :class="$nameClass(className, 'detailValue')">{{spiritualHome}}</span></li>
          <li :class="$nameClass(className, 'detail')"><span :class="$nameClass(className, 'detailLabel')">Actual Home</span><span :class="$nameClass(className, 'detailValue')">{{actualHome}}</span></li>
          <li :class="$nameClass(className, 'detail')"><span :class="$nameClass(className, 'detailLabel')">Astrological Sign</span><span :class="$nameClass(className, 'detailValue')">{{astrological}}</span></li>
          <li :class="$nameClass(className, 'detail')"><span :class="$nameClass(className, 'detailLabel')">Chinese Zodiac Sign</span><span :class="$nameClass(className, 'detailValue')">{{zodiac}}</span></li>
          <li :class="$nameClass(className, 'detail')"><span :class="$nameClass(className, 'detailLabel')">Highschool Stereotype</span><span :class="$nameClass(className, 'detailValue')">{{highschoolStereotype}}</span></li>
          <li :class="$nameClass(className, 'detail')"><span :class="$nameClass(className, 'detailLabel')">Mood</span><span :class="$nameClass(className, 'detailValue')">{{mood}}</span></li>
          <li :class="$nameClass(className, 'detail')"><span :class="$nameClass(className, 'detailLabel')">Groups</span>
            <span :class="$nameClass(className, 'detailValue')">
              <a 
                v-for="group in groups"
                :class="$nameClass(className, 'goup')"
                href="#TODO"
              >
                {{group.name}}
              </a>
            </span>
          </li>
  			</ul>
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
      photo: {},
      midi: {},
      pronouns: {},
      joinDate: {},
      birthday: {},
      relationship: {},
      kids: {},
      hometown: {},
      spiritualHome: {},
      actualHome: {},
      astrological: {},
      zodiac: {},
      highschoolStereotype: {},
      mood: {},
      groups: {},
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

	  &_detailsContainer {
	  	display: flex;
	  } 

	  &_detail {
	  	margin-bottom: remify(16px);
	  }

    &_detailLabel {
      display: inline-block;
      font-weight: 700;
      margin-right: 16px;
      width: calc(50% - 16px);
    }

    &_detailValue {
      display: inline-block;
      width: 50%;
    }

	  &_name {
	  	font-size: remify(32px);
	  	margin-bottom: remify(8px);
	  }

	  &_image {
	  	width: 100%;
	  }

	  &_moodContainer {
	  	margin-top: remfiy(8px);
	  }

	  @include desktop {

	  }
	}
</style>
