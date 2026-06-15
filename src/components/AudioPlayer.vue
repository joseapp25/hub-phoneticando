<template>
  <!-- Hidden native audio element — handles all the real playback logic -->
  <audio
    ref="audioRef"
    :src="src"
    preload="metadata"
    @timeupdate="onTimeUpdate"
    @loadedmetadata="onLoaded"
    @ended="onEnded"
  />

  <div class="player" :class="{ playing }">
    <!-- Play / Pause -->
    <button
      class="play-btn"
      :aria-label="playing ? 'Pause' : 'Play'"
      @click="togglePlay"
    >
      <svg v-if="!playing" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M8 5v14l11-7z" />
      </svg>
      <svg v-else viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
      </svg>
    </button>

    <!-- Progress + times -->
    <div class="progress-wrap">
      <div
        class="progress-track"
        role="slider"
        :aria-valuenow="Math.round(currentTime)"
        :aria-valuemax="Math.round(duration)"
        aria-label="Seek"
        @click="seek"
      >
        <div class="progress-fill" :style="{ width: progressPct + '%' }" />
      </div>
      <div class="time-row">
        <span>{{ formatTime(currentTime) }}</span>
        <span>{{ formatTime(duration) }}</span>
      </div>
    </div>

    <!-- Playback speed -->
    <button class="speed-btn" @click="cycleSpeed">
      {{ currentSpeed }}×
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  src: { type: String, required: true },
});

const emit = defineEmits(["timeupdate"]);

const audioRef  = ref(null);
const playing   = ref(false);
const currentTime = ref(0);
const duration  = ref(0);

const SPEEDS = [1, 1.25, 1.5, 2];
const speedIndex = ref(0);
const currentSpeed = computed(() => SPEEDS[speedIndex.value]);

const progressPct = computed(() =>
  duration.value ? (currentTime.value / duration.value) * 100 : 0
);

function formatTime(secs) {
  if (!secs || isNaN(secs)) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function togglePlay() {
  const audio = audioRef.value;
  if (!audio) return;
  if (playing.value) {
    audio.pause();
    playing.value = false;
  } else {
    audio.play();
    playing.value = true;
  }
}

function onTimeUpdate() {
  currentTime.value = audioRef.value?.currentTime ?? 0;
  emit("timeupdate", currentTime.value);
}

function onLoaded() {
  duration.value = audioRef.value?.duration ?? 0;
}

function onEnded() {
  playing.value = false;
  currentTime.value = 0;
}

function seek(event) {
  const track = event.currentTarget;
  const rect  = track.getBoundingClientRect();
  const ratio = (event.clientX - rect.left) / rect.width;
  const newTime = ratio * duration.value;
  audioRef.value.currentTime = newTime;
  currentTime.value = newTime;
}

function cycleSpeed() {
  speedIndex.value = (speedIndex.value + 1) % SPEEDS.length;
  audioRef.value.playbackRate = currentSpeed.value;
}
</script>

<style scoped>
.player {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-bg, #fff);
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 1rem;
}

/* Play / Pause button */
.play-btn {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--graycool800);
  transition: background 0.2s;
}
.play-btn:hover {
  background: var(--graycool100);
  transition: background 0.2s;
}

/* Progress bar */
.progress-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.progress-track {
  width: 100%;
  height: 8px;
  background: var(--graycool100);
  border-radius: 4px;
  cursor: pointer;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: var(--cerulean200);
  border-radius: 2px;
  pointer-events: none;
  transition: width 0.2s linear;
}

.time-row {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--graycool600);
  font-variant-numeric: tabular-nums;
}

/* Speed button */
.speed-btn {
  font-size: 12px;
  font-weight: 600;
  color: var(--graycool600);
  background: none;
  border: none;
  border-radius: 8px;
  padding: 4px 8px;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s, background 0.2s;
  flex-shrink: 0;
}
.speed-btn:hover {
  color: var(--graycool800);
  background: var(--graycool100);
  transition: color 0.2s, background 0.2s;
}
</style>
