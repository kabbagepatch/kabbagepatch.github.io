<template>
  <div class="book-section">
    <div class="book-section-header"
      @click="showBooks = !showBooks"
      @keyup.enter="showBooks = !showBooks"
      role="button"
      tabindex="0"
      :aria-label="showBooks ? 'Hide Books' : 'Show Books'"
    >
      <div>{{year}}</div>
      <div>{{bookCount}}</div>
    </div>
    <div class="book-section-inner">
      <transition enter-active-class="rollin" leave-active-class="rollout">
        <div v-if=showBooks class="books">
          <Book
            class="book"
            v-for="(bookName, index) in books"
            :key="index"
            :bookName="bookName"
            :apiKey="apiKey"
          />
        </div>
      </transition>
    </div>
    <div v-if=showBooks>
      <!-- eslint-disable-next-line -->
      <p>Disclaimer: The book images above are the first image result from a Google Books Search call on the book title, and therefore might not match the actual book I read</p>
      <p>Hover/Click the books to display the actual title</p>
    </div>
    <br />
  </div>
</template>

<script>
import Book from './Book.vue';

export default {
  name: 'BookSection',
  props: {
    bookCount: String,
    year: Number,
    books: Array,
    initialShowBooks: {
      type: Boolean,
      default: () => (false),
    },
    apiKey: String,
  },
  components: {
    Book,
  },
  data() {
    return {
      showBooks: this.initialShowBooks,
    };
  },
};
</script>

<style scoped>
  .book-section-inner {
    padding: 0 5%;
  }

  .book-section-header {
    color: hsl(207, 74%, 89%);
    font-weight: bold;
    font-size: 150%;
    padding: 5px 25px;
    margin: 10px 0px;
    transition: background 0.5s ease-in-out;
    display: flex;
    justify-content: space-between;
    background-color: hsl(212, 51%, 31%);
    background-image: -webkit-linear-gradient(45deg, hsl(212, 51%, 31%) 50%, hsl(204, 39%, 35%) 50%);
  }

  .book-section-header:hover {
    cursor: pointer;
    transition: background 0.5s ease-in-out;
    background-color: hsl(212, 51%, 41%);
    background-image: -webkit-linear-gradient(45deg, hsl(212, 51%, 36%) 50%, hsl(204, 39%, 40%) 50%);
  }

  .book {
    display: inline-block;
    width: 130px;
    margin: 1%;
  }

  .rollin {
    animation: rollin 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }

  p {
    margin-bottom: -5px;
    color: hsl(212, 51%, 31%);
  }

  @keyframes rollin {
    0% {
      opacity: 0;
      height: 0;
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      height: 500px;
    }
  }

  .rollout {
    animation: rollout 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }

  @keyframes rollout {
    0% {
      opacity: 1;
      height: 500px;
    }
    20% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      height: 0;
    }
  }
</style>
