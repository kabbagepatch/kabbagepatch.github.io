<template>
  <div class="content">
    <div class="content-inner">
      <HomeCanvas />
      <div class="about-container">
        <div class="about">
          <h1>About Me</h1>
          <h2>Software Dev since 2016</h2>
          <h2>Reading since 2017</h2>
          <h2>Blogging since 2018</h2>
          <h2>Gaming since 2020</h2>
          <h2>Have a Cat since 2021</h2>
          <h2>Making Art since 2023</h2>
        </div>
      </div>
    </div>
    <div class="socials" v-if="blueSkyImages.length > 0">
      <h2>Instagram Feed: Mostly Bread and Cats</h2>
      <div class="elfsight-app-0eabe48e-4875-4306-ab13-e31ac1235450 instagram-feed" data-elfsight-app-lazy></div>
      <h2>Blue Sky Feed: Mostly Art</h2>
      <div class="blue-sky-feed">
        <div v-for="(image, index) in blueSkyImages" :key="index" class="image-container">
          <img
            :src="image.thumb"
            :alt="image.text || 'Blue Sky Image '+index"
            style="height: 350px; width: auto;"
          />
          <div class="overlay">{{ image.text }}</div>
        </div>
        <div
          v-if="blueSkyImages.length !== allBlueSkyImages.length"
          class="load-more"
          @click="loadMore"
          @keydown="loadMore"
          role="button"
          tabindex="0"
        >
          L o a d  M o r e
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCanvas from '../components/HomeCanvas/HomeCanvas.vue';

export default {
  name: 'HomePage',
  components: {
    HomeCanvas,
  },
  data() {
    return {
      allBlueSkyImages: [],
      blueSkyImages: [],
    };
  },
  async mounted() {
    const res = await fetch(
      'https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=kabbagepatch.bsky.social',
    );
    const data = await res.json();
    console.log(data);
    this.allBlueSkyImages = data.feed
      .filter((item) => item.post.embed?.$type === 'app.bsky.embed.images#view')
      .map((item) => ({
        images: item.post.embed.images.map((img) => ({
          ...img,
          text: item.post.record.text,
        })),
      }))
      .flatMap((item) => item.images);
    this.blueSkyImages = this.allBlueSkyImages.slice(0, 10);
    console.log(this.blueSkyImages);
  },
  methods: {
    loadMore() {
      const currentLength = this.blueSkyImages.length;
      const moreImages = this.allBlueSkyImages.slice(currentLength, currentLength + 10);
      this.blueSkyImages = this.blueSkyImages.concat(moreImages);
    },
  },
};
</script>

<style scoped>
.content {
  text-align: center;
  margin-bottom: 100px;
}

.content-inner {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-left: -50px;
  margin-top: 50px;
}

.about-container {
  margin-top: 30px;
  padding-left: 10%;
  display: flex;
  justify-content: flex-start;
}

.about {
  border-radius: 50%;
  background: hsl(292, 38%, 12%);
  height: 450px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about h1 {
  color: hsl(292, 38%, 92%);
  padding: 0px 20px;
  margin-top: -20px;
  margin-left: -250px;
  width: 150px;
  background: hsl(335, 99%, 68%);
  border: 1px solid hsl(292, 38%, 92%);
}

.about h2 {
  background: hsl(292, 38%, 92%);
  padding: 0 20px;
  margin-top: 0px;
  margin-left: 250px;
  width: 350px;
  color: hsl(335, 99%, 68%);
  border: 1px solid hsl(335, 99%, 68%);
}

.subtext {
  font-size: 12px;
}

.about h2:nth-child(3), .about h2:nth-child(5), .about h2:nth-child(7) {
  margin-left: 350px;
}

.socials {
  margin-top: 50px;
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.blue-sky-feed {
  overflow-x: scroll;
  flex-wrap: nowrap;
  display: flex;
}

.image-container {
  display: flex;
}

.image-container img {
  transition: transform 0.3s ease;
}

.overlay {
  position: absolute;
  left: 0;
  background: hsla(0, 0%, 0%, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0.5rem;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .overlay {
  opacity: 1;
}

.load-more {
  padding: 0 5px;
  font-size: 20px;
  color: hsl(292, 38%, 92%);
  border: 1px solid hsl(292, 38%, 92%);
  background: hsl(335, 99%, 68%);
  height: 350px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

@media screen and (max-width: 1200px) {
  .about-container {
    padding-left: 5%;
  }

  .about h2 {
    margin-left: 100px;
  }

  .about h2:nth-child(3), .about h2:nth-child(5), .about h2:nth-child(7) {
    margin-left: 200px;
  }
}

@media screen and (max-width: 1000px) {
  .content-inner {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
  }

  .about-container {
    margin-left: -100px;
  }

  .about h2 {
    margin-left: 150px;
  }

  .about h2:nth-child(3), .about h2:nth-child(5), .about h2:nth-child(7) {
    margin-left: 250px;
  }

  .socials h2 {
    font-size: 24px;
  }
}

@media screen and (max-width: 600px) {
  .content-inner {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
  }

  .about-container {
    margin-left: -100px;
    margin-top: 100px;
  }

  .about {
    height: 400px;
    width: 400px;
  }

  .about h2 {
    padding: 0 20px;
    margin-top: 0px;
    margin-left: 150px;
    width: 350px;
  }

  .about h2:nth-child(3), .about h2:nth-child(5), .about h2:nth-child(7) {
    margin-left: 250px;
  }

  .blue-sky-feed {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
}

@media screen and (max-width: 450px) {
  .about h1 {
    margin-top: -50px;
    margin-left: -100px;
  }

  .about h2 {
    margin-left: 60px;
    width: 300px;
  }

  .about h2:nth-child(3), .about h2:nth-child(5), .about h2:nth-child(7) {
    margin-left: 120px;
  }
}
</style>
