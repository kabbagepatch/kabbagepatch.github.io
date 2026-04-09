<template>
  <div class="books-container">
    <p class="subtext">
      <a href="https://app.thestorygraph.com/profile/kabbagepatch/" target="_blank">StoryGraph</a>,&nbsp;
      <a href="https://www.goodreads.com/user/show/88782158-kavi" target="_blank">Goodreads</a>,&nbsp;
      <a href="https://kavireads.com/" target="_blank">Blog</a>
    </p>
    <BookSection
      v-for="(bookYear, index) in booksByYear.slice().reverse()"
      :key="bookYear.year"
      :year="bookYear.year"
      :bookCount="bookYear.books.length"
      :books="bookYear.books"
      :apiKey="apiKey"
      :initialShowBooks="index == 0"
    />
  </div>
</template>

<script>
import BookSection from '../components/Books/BookSection.vue';

const bookFiles = require.context('../resources/books', false, /\.txt$/);

const booksByYear = bookFiles.keys()
  .sort((leftPath, rightPath) => Number(leftPath.match(/\d{4}/)[0]) - Number(rightPath.match(/\d{4}/)[0]))
  .map((path) => ({
    year: Number(path.match(/\d{4}/)[0]),
    books: bookFiles(path).default.split('\n'),
  }));

export default {
  name: 'Books',
  props: {
    apiKey: String,
  },
  data() {
    return {
      booksByYear,
    };
  },
  components: {
    BookSection,
  },
};
</script>

<style scoped>
.books-container {
  text-align: center;
  background-color: hsl(209, 70%, 86%);
  width: 100%;
  padding: 10px 0;
  margin-bottom: 100px;
  min-width: 100px;
}

h2 {
  margin-top: 0;
}

.subtext, .subtext a {
  color: hsl(212, 51%, 31%);
}

p.subtext {
  margin: 10px 0;
}
</style>
