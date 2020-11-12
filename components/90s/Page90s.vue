<template>
  <div 
    :class="$nameClass(className, null, variations)"
    :style="style"
  >
    <div :class="$nameClass(className, 'container')">
      <div :class="$nameClass(className, 'columnContainer')">
        <div :class="$nameClass(className, 'column', ['1'])">
          <ProfileInfo
            v-bind="data.info"
            :design="data.design.section"
          />
          <!-- <ProfileContact/> -->
        </div>
        <div :class="$nameClass(className, 'column', ['2'])">
          <ProfileAbout 
            v-bind="data.profile"
            :design="data.design.section"
          />
          <ProfileInterests
            v-bind="data.secondary"
            :design="data.design.section"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ProfileInfo from './ProfileInfo';
  import ProfileContact from './ProfileContact';
  import ProfileBlog from './ProfileBlog';
  import ProfileInterests from './ProfileInterests';
  
  export default {
    name: 'Page90s',

    components: {
      ProfileInfo,
      ProfileContact,
      ProfileBlog,
      ProfileInterests,
    },

    props: {
      variations: {
        type: Array
      },
      data: {
        type: Object
      }
    },

    data () {
      return {
        className: 'page90s',
        style: {
          backgroundColor: this.data.design.bgColor,
          backgroundImage: `url(${this.data.design.bgImage})`,
        }
      }
    },
  }
</script>

<style lang="scss">
  $class: nameClass(page90s);


  #{$class} {
    min-height: 100vh;
    padding: remify(32px) remify(64px);

    &_columnContainer {
      display: flex;
      max-width: remify(1024px);
      margin: 0 auto;
    }

    &_column { 
      &--1 {
        flex: 0 0 33.3333%;
        margin-right: 3.3333%;
      }

      &--2 {
        flex: 0 0 63.3333%;
      }
    }

    @include desktop {

    }
  }
</style>
