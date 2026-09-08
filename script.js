const cards = document.querySelectorAll(".card");
const container = document.querySelector(".container");
const loadingScreen = document.getElementById("loadingScreen");
const resultScreen = document.getElementById("resultScreen");
const resultEmoji = document.getElementById("resultEmoji");
const resultTitle = document.getElementById("resultTitle");
const resultQuote = document.getElementById("resultQuote");
const backBtn = document.getElementById("backBtn");

const musicPlayer = document.getElementById("musicPlayer");
const songTitle = document.getElementById("songTitle");
const songArtist = document.getElementById("songArtist");
const record = document.getElementById("record");

const playBtn = document.getElementById("playBtn");
const restartBtn = document.getElementById("restartBtn");
const muteBtn = document.getElementById("muteBtn");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progressContainer");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");
const playIcon = document.querySelector(".play-icon");

document.body.classList.add("home");

const moods={

    peaceful:{
    emoji:"🪷​",
    title:"Huzurlu",
    quote:"Bazen huzur hiçbir şey olmaması değil, sonunda her şeyi olduğu gibi kabul edebilmektir.",

    songs:[

            {

                file:"music/huzurlu/1.mp3",

                title:"What's Up",

                artist:"4 Non Blondes"

            },

            {

                file:"music/huzurlu/2.mp3",

                title:"Sparkle",

                artist:"Akene Sasu Sora"

            },

            {

                file:"music/huzurlu/3.mp3",

                title:"Everywhere",

                artist:"Fleetwood Mac"

            },

            {

                file:"music/huzurlu/4.mp3",

                title:"Lemon Tree",

                artist:"Fool's Garden"

            },

            {

                file:"music/huzurlu/5.mp3",

                title:"Relax, Take It Easy",

                artist:"MIKA"

            }

        ]

    },

    tired:{
    emoji:"🌧️",
    title:"Yorgun",
    quote:"Dinlenmek vazgeçmek değildir. Devam edebilmek için verilen küçük bir moladır.",

        songs:[

            {

                file:"music/yorgun/1.mp3",

                title:"Carry Me Home",

                artist:"Jorja Smith"

            },

            {

                file:"music/yorgun/2.mp3",

                title:"Gamsız Hayat",

                artist:"Candan Erçetin"

            },

            {

                file:"music/yorgun/3.mp3",

                title:"Elliot's Song",

                artist:"Dominic Fike"

            },

            {

                file:"music/yorgun/4.mp3",

                title:"Vazgeçtim Ben Bugün",

                artist:"Gripin"

            },

            {

                file:"music/yorgun/5.mp3",

                title:"Losing My Religion",

                artist:"R.E.M"

            },

            {

                file:"music/yorgun/6.mp3",

                title:"Ben Yoruldum Hayat",

                artist:"Mümin Sarıkaya"

            }

        ]
    },

    thoughtful:{
    emoji:"🌙",
    title:"Düşünceli",
    quote:"En derin cevaplar bazen sessizliğin içinde bulunur.",

    songs:[

            {

                file:"music/düşünceli/1.mp3",

                title:"cümlelerim",

                artist:"TUANA"

            },

            {

                file:"music/düşünceli/2.mp3",

                title:"Düşünürüm",

                artist:"Kalben"

            },

            {

                file:"music/düşünceli/3.mp3",

                title:"Kendi Halimde",

                artist:"Can Kazaz & Nil İpek"

            },

            {

                file:"music/düşünceli/4.mp3",

                title:"Düşünme Kaybolursun",

                artist:"No Land"

            },

            {

                file:"music/düşünceli/5.mp3",

                title:"I Want to Break Free",

                artist:"Queen"

            },

            {

                file:"music/düşünceli/6.mp3",

                title:"Creep",

                artist:"Radiohead"

            },

            {

                file:"music/düşünceli/7.mp3",

                title:"İyileşiyorum",

                artist:"Sertab Erener"

            }

        ]
    },

    motivated:{
    emoji:"🔥",
    title:"Motive",
    quote:"Yaklaşıyorsun, bu yüzden zorlaşıyor.",


    songs:[

            {

                file:"music/motive/1.mp3",

                title:"Döndüm Durdum",

                artist:"Anıl Piyancı"

            },

            {

                file:"music/motive/2.mp3",

                title:"Kafama Göre",

                artist:"Athena"

            },

            {

                file:"music/motive/3.mp3",

                title:"Believer",

                artist:"Imagine Dragons"

            },

            {

                file:"music/motive/4.mp3",

                title:"Unstoppable",

                artist:"Sia"

            },

            {

                file:"music/motive/5.mp3",

                title:"Yeniden Doğdum",

                artist:"Fredd"

            }

        ]
    },

    love:{
    emoji:"❤️‍🔥​",
    title:"Aşık",
    quote:"Körebe oynamak gibidir aşk. Hepimiz kördük, ebemizi gördük.",

    songs:[

            {

                file:"music/aşk/1.mp3",

                title:"Aşk",

                artist:"Gökhan Türkmen"

            },

            {

                file:"music/aşk/2.mp3",

                title:"Beyaz",

                artist:"Ebru Gündeş"

            },

            {

                file:"music/aşk/3.mp3",

                title:"Disfruto",

                artist:"Carla Morrison"

            },

            {

                file:"music/aşk/4.mp3",

                title:"Seninle Her Şeye Varım Ben",

                artist:"Kayahan & İpek Acar"

            },

            {

                file:"music/aşk/5.mp3",

                title:"Tencere Kapak",

                artist:"Kenan Doğulu"

            },

            {

                file:"music/aşk/6.mp3",

                title:"Lovesong",

                artist:"Adele"

            },

            {

                file:"music/aşk/7.mp3",

                title:"Mutlu Sonsuz",

                artist:"Çağatay Ulusoy (Delibal Original Soundtrack)"

            },

            {

                file:"music/aşk/8.mp3",

                title:"Fade Into You",

                artist:"Mazzy Star"

            },

            {

                file:"music/aşk/9.mp3",

                title:"Sevme Zamanı",

                artist:"Oya & Bora"

            },

            {

                file:"music/aşk/10.mp3",

                title:"This I Love",

                artist:"Guns N' Roses"

            }

        ]
    },

    escape:{
    emoji:"🌊",
    title:"Kaçmak İstiyorum",
    quote:"Kendinden kaçmak sana şifa olmaz, bütün şifalar yüzleşmektedir.",

    songs:[

            {

                file:"music/kaçmak/1.mp3",

                title:"Kördüğüm",

                artist:"Hümeyra"

            },

            {

                file:"music/kaçmak/2.mp3",

                title:"Silence",

                artist:"Lucia"

            },

            {

                file:"music/kaçmak/3.mp3",

                title:"No Suprises",

                artist:"Radiohead"

            },

            {

                file:"music/kaçmak/4.mp3",

                title:"Sleep On The Floor",

                artist:"The Lumineers"

            },

            {

                file:"music/kaçmak/5.mp3",

                title:"Far From Any Road",

                artist:"The Handsome Family"

            }

        ]
    },

    hopeful:{
    emoji:"🌱",
    title:"Umutlu",
    quote:"Bir çiçekle bahar olmaz ama her bahar bir çiçekle başlar.",


    songs: [

            {

                file:"music/umut/1.mp3",

                title:"Olmazlara İnat",

                artist:"Berkay Altunyay"

            },

            {

                file:"music/umut/2.mp3",

                title:"End of Beginning",

                artist:"Djo"

            },

            {

                file:"music/umut/3.mp3",

                title:"Photograph",

                artist:"Ed Sheeran"

            },

            {

                file:"music/umut/4.mp3",

                title:"Kanatlarım Var Ruhumda",

                artist:"Nil Karaibrahimgil"

            }

        ]     
    },

    mixed:{
    emoji:"🎭",
    title:"Karışık",
    quote:"Her duygunun aynı anda var olması seni eksik yapmaz, insan yapar.",


    songs:[

            {

                file:"music/karışık/1.mp3",

                title:"Instant Crush",

                artist:"Daft Punk"

            },

            {

                file:"music/karışık/2.mp3",

                title:"Feel",

                artist:"Mahmut Orhan feat. Sena Şener"

            },

            {

                file:"music/karışık/3.mp3",

                title:"I Want To Break Free ",

                artist:"Queen"

            },

            {

                file:"music/karışık/4.mp3",

                title:"Borderline",

                artist:"Tame Impala"

            },

            {

                file:"music/karışık/5.mp3",

                title:"Should I Stay or Should I Go?",

                artist:"The Clash"

            }

        ]
    },
    
    fear:{
    emoji:"👁️",
    title:"Kaygı",
    quote:"Her ihtimali düşünmek, hiçbir ihtimali değiştirmez.",


    songs: [

            {

                file:"music/kaygı/1.mp3",

                title:"Panic Room",

                artist:"Au/Ra"

            },

            {

                file:"music/kaygı/2.mp3",

                title:"Korkuyorum Hayattan",

                artist:"Eypio"

            },


            {

                file:"music/kaygı/3.mp3",

                title:"She's Lost Control",

                artist:"Joy Division"

            }

        ]     
    },

    anger:{
    emoji:"💥​",
    title:"Öfke",
    quote:"Her haklı olduğun savaş, savaşman gereken bir savaş değildir.",


    songs:[

            {

                file:"music/öfke/1.mp3",

                title:"Labour",

                artist:"Paris Paloma"

            },

            {

                file:"music/öfke/2.mp3",

                title:"Breakin' Dishes",

                artist:"Rihanna"

            },

            {

                file:"music/öfke/3.mp3",

                title:"Born This Way",

                artist:"Lady Gaga"

            }


        ]
    },

    happy:{
    emoji:"✨",
    title:"Coşku",
    quote:"Her güzel yol önce içindeki küçük bir heyecanla başlar.",


    songs:[

            {

                file:"music/coşku/1.mp3",

                title:"Hysteria",

                artist:"Muse"

            },

            {

                file:"music/coşku/2.mp3",

                title:"Don't Stop Me Now",

                artist:"Queen"

            },

            {

                file:"music/coşku/3.mp3",

                title:"I Will Survive",

                artist:"Gloria Gaynor"

            },

            {

                file:"music/coşku/4.mp3",

                title:"Je Veux",

                artist:"ZAZ"

            }


        ]
    },

    longing:{
    emoji:"​🫂",
    title:"Özlem",
    quote:"Bazı insanlar uzakta değil, hatıralarımızın en yakın yerindedir.",


    songs:[

            {

                file:"music/özlem/1.mp3",

                title:"Anlatamam",

                artist:"F.O.K."

            },

            {

                file:"music/özlem/2.mp3",

                title:"Mockinbird",

                artist:"Eminem"

            },

            {

                file:"music/özlem/3.mp3",

                title:"Memories",

                artist:"Maroon 5"

            },

            {

                file:"music/özlem/4.mp3",

                title:"Yastayım",

                artist:"Kibariye"

            }

        

        ]
    }


};

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function updatePlayButton(isPlaying) {
  playIcon.textContent = isPlaying ? "❚❚" : "▶";
  playBtn.setAttribute(
    "aria-label",
    isPlaying ? "Müziği duraklat" : "Müziği oynat"
  );
}

