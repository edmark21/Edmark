new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Magbalik",
          artist: "Callalily",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/Magbalik.mp3",
          url: "https://www.google.com",
          favorited: false
        },
        
        {
          name: "Antukin",
          artist: "Rico Blanco",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/antukin.mp3",
          url: "https://www.google.com",
          favorited: false
        },
        
        {
          name: "Ang Huling El Bimbo",
          artist: "Eraserheads ",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/elbimbo.mp3",
          url: "https://www.google.com",
          favorited: false
        },
        
        {
          name: "Akin Ka Na Lang",
          artist: "The Itchyworms",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/Akin Ka Na Lang.mp3",
          url: "https://www.google.com",
          favorited: false
        },
        
        {
          name: "Beer",
          artist: "The Itchyworms",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/beer.mp3",
          url: "https://www.youtube.com/watch?v=RrtkU7i0qD8",
          favorited: true
        },
        
        {
          name: "Pasensya na",
          artist: "Cueshe",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/pasensya na.mp3",
          url: "https://www.google.com",
          favorited: true
        },
        
        {
          name: "Ligaya",
          artist: "Eraserheads",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/ligaya.mp3",
          url: "https://www.google.com",
          favorited: true
        },
        
        {
          name: "Ikaw nga",
          artist: "South Border",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/ikaw nga.mp3",
          url: "https://www.google.com",
          favorited: true
        },
        
        {
          name: "Ikaw lamang",
          artist: "Silent Sanctuary",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/ikaw lamang.mp3",
          url: "https://www.google.com",
          favorited: true
        },
        
        {
          name: "Bakit",
          artist: "Cueshe",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/bakit.mp3",
          url: "https://www.google.com",
          favorited: true
        },
        
        {
          name: "Yakap sa dilim",
          artist: "Orange & Lemons",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/Yakap Sa Dilim.mp3",
          url: "https://www.google.com",
          favorited: true
        },
        
        {
          name: "Pano",
          artist: "Zack Tabudlo",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/Pano.mp3",
          url: "https://www.google.com",
          favorited: true
        },
        
        {
          name: "Nangangamba",
          artist: "Zack Tabudlo",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/Nangangamba.mp3",
          url: "https://www.google.com",
          favorited: true
        },
        
        {
          name: "Binibini",
          artist: "Zack Tabudlo",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/Binibini.mp3",
          url: "https://www.google.com",
          favorited: true
        },
        
        {
          name: "Magasin",
          artist: "Eraserheads",
          cover: "https://raw.githubusercontent.com/edmark21/Edmark/master/img/opm.jpg",
          source: "https://raw.githubusercontent.com/edmark21/Edmark/master/mp3/Magasin.mp3",
          url: "https://www.google.com",
          favorited: true
        }
        
        
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
