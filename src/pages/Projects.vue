<template>
  <div class="home-container">
    <div class="projects-grid">
      <p>This page is a Work In Progress</p>
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :category="project.category"
        :description="project.description"
        :technologies="project.technologies"
        :media="project.media"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/Projects/ProjectCard.vue';
import pokemonAssistantAI from '../resources/projects/tauri/pokemon-assistant/ai-assistant.png';
// import spaceInvaders from '../resources/projects/godot/spaceinvaders.mp4';
import kavibotDiscord from '../resources/projects/kavibot/discord.gif';
import kavibotTwitch from '../resources/projects/kavibot/twitch.gif';
import focusCoffeeCoffee from '../resources/projects/tauri/focus-coffee/coffee.png';
import spotifyYearlyStats from '../resources/projects/tauri/spotify-explorer/yearly-stats.png';

const projects = [
  {
    title: 'Pokemon Assistant',
    category: 'Tauri Development',
    description: 'Desktop app that lets users analyze Pokémon type match-ups, manage teams, and leverage AI-'
                  + 'powered recommendations and chat assistance to determine the best counters against opponent Pokémon.',
    technologies: ['Tauri', 'Rust', 'Claude'],
    media: {
      src: pokemonAssistantAI,
      alt: 'Pokemon Assistant AI screen',
      caption: 'AI Assistant.',
    },
  },
  // {
  //   title: 'Space Invaders',
  //   category: 'Game Development',
  //   description: 'Space Invaders game maded using Godot.',
  //   technologies: ['Godot'],
  //   media: {
  //     src: spaceInvaders,
  //     alt: 'Space Invaders',
  //   },
  // },
  {
    title: 'Kavibot Discord',
    category: 'ChatBot',
    description: 'Discord App with some fun/useful custom commands, including a Valorant battle game, '
                  + 'reminders and timestamp generator.',
    technologies: ['Node.js', 'Discord API'],
    media: {
      src: kavibotDiscord,
      alt: 'kavibot Discord commands',
    },
  },
  {
    title: 'Kavibot Twitch',
    category: 'ChatBot',
    description: 'Twitch bot with some fun/useful custom commands, including a in-chat task bot'
                + ', streamer shoutout commands and more. Task API build using Serverless.',
    technologies: ['TypeScript', 'Twitch API', 'Serverless'],
    media: {
      src: kavibotTwitch,
      alt: 'kavibot Twitch commands',
    },
  },
  {
    title: 'Spotify Data Explorer',
    category: 'Tauri Development',
    description: 'Desktop app, written in Vue, to analyze Spotify listening history and generate user'
                  + 'trends from large JSON datasets; additionally includes a custom Spotify player UI.',
    technologies: ['Vue', 'Tauri', 'TypeScript'],
    media: {
      src: spotifyYearlyStats,
      alt: 'Spotify Data Explorer yearly listening statistics',
      caption: 'Yearly summary view for larger listening trends and comparisons.',
    },
  },
  {
    title: 'Focus Coffee',
    category: 'Tauri Development',
    description: 'Desktop drink companion and pomodoro timer',
    technologies: ['Tauri'],
    media: {
      src: focusCoffeeCoffee,
      alt: 'Focus Coffee drink screen',
      caption: 'A coffee-themed view from the Focus Coffee desktop app.',
    },
  },
];

export default {
  name: 'Home',
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<style scoped>
.home-container {
  color: hsl(355, 35%, 28%);
  margin: 0 auto;
  max-width: 1100px;
  padding: 2rem 1.25rem 4rem;
}

.projects-grid {
  display: grid;
  gap: 1.5rem;
}
</style>
