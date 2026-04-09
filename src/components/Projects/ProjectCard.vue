<template>
  <article class="project-card">
    <div class="project-header">
      <p v-if="category" class="project-category"> {{ category }} </p>
      <h3 class="project-title"> {{ title }} </h3>
      <p v-if="description" class="project-description"> {{ description }} </p>

      <ul v-if="technologies.length" class="technology-list">
        <li v-for="technology in technologies" :key="technology" class="technology-pill"> {{ technology }} </li>
      </ul>
    </div>

    <div v-if="normalizedMedia" class="project-media">
      <figure class="media-frame">
        <video
          v-if="normalizedMedia.kind === 'video'"
          class="media-asset"
          :src="normalizedMedia.src"
          :poster="normalizedMedia.poster"
          controls
          preload="metadata"
          playsinline
        >
          <track
            kind="captions"
            :src="normalizedMedia.captionsSrc || emptyCaptionsTrack"
            srclang="en"
            label="English captions"
            default
          >
        </video>
        <img
          v-else
          class="media-asset"
          :src="normalizedMedia.src"
          :alt="normalizedMedia.alt"
        />
        <figcaption
          v-if="normalizedMedia.caption"
          class="media-caption"
        >
          {{ normalizedMedia.caption }}
        </figcaption>
      </figure>
    </div>
  </article>
</template>

<script>
const emptyCaptionsTrack = 'data:text/vtt;charset=utf-8,WEBVTT';

export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    technologies: {
      type: Array,
      default: () => [],
    },
    media: {
      type: Object,
      default: () => null,
    },
    category: {
      type: String,
      default: '',
    },
  },
  computed: {
    emptyCaptionsTrack() {
      return emptyCaptionsTrack;
    },
    normalizedMedia() {
      if (!this.media || !this.media.src) {
        return null;
      }

      return {
        ...this.media,
        kind: this.getMediaKind(this.media),
        alt: this.media.alt || `${this.title} media`,
      };
    },
  },
  methods: {
    getMediaKind(item) {
      if (item.type) {
        return item.type;
      }

      return /\.(mp4|webm|ogg|mov)$/i.test(item.src) ? 'video' : 'image';
    },
  },
};
</script>

<style scoped>
.project-card {
  background: linear-gradient(135deg, hsl(31, 62%, 94%) 0%, hsl(28, 69%, 90%) 100%);
  border: 1px solid hsla(24, 38%, 39%, 0.18);
  border-radius: 28px;
  box-shadow: 0 18px 45px hsla(20, 38%, 30%, 0.12);
  color: hsl(17, 41%, 20%);
  display: grid;
  gap: 1.5rem;
  grid-template-columns: minmax(0, 1.4fr) minmax(260px, 2fr);
  align-items: center;
  padding: 1.75rem;
}

.project-header {
  display: grid;
}

.project-category {
  color: hsl(25, 51%, 42%);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  margin: 0;
  text-transform: uppercase;
}

.project-title {
  color: hsl(13, 42%, 24%);
  font-size: clamp(1.6rem, 2vw, 2.2rem);
  margin: 0;
}

.project-description {
  color: hsl(20, 29%, 31%);
  font-size: 1rem;
  line-height: 1.7;
  margin: 0;
  max-width: 58ch;
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  list-style: none;
  margin: 15px 0;
  padding: 0;
}

.technology-pill {
  background: hsl(34, 71%, 85%);
  border: 1px solid hsla(26, 42%, 37%, 0.16);
  border-radius: 999px;
  color: hsl(17, 39%, 26%);
  font-weight: 700;
  padding: 0 1rem;
}

.project-media {
  display: grid;
  gap: 0.75rem;
  justify-items: end;
  min-width: 0;
}

.media-frame {
  background: linear-gradient(135deg, hsl(30, 60%, 97%) 0%, hsl(25, 50%, 91%) 100%);
  border: 1px solid hsla(23, 40%, 34%, 0.14);
  border-radius: 10px;
  display: grid;
  justify-items: center;
  margin-top: 0;
  margin-bottom: 0;
  overflow: hidden;
  width: fit-content;
  max-width: 100%;
}

.media-asset {
  background: hsl(34, 28%, 82%);
  display: block;
  height: 100%;
  max-width: 100%;
  width: auto;
  object-fit: contain;
}

.media-caption {
  color: hsl(21, 28%, 34%);
  font-size: 0.92rem;
  line-height: 1.5;
  margin: 0;
  padding: 0.85rem 1rem 1rem;
}

@media screen and (max-width: 600px) {
  .project-card {
    border-radius: 22px;
    grid-template-columns: 1fr;
    padding: 1.2rem;
  }

  .project-media {
    justify-items: stretch;
  }

  .media-frame {
    height: auto;
    width: 100%;
    margin: 0;
  }

  .media-asset {
    height: auto;
    width: 100%;
  }
}
</style>
