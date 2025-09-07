<template>
  <transition enter-active-class="bloom-in">
    <div class="repo-card" v-if="Object.keys(this.repo).length > 0">
      <a :href='this.repo.clone_url' target="_blank">
        <div class="card-background">
          <div class="repo-content">
            <div class="repo-header">
              <div class="repo-title">{{this.repo.name}}</div>
            </div>
            <div class="repo-description">{{this.repo.description}}</div>
          </div>
        </div>
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Repo',
  props: {
    repo: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
  .repo-card {
    margin: 16px 0;
    position: relative;
  }

  .repo-card a {
    text-decoration: none;
  }

  .card-background {
    background: linear-gradient(135deg, hsl(0, 78%, 98%) 0%, hsl(300, 36%, 96%) 50%, hsl(120, 36%, 96%) 100%);
    border: 2px solid hsl(355, 53%, 81%);
    border-radius: 20px;
    padding: 20px;
    position: relative;
    box-shadow:
      0 8px 25px hsla(355, 53%, 81%, 0.3),
      0 4px 10px hsla(351, 100%, 86%, 0.2);
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .card-background::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, hsla(351, 100%, 86%, 0.1) 0%, transparent 70%);
    animation: gentle-float 6s ease-in-out infinite;
    z-index: 0;
  }

  .card-background:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow:
      0 15px 35px hsla(355, 53%, 81%, 0.4),
      0 8px 15px hsla(351, 100%, 86%, 0.3);
    border-color: hsl(355, 35%, 74%);
    cursor: pointer;
  }

  .repo-content {
    position: relative;
    z-index: 2;
  }

  .repo-header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    gap: 12px;
  }

  .repo-title {
    flex: 1;
    color: hsl(330, 31%, 42%);
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    font-family: 'Georgia', serif;
    transition: all 0.3s ease;
    position: relative;
  }

  .repo-title:hover {
    color: hsl(332, 43%, 83%);
    text-shadow: 0 2px 4px hsla(330, 31%, 42%, 0.2);
  }

  .repo-title::after {
    content: '✨';
    margin-left: 8px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .repo-title:hover::after {
    opacity: 1;
  }

  .repo-description {
    color: hsl(280, 12%, 40%);
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 12px;
    padding-left: 44px;
    font-family: 'Georgia', serif;
  }

  .bloom-in {
    animation: bloom-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes bloom-in {
    0% {
      opacity: 0;
      transform: scale(0.8) rotate(-2deg);
    }
    50% {
      transform: scale(1.05) rotate(1deg);
    }
    100% {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes gentle-float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-10px) rotate(180deg);
    }
  }

  @media (max-width: 768px) {
    .card-background {
      padding: 16px;
      margin: 0 5px;
    }

    .repo-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
    }

    .repo-description {
      padding-left: 0;
    }

    .floral-decoration {
      top: 8px;
      right: 12px;
    }
  }
</style>
