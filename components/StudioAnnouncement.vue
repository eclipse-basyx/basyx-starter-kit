<template>
  <v-dialog
    :model-value="true"
    fullscreen
    transition="fade-transition"
    aria-labelledby="studio-announcement-title"
    @update:model-value="emit('continue')"
  >
    <section class="studio-announcement" aria-labelledby="studio-announcement-title">
      <svg
        class="studio-network"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M0 180 120 140 240 240 100 330 0 180 M120 140 180 40 320 110 240 240
             M0 560 140 490 250 600 150 740 0 680 M140 490 100 330 270 390 250 600
             M150 740 310 810 430 700 250 600 M310 810 340 900
             M1440 120 1310 180 1180 100 1090 220 1250 310 1310 180
             M1440 410 1330 440 1250 310 1130 450 1260 570 1330 440 1440 590
             M1260 570 1160 720 1310 790 1440 700 M1160 720 1050 830 1120 900
             M1310 790 1370 900"
        />
        <circle
          v-for="([cx, cy], index) in nodes"
          :key="index"
          :cx="cx"
          :cy="cy"
          :r="index % 4 === 0 ? 3 : 2"
          :class="{ 'studio-node-orange': index % 5 === 0 }"
        />
      </svg>

      <div class="studio-content">
        <img class="studio-logo" src="@/assets/Icon_BaSyx.svg" width="168" height="168" alt="" />
        <p class="studio-overline">Introducing</p>
        <h1 id="studio-announcement-title">BaSyx <span>Studio</span></h1>
        <p class="studio-tagline">A new home for your digital twins.</p>
        <p class="studio-description">
          Connect to your AAS infrastructure, author Asset Administration Shells, and create your
          own views with apps and dashboards. All in one workspace.
        </p>
        <p class="studio-keywords">
          <span aria-hidden="true">&gt;</span> Explore. Author. Visualize.
        </p>

        <div class="studio-actions">
          <v-btn
            class="studio-learn-more"
            color="#00adee"
            size="x-large"
            variant="flat"
            href="https://studio.basyx.org"
            target="_blank"
            rel="noopener noreferrer"
            append-icon="mdi-open-in-new"
          >
            Learn more
          </v-btn>
          <v-btn
            class="studio-continue"
            color="white"
            size="x-large"
            variant="outlined"
            append-icon="mdi-arrow-right"
            @click="emit('continue')"
          >
            Continue to basyx.org
          </v-btn>
        </div>
      </div>
    </section>
  </v-dialog>
</template>

<script setup lang="ts">
const emit = defineEmits<{ continue: [] }>();

const nodes = [
  [120, 140],
  [240, 240],
  [100, 330],
  [180, 40],
  [320, 110],
  [140, 490],
  [250, 600],
  [150, 740],
  [270, 390],
  [310, 810],
  [430, 700],
  [1310, 180],
  [1180, 100],
  [1090, 220],
  [1250, 310],
  [1330, 440],
  [1130, 450],
  [1260, 570],
  [1160, 720],
  [1310, 790],
  [1050, 830],
] as const;
</script>

<style scoped>
.studio-announcement {
  position: relative;
  display: grid;
  place-items: center;
  isolation: isolate;
  min-height: 100%;
  padding: 48px 24px;
  overflow: auto;
  color: #f5f8fb;
  background: radial-gradient(ellipse at 50% 35%, #0b2333 0%, #04070b 65%);
}

.studio-network {
  position: absolute;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  pointer-events: none;
  mask-image: radial-gradient(ellipse, transparent 20%, #000 90%);
}

.studio-network path {
  fill: none;
  stroke: #00adee;
  stroke-width: 1;
  opacity: 0.18;
}

.studio-network circle {
  fill: #00adee;
  opacity: 0.6;
}

.studio-network .studio-node-orange {
  fill: #f69222;
}

.studio-content {
  width: 100%;
  max-width: 760px;
  text-align: center;
  animation: studio-arrive 700ms ease-out both;
}

.studio-logo {
  display: block;
  margin: 0 auto 24px;
  filter: drop-shadow(0 0 28px #00adee30);
}

.studio-overline {
  margin: 0 0 12px;
  color: #b0bdc8;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(2.75rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: -0.045em;
}

h1 span {
  color: #00adee;
}

.studio-tagline {
  margin: 20px 0 16px;
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 300;
}

.studio-description {
  max-width: 580px;
  margin: 0 auto;
  color: #b0bdc8;
  font-size: 1rem;
  line-height: 1.75;
}

.studio-keywords {
  margin: 24px 0 0;
  color: #b0bdc8;
  font-family: monospace;
  font-size: 0.875rem;
}

.studio-keywords span {
  color: #f69222;
}

.studio-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 40px;
}

.studio-learn-more {
  color: #04070b !important;
}

.studio-continue {
  border-color: #607482;
}

@keyframes studio-arrive {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 599px) {
  .studio-logo {
    width: 112px;
    height: 112px;
  }

  .studio-actions > * {
    width: 100%;
  }
}

@media (max-height: 750px) and (min-width: 600px) {
  .studio-logo {
    width: 128px;
    height: 128px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .studio-content {
    animation: none;
  }
}
</style>
