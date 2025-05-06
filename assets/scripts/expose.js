// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horns = {
    'air-horn': {
      image: 'assets/images/air-horn.svg',
      sound: 'assets/audio/air-horn.mp3'
    },
    'car-horn': {
      image: 'assets/images/car-horn.svg',
      sound: 'assets/audio/car-horn.mp3'
    },
    'party-horn': {
      image: 'assets/images/party-horn.svg',
      sound: 'assets/audio/party-horn.mp3'
    }
  };

  const horn = document.getElementById('horn-select');
  const horn_image = document.querySelector('#expose img');
  const volume = document.getElementById('volume')
  const volume_image = document.querySelector('#volume-controls img')
  const play_button = document.querySelector('#expose button')
  const sound = document.querySelector('#expose audio')

  update_volume_image(volume.value);
  sound.volume = volume.value / 100;

  horn.addEventListener('change', function() {
    const selected = horn.value;
    horn_image.src = horns[selected].image;
    horn_image.alt = selected + ' image';
    sound.src = horns[selected].sound;
  });
  
  volume.addEventListener('input', function() {
    const value = volume.value;
    update_volume_image(value);
    sound.volume = value / 100;
  });
  
  play_button.addEventListener('click', function() {
    sound.play();
    if (horn.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });

  function update_volume_image(volume) {
    let icon = '';
    if (volume == 0) {
      icon = 'assets/icons/volume-level-0.svg';
      volume_image.alt = 'Volume level 0 (muted)';
    } else if (volume > 0 && volume < 33) {
      icon = 'assets/icons/volume-level-1.svg';
      volume_image.alt = 'Volume level 1';
    } else if (volume >= 33 && volume < 67) {
      icon = 'assets/icons/volume-level-2.svg';
      volume_image.alt = 'Volume level 2';
    } else if (volume >= 67) {
      icon = 'assets/icons/volume-level-3.svg';
      volume_image.alt = 'Volume level 3';
    }
    volume_image.src = icon;
  }
}