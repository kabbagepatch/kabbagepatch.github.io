<template>
  <transition enter-active-class="bouncein" leave-active-class="bounceout">
    <div class="book" v-if="this.imageThumbnail">
      <div class="book-inner">
        <div class="front">
          <img :src='this.imageThumbnail' :alt='this.bookTitle' class="book-img"/>
        </div>
        <div class="back">
          {{ this.bookName.replace(/\b[A-Z0-9]{5,}\b/g, '') }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Book',
  data() {
    return {
      imageThumbnail: '',
      bookTitle: '',
    };
  },
  props: {
    bookName: String,
    apiKey: String,
    initIndex: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    if (this.bookName) {
      const existingBook = this.$store.state.bookMap[this.bookName];
      if (existingBook) {
        this.bookTitle = existingBook.title;
        this.imageThumbnail = existingBook.imageLink;
      } else {
        axios
          .get(`https://www.googleapis.com/books/v1/volumes?key=${this.apiKey}&q=${encodeURI(this.bookName.trim())}`)
          .then((response) => {
            let index = this.initIndex;
            while (!response.data.items[index].volumeInfo.imageLinks) {
              index += 1;
            }
            this.bookTitle = response.data.items[index].volumeInfo.title;
            this.imageThumbnail = response.data.items[index].volumeInfo.imageLinks.thumbnail;
            this.$store.commit(
              'addToBookMap',
              { bookName: this.bookName, title: this.bookTitle, imageLink: this.imageThumbnail },
            );
          });
      }
    }
  },
};
</script>

<style scoped>
  .book {
    position: relative;
    text-align: center;
    width: auto;
    height: 190px;
    background-color: transparent;
    perspective: 1000px;
  }

  .book-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .book:hover .book-inner {
    transform: rotateY(180deg);
  }

  .front, .back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .book-img {
    height: 190px;
  }

  .back {
    background-color: hsl(209, 50%, 54%);
    background-image: -webkit-linear-gradient(45deg, hsl(209, 70%, 40%) 50%, hsl(209, 64%, 49%) 50%);
    color: white;
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bouncein {
    animation: bouncein 0.8s linear both;
  }

  @keyframes bouncein {
    0%{
      opacity: 0.5;
      transform: scale(0);
    }
    50%{
      opacity: 0.9;
      transform: scale(0.9);
    }
    75%{
      opacity: 1;
      transform: scale(1.1);
    }
    100%{
      opacity: 1;
      transform: scale(1);
    }
  }

  .bounceout {
    animation: bounceout 0.8s linear both;
  }

  @keyframes bounceout {
    0%{
      opacity: 1;
      transform: scale(1);
    }
    50%{
      opacity: 0.5;
      transform: scale(0.3);
    }
    100%{
      opacity: 0.5;
      transform: scale(0);
    }
  }
</style>
