'use strict';

const zapperSound = new Audio('./sound/zapper.mp3');
const leaveSound = new Audio('./sound/leave.mp3');
const bgSound = new Audio('./sound/buzz.mp3');
const missSound = new Audio('./sound/scream.mp3');
const winSound = new Audio('./sound/win.mp3');
const robbyBgSound = new Audio('./sound/bg.mp3');
winSound.volume = 0.5;
robbyBgSound.volume = 0.3;

export function playZapper() {
  playSound(zapperSound);
}
export function playMiss() {
  playSound(missSound);
}
export function playLeave() {
  playSound(leaveSound);
}
export function playWin() {
  playSound(winSound);
}

export function playrobbyBg() {
  playSound(robbyBgSound);
}
export function stoprobbyBG() {
  stopSound(robbyBgSound);
}
export function playBackground() {
  playSound(bgSound);
}
export function stopBackground() {
  stopSound(bgSound);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}