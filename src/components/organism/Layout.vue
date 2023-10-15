<template>
  <div class="layout">
    <nav v-if="showNav">
      <div>
        <BackButton :stroke-width="1" :width="100" :height="100" @click="goBack"/>
      </div>
    </nav>
    <section class="header">
      <div class="main-text">
        <h1
            v-for="title in titles"
            :key="title"
        >
          {{ title }}
        </h1>
      </div>
      <div
        class="sub-text"
        v-if="hasDescription"
      >
        <h5
          v-for="description in descriptions"
          :key="description"
        >
          {{ description }}
        </h5>
      </div>
    </section>
    <section class="body">
      <slot />
    </section>
  </div>
</template>

<script>
import BackButton from "@/components/atom/BackButton";

export default {
  name: 'Layout',
  components: {BackButton},
  props: {
    enableBack: {
      type: Boolean,
      default: true,
    },
    titles: {
      type: Array,
      required: true,
    },
    descriptions: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  computed: {
    showNav() {
      return this.$router.currentRoute.value.path !== '/';
    },
    hasDescription() {
      return this.$props.descriptions.length !== 0;
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
}
</script>

<style scoped lang="scss">
$content-transition: 400ms ease;
.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 500ms ease;
  nav {
    div {
      transition: $content-transition;
    }
  }
  .header {
    h1 {
      transition: $content-transition;
      @for $i from 0 through 5 {
        &:nth-child(#{$i}) {
          transition-delay: calc(#{$i} * 70ms);
        }
      }
    }
    h5 {
      transition: $content-transition;
      @for $i from 0 through 5 {
        &:nth-child(#{$i}) {
          transition-delay: calc(#{$i} * 60ms + 150ms);
        }
      }
    }
  }
  .body {
    transition: $content-transition;
    transition-delay: 240ms;
  }
}

.slide-up-enter-active {
  .body {
    transition-delay: 200ms;
  }
}

.slide-up-enter-from,
.slide-up-leave-to {
  nav {
    div > * {
      opacity: 0;
      transform: scale(0.9);
    }
  }
  .header {
    h1 {
      opacity: 0;
      transform: translateY(20px);
    }
    h5 {
      opacity: 0;
      transform: translateY(20px);
    }
  }
  .body {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
}



.mounted {

}

.unmounting {
}

nav {
  margin-bottom: 20px;
  padding: 10px 20px 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.layout {
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 120px 60px;
  padding-bottom: 0;
}

.header {
  margin-bottom: 50px;
  > * {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .main-text {
    h1 {
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  .sub-text {
    h5 {
      color: $color-gray;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

}

.body {
  flex: 1;
  display: flex;
  flex-direction: column;
}

</style>