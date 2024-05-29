import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LS_PLAYER_KEY = 'videoplayer-current-time';
const player = new Player(document.querySelector('#vimeo-player'));

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(LS_PLAYER_KEY, seconds);
  }, 1000)
);

player
  .setCurrentTime(JSON.parse(localStorage.getItem(LS_PLAYER_KEY)) ?? 0)
  .catch(function (error) {
    console.error(error);
  });
