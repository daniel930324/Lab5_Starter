// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const text_to_speak = document.getElementById('text-to-speak');
  const voice_select = document.getElementById('voice-select');
  const speak_button = document.querySelector('button');
  const smile_img = document.querySelector('img');
  const speaking_image = 'assets/images/smiling-open.png';
  const smiling_image = 'assets/images/smiling.png'

  const synth = window.speechSynthesis;

  function populateVoiceList() {
    const voices = synth.getVoices();
    while (voice_select.options.length > 1) {
      voice_select.remove(1);
    }
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voice_select.appendChild(option);
    });
  }

  populateVoiceList();

  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }

  speak_button.addEventListener('click', function() {
    synth.cancel();
    const text = text_to_speak.value;
    if (!text) {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    if (voice_select.selectedIndex > 0) {
      const selectedOption = voice_select.selectedOptions[0];
      const selectedName = selectedOption.getAttribute('data-name');
      const voices = synth.getVoices();
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedName) {
          utterance.voice = voices[i];
        }
      }
    }

    utterance.onstart = function() {
      smile_img.src = speaking_image;
    };

    utterance.onend = function() {
      smile_img.src = smiling_image;
    };

    utterance.onerror = function() {
      smile_img.src = smiling_image;
      console.error('SpeechSynthesis error occurred');
    };

    synth.speak(utterance);
  });
}