function startMusic() {
  musicPlayer.play()
    .then(() => {
      record.classList.add("playing");
      updatePlayButton(true);
    })
    .catch(() => {
      updatePlayButton(false);
    });
}

function pauseMusic() {
  musicPlayer.pause();
  record.classList.remove("playing");
  updatePlayButton(false);
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const mood = card.dataset.mood;

    container.classList.add("hidden");
    loadingScreen.classList.remove("hidden");

    setTimeout(() => {
      loadingScreen.classList.add("hidden");
      resultScreen.classList.remove("hidden");

      document.body.classList.remove(
        "home",
        "peaceful",
        "tired",
        "thoughtful",
        "motivated",
        "love",
        "escape",
        "hopeful",
        "mixed",
        "fear",
        "anger",
        "happy",
        "longing"
      );

      document.body.classList.add(mood);

      resultEmoji.innerHTML = moods[mood].emoji;
      resultTitle.textContent = moods[mood].title;
      resultQuote.textContent = moods[mood].quote;

      const songs = moods[mood].songs;
      const randomSong = songs[Math.floor(Math.random() * songs.length)];

      songTitle.textContent = randomSong.title;
      songArtist.textContent = randomSong.artist;
      musicPlayer.src = randomSong.file;
      musicPlayer.load();

      progress.style.width = "0%";
      currentTime.textContent = "0:00";
      duration.textContent = "0:00";
      updatePlayButton(false);

      startMusic();
    }, 1500);
  });
});

