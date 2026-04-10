<template>
  <div class="container">
    <h3 class="header">Check out more of my work on my Github
      <a class="link" href="https://github.com/kabbagepatch" target="_blank">@kabbagepatch</a>
    </h3>
    <div class="projects-grid">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :category="project.category"
        :description="project.description"
        :link="project.link"
        :technologies="project.technologies"
        :media="project.media"
      />
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/Projects/ProjectCard.vue';
import pokemonAssistant from '../resources/projects/tauri/pokemon-assistant/demo.gif';
import pong from '../resources/projects/godot/pong.gif';
import spaceInvaders from '../resources/projects/godot/space-invaders.gif';
import breakout from '../resources/projects/godot/breakout.gif';
import bridgesprototype from '../resources/projects/godot/bridgesprototype.gif';
import kavibotDiscord from '../resources/projects/kavibot/discord.gif';
import kavibotTwitch from '../resources/projects/kavibot/twitch.gif';
import focusCoffee from '../resources/projects/tauri/focus-coffee/demo.gif';
import spotifyExplorer from '../resources/projects/tauri/spotify-explorer/demo.gif';
import vinylTracker from '../resources/projects/web/vinyl-tracker/demo.gif';
import priorityTracker from '../resources/projects/web/priority-tracker/demo.gif';
import hexToHSL from '../resources/projects/hex-to-hsl/demo.gif';

const projects = [
  {
    title: 'Pokemon Assistant',
    category: 'Tauri Development',
    link: 'http://pokemon-ai.netlify.app/',
    description: 'Desktop app that lets users analyze Pokémon type match-ups, manage teams, and leverage AI-'
                  + 'powered recommendations and chat assistance to determine the best counters against opponent Pokémon.',
    technologies: ['Tauri', 'Rust', 'Claude'],
    media: {
      src: pokemonAssistant,
      alt: 'Pokemon Assistant demo',
    },
  },
  {
    title: 'Focus Coffee',
    category: 'Tauri Development',
    link: 'http://focus-coffee.netlify.app/',
    description: 'Desktop drink companion and pomodoro timer with an additional simple task list. '
                + 'Change themes to match your favourite drink. Sits on top of your windows to help you focus',
    technologies: ['Tauri'],
    media: {
      src: focusCoffee,
      alt: 'Focus Coffee demo',
    },
  },
  {
    title: 'Hex to HSL',
    category: 'Development',
    link: 'https://marketplace.visualstudio.com/items?itemName=kavish.hex-to-hsl',
    description: 'A simple extension that converts any hex and rgb colours in your files to the hsl format, and back to hex',
    technologies: ['TypeScript'],
    media: {
      src: hexToHSL,
      alt: 'Hex to HSL demo',
    },
  },
  {
    title: 'Bridges Prototype',
    category: 'Game Development',
    description: 'Prototype of a Bridges puzzle game made using Godot. The goal is to '
                + 'collect wood from tree stumps, and place bridges across rivers to reach the gold. '
                + 'This is a work in progress',
    technologies: ['Godot'],
    media: {
      src: bridgesprototype,
      alt: 'Bridges Prototype',
    },
  },
  {
    title: 'Breakout',
    category: 'Game Development',
    description: 'Breakout game made using Godot.',
    technologies: ['Godot'],
    media: {
      src: breakout,
      alt: 'Breakout',
    },
  },
  {
    title: 'Space Invaders',
    category: 'Game Development',
    description: 'Space Invaders game made using Godot.',
    technologies: ['Godot'],
    media: {
      src: spaceInvaders,
      alt: 'Space Invaders',
    },
  },
  {
    title: 'Pong',
    category: 'Game Development',
    description: 'Pong game made using Godot.',
    technologies: ['Godot'],
    media: {
      src: pong,
      alt: 'Pong',
    },
  },
  {
    title: 'Priority Tracker',
    category: 'Web Development',
    link: 'https://prioritytracker.netlify.app/',
    description: 'A JIRA-like app I built to track all my projects. You can add and categorize your projects, prioritize'
                 + ' them. Log tasks to the projects you want to focus on. Move tasks between Active, Up Next and Backlog.'
                 + 'Developed using Nuxt and Vue.js on the front-end and a Node.js API using Serverless on the backend.',
    technologies: ['Vue', 'Nuxt.js', 'Serverless'],
    media: {
      src: priorityTracker,
      alt: 'Priority Tracker demo',
    },
  },
  {
    title: 'Kavibot Discord',
    category: 'ChatBot',
    description: 'Discord App with some fun/useful custom commands, including a Valorant battle game, '
                  + 'reminders that ping you, and a timestamp generator.',
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
                + ', streamer shoutout and welcome commands and more. Task API build using Serverless.',
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
                  + ' trends from large JSON datasets. Displays your yearly and monthly history, along with'
                  + ' individual artist and song stats. Additionally includes a custom Spotify player UI'
                  + ' (which sadly doesn\'t work anymore since Spotify changes their API terms to require'
                  + ' a Premium subscription)',
    technologies: ['Vue', 'Tauri', 'TypeScript'],
    media: {
      src: spotifyExplorer,
      alt: 'Spotify Data Explorer demo',
    },
  },
  {
    title: 'Vinyl Tracker',
    category: 'Web Development',
    link: 'https://vinylstracker.netlify.app/',
    description: 'A progressive web app to track your vinyls catalog and activity. Powered by the Discogs API',
    technologies: ['Vue', 'PWA', 'TypeScript'],
    media: {
      src: vinylTracker,
      alt: 'Vinyl Tracker demo',
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
.container {
  color: hsl(355, 35%, 28%);
  max-width: 1800px;
  margin: 0 auto;
  padding: 2rem 1.25rem 4rem;
}

.projects-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: auto auto;
}

.header {
  margin-top: 0;
}

.link {
  color: hsl(13, 42%, 24%);
  text-decoration: none;
}

@media screen and (max-width: 1500px) {
  .container {
    max-width: 1100px;
  }

  .projects-grid {
    grid-template-columns: auto;
  }
}
</style>
