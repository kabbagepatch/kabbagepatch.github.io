<template>
  <div class="books-container">
    <h2 class="subtext">Yearly Target: 52 Books</h2>
    <p class="subtext">
      <a href="https://app.thestorygraph.com/profile/kabbagepatch/" target="_blank">StoryGraph</a>,&nbsp;
      <a href="https://www.goodreads.com/user/show/88782158-kavi" target="_blank">Goodreads</a>
    </p>
    <p class="subtext">Blog: <a href="https://kavibooks.wordpress.com/" target="_blank">Kavi's Books</a></p>
    <BookSection
      v-for="(booksList, index) in books.slice().reverse()"
      :key="2017 + books.length - 1 - index"
      :year="2017 + books.length - 1 - index"
      :bookCount="'(' + booksList.length + '/52)'"
      :books="booksList"
      :apiKey="apiKey"
      :initialShowBooks="index == 0"
    />
  </div>
</template>

<script>
import BookSection from '../components/Books/BookSection.vue';
import bookList2025 from '../resources/books/bookList2025.txt';
import bookList2024 from '../resources/books/bookList2024.txt';
import bookList2023 from '../resources/books/bookList2023.txt';
import bookList2022 from '../resources/books/bookList2022.txt';
import bookList2021 from '../resources/books/bookList2021.txt';
import bookList2020 from '../resources/books/bookList2020.txt';
import bookList2019 from '../resources/books/bookList2019.txt';
import bookList2018 from '../resources/books/bookList2018.txt';
import bookList2017 from '../resources/books/bookList2017.txt';

export default {
  name: 'Books',
  props: {
    apiKey: String,
  },
  data() {
    return {
      books: [],
    };
  },
  components: {
    BookSection,
  },
  mounted() {
    this.books = [
      bookList2017.split('\n'),
      bookList2018.split('\n'),
      bookList2019.split('\n'),
      bookList2020.split('\n'),
      bookList2021.split('\n'),
      bookList2022.split('\n'),
      bookList2023.split('\n'),
      bookList2024.split('\n'),
      bookList2025.split('\n'),
    ];
  },
};
</script>

<style scoped>
.books-container {
  text-align: center;
  background-color: hsl(202, 20%, 92%);
  width: 100%;
  padding-top: 10px;
  margin-bottom: 100px;
  min-width: 100px;
}

.subtext, .subtext a {
  color: hsl(212, 51%, 31%);
}

p.subtext {
  margin-top: -10px;
  margin-bottom: 10px;
}
</style>