playBtn.addEventListener("click", () => {
  if (musicPlayer.paused) {
    startMusic();
  } else {
    pauseMusic();
  }
});

restartBtn.addEventListener("click", () => {
  musicPlayer.currentTime = 0;
  startMusic();
});

muteBtn.addEventListener("click", () => {
  musicPlayer.muted = !musicPlayer.muted;
  muteBtn.textContent = musicPlayer.muted ? "🔇" : "♫";
  muteBtn.setAttribute(
    "aria-label",
    musicPlayer.muted ? "Sesi aç" : "Sesi kapat"
  );
});

musicPlayer.addEventListener("loadedmetadata", () => {
  duration.textContent = formatTime(musicPlayer.duration);
});

musicPlayer.addEventListener("timeupdate", () => {
  const percent = (musicPlayer.currentTime / musicPlayer.duration) * 100;

  progress.style.width = `${percent || 0}%`;
  currentTime.textContent = formatTime(musicPlayer.currentTime);
});

musicPlayer.addEventListener("ended", () => {
  record.classList.remove("playing");
  updatePlayButton(false);
  musicPlayer.currentTime = 0;
  progress.style.width = "0%";
});

progressContainer.addEventListener("click", (event) => {
  const rect = progressContainer.getBoundingClientRect();
  const clickPosition = event.clientX - rect.left;
  const percent = clickPosition / rect.width;

  musicPlayer.currentTime = percent * musicPlayer.duration;
});

backBtn.addEventListener("click", () => {
  pauseMusic();
  musicPlayer.currentTime = 0;
  musicPlayer.src = "";

  document.body.classList.remove(
    "peaceful",
    "tired",
    "thoughtful",
    "motivated",
    "love",
    "escape",
    "hopeful",
    "mixed",
    "fear",
    "anger",
    "happy",
    "longing"
  );

  document.body.classList.add("home");
  resultScreen.classList.add("hidden");
  container.classList.remove("hidden");
});