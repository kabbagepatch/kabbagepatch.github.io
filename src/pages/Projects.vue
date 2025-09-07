<template>
  <div class="worklist">
    <div class="github">
      Projects Available at <a href="https://github.com/kabbagepatch" target="_blank">https://github.com/kabbagepatch</a>
    </div>
    <repo-section title="Personal Website (You are here)">
      <repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('kabbagepatch.github.io'))[0]"
      />
    </repo-section>
    <repo-section title="Games">
      <repo
        class="repo"
        v-for="(repo, index) in myRepos.filter(repo => repo.name.toLowerCase().includes('game'))"
        :key="'game' + index"
        :repo="repo"
      />
    </repo-section>
    <repo-section title="KaviBot">
      <repo
        class="repo"
        v-for="(repo, index) in myRepos.filter(repo => repo.name.toLowerCase().includes('kavi')
         && repo.name.toLowerCase().includes('bot'))"
        :key="'bot' + index"
        :repo="repo"
      />
    </repo-section>
    <repo-section title="Trackers">
      <repo
        class="repo"
        v-for="(repo, index) in myRepos.filter(repo => repo.name.toLowerCase().includes('tracker'))"
        :key="'tracker' + index"
        :repo="repo"
      />
    </repo-section>
    <repo-section title="Other">
      <repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('hex-to-hsl'))[0]"
      />
      <repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('jumptorecipe'))[0]"
      />
      <repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('feather'))[0]"
      />
    </repo-section>
    <repo-section title="Old Projects">
      <h3>Machine Learning</h3>
      <repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('smart-chess'))[0]"
      />
      <repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('chessengine'))[0]"
      />
      <repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('blackjack'))[0]"
      />
      <h3>College Projects</h3>
      <repo
        class="repo"
        :repo="{name: 'Emot', description: 'Research project under Bretl Research Group. Implemented interface to control SMA \
        wires and receive input from various motion and proximity sensors using an Android smartphone and an Arduino. Worked \
        on making the actuators faster by designing a control system to handle current passing through the SMA'}"
      />
      <repo
        class="repo"
        :repo="myRepos.filter(repo => repo.name.toLowerCase().includes('prediction'))[0]"
      />
      <h3>Playgrounds</h3>
      <p>Playgrounds are my way to learn various concepts or technologies by applying them
        in different ways without any specific goal in mind</p>
      <repo
        class="repo"
        v-for="(repo, index) in myRepos.filter(repo => repo.name.toLowerCase().includes('playground'))"
        :key="'play' + index"
        :repo="repo"
      />
      <h3>Clones</h3>
      <p>Clones are my way to learn different development frameworks with a specific app to build</p>
      <repo
        class="repo"
        v-for="(repo, index) in myRepos.filter(repo => repo.name.toLowerCase().includes('clone')
          || repo.name.toLowerCase().includes('client'))"
        :key="'clone' + index"
        :repo="repo"
      />
    </repo-section>
  </div>
</template>

<script>
import axios from 'axios';
import Repo from '../components/Projects/RepoInfo.vue';
import RepoSection from '../components/Projects/RepoSection.vue';

export default {
  name: 'Projects',
  data() {
    return {
      myRepos: [],
    };
  },
  components: {
    Repo,
    RepoSection,
  },
  mounted() {
    if (!this.$store.state.repos || this.$store.state.repos.length === 0) {
      axios
        .get('https://api.github.com/users/kabbagepatch/repos?sort=pushed&per_page=100')
        .then((response) => {
          this.myRepos = response.data.filter((repo) => !repo.fork && !repo.archived);
          this.$store.commit('updateRepos', { repos: this.myRepos });
        });
    } else {
      this.myRepos = this.$store.state.repos;
    }
  },
};
</script>

<style scoped>
  .worklist {
    margin-bottom: 50px;
  }

  p {
    margin-top: -5px;
    margin-left: 10px;
    color: hsl(330, 31%, 42%);
  }

  h3 {
    margin-top: 10px;
    font-size: 20px;
  }

  .description {
    color: hsl(330, 31%, 42%);
    margin-left: 10px;
    padding: 0 15px 20px 20px;
  }

  .description a {
    color: hsl(335, 72%, 85%);
  }

  .description a:hover {
    color: hsl(292, 38%, 92%);
  }

  .description li {
    list-style: none;
    padding: 3px 0;
    margin-left: -40px;
  }

  .github {
    color: hsl(330, 31%, 42%);
    margin: 10px;
    margin-bottom: -10px;
  }

  .github a {
    color: hsl(330, 31%, 42%);
  }
</style>
