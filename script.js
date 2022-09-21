const stations = [
  {
    title: "531 AM - Radio Romania",
    src: "http://89.238.227.6:8000/;"
  },{
    title: "558 AM - IRIB Radio Iran",
    src: "http://radio.iranseda.ir/live/?VALID=TRUE&ch=50"
  },{
    title: "585 AM - IRIB radio Farhang",
    src: "http://radio.iranseda.ir/live/?VALID=TRUE&ch=58"
  },{
    title: "630 AM - Radio Timisoara",
    src: "http://www.radiotimisoara.ro/asculta/"
  },{
    title: "657 AM - IRIB radio Gilan",
    src: "http://guilan.irib.ir/radio/live"
  },{
    title: "684 AM - IRIB Sedaye Khorasan-e Razavi",
    src: "http://dorognoe.hostingradio.ru:8000/radio"
  },{
    title: "873 AM - RM-1 Молдова 1",
    src: "https://top-radio.ru/web/radio-moldova"
  },{
    title: "936 AM - IRIB Radio Azarbayjan Gharbi",
    src: "http://player.iranseda.ir/live-player/?VALID=TRUE&CH=509"
  },{
    title: "999 AM - Радио России",
    src: "http://89.238.227.6:8000/;"
  },{
    title: "1026 AM - Иран  IRIB Radio Tabriz",
    src: "http://player.iranseda.ir/live-player/?VALID=TRUE&CH=508"
  },{
    title: "1098 AM - SBA Radio Jeddah ?",
    src: "https://www.aloula.sa/live/jeddahradio"
  },{
    title: "1116 AM - Danko Radio",
    src: "http://icast.connectmedia.hu/4748/mr7.mp3"
  },{
    title: "1189 AM - Иран?",
    src: "http://player.iranseda.ir/live-player/?VALID=TRUE&CH=12"
  },{
    title: "1251 AM - Danko Radio",
    src: "https://myonlineradio.hu/danko-radio"
  },{
    title: "1260 AM - SBA Radio Riyadh из Dammam",
    src: "https://www.aloula.sa/live/riyadhradio"
  },{
    title: "1278 AM - Украинское радио УР-1",
    src: "http://89.238.227.6:8000/;"
  },{
    title: "1296 AM - COPE Valencia Испания",
    src: "https://www.cope.es/directos/net1"
  },{
    title: "1314 AM - Radio Oltenia-Craiova Румыния",
    src: "http://stream2.srr.ro:8370/"
  },{
    title: "1395 AM - проповедник  Brother Stair евангелист",
    src: "http://66.180.232.7:1477/?hash=1656099665897.mp3"
  },{
    title: "1413 AM -  Вести FM",
    src: "https://radiovesti.ru/air/audio/"
  },{
    title: "1449 AM - SBA Radio Riyadh  из Bahran",
    src: "https://www.aloula.sa/live/riyadhradio"
  },{
    title: "1594 AM - музыка Клюж Румыния SRR Radio Cluj",
    src: "http://www.radiocluj.ro/asculta-live/"
  }
];

var app = new Vue({
  el: "#app",
  data: {
    stations: stations,
    activeStation: 0,
    isPause: false
  },
  methods: {
    play(src, i) {
      this.$refs.audio.src = src;
      this.activeStation = i;
      this.go();
    },
    stop() {
      if (!this.isPause) {
        this.isPause = true;
        this.$refs.audio.pause();
        this.$refs.audioSvg.pauseAnimations();
      } else {
        this.go()
      }
    },
    go() {
      this.isPause = false;
      this.$refs.audio.play();
      this.$refs.audioSvg.unpauseAnimations();
    }
  }
});
