<template>
  <div 
    :class="$nameClass(className, null, variations)"
    :style="style"
  >
    <div :class="$nameClass(className, 'container')">
      <div :class="$nameClass(className, 'block')">
        <h3 
          :class="$nameClass(className, 'title')"
          :style="{borderColor: style.color}"
        >Interests</h3>
        <p 
          :class="$nameClass(className, 'answer')"
          v-html="interests"
        />
      </div> 
      <div :class="$nameClass(className, 'block')">
        <h3 
          :class="$nameClass(className, 'title')"
          :style="{borderColor: style.color}"
        >Heroes</h3>
        <p 
          :class="$nameClass(className, 'answer')"
          v-html="heroes"
        />
      </div> 

      <div :class="$nameClass(className, 'block')">
        <h3 
          :class="$nameClass(className, 'title')"
          :style="{borderColor: style.color}"
        >Favorite Movies & Television</h3>
        <div :class="$nameClass(className, 'answerContainer')">
          <div 
            v-for="movie in movies"
            :class="$nameClass(className, 'mediaAsset')"
          >
            {{movie.name}}
          </div>
          <div 
            v-for="t in tv"
            :class="$nameClass(className, 'mediaAsset')"
          >
            {{t.name}}
          </div>
        </div>
      </div> 

      <div :class="$nameClass(className, 'block')">
        <h3 
          :class="$nameClass(className, 'title')"
          :style="{borderColor: style.color}"
        >Favorite Books</h3>
        <div :class="$nameClass(className, 'answerContainer')">
          <div 
            v-for="book in books"
            :class="$nameClass(className, 'mediaAsset')"
          >
            {{book.name}}
          </div>
        </div>
      </div> 

    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'ProfileInterests',

    components: {
    },

    props: {
      variations: {
        type: Array
      },
      "interests": {},
      "heroes": {},
      "movies": {},
      "music": {},
      "tv": {},
      "books": {},
      design: {},
    },

    data () {
      return {
        className: 'profileInterests',
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
  $class: nameClass(profileInterests);


  #{$class} {
  	padding: remify(8px);
  	margin-bottom: remify(32px);
  	border: 1px sold transparent;

    &_block {
      margin-bottom: remify(16px);
    }

    &_title {
      display: block;
      border-bottom: 1px solid black;
      padding-bottom: remify(4px);
      margin-bottom: remify(8px);
    }

    &_answerContainer {
      display: flex;
    }

    &_mediaAsset {
      width: 125px;
      height: 200px;
      background-color: grey;
      margin-right: 16px;
      text-align: center;
    }

    @include desktop {

    }
  }
</style>
