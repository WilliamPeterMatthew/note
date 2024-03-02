 var dnpw404 = {
        collage: document.querySelector('.collage-404'),
        collageImages: document.querySelector(".collage-404-images"),
        collageH1: document.querySelector('.collage-404 h1'),
        html: document.documentElement,
        colorRange: document.querySelector('.color-range'),
        colorChoice: document.getElementById("color-choice"),
        currentRange: 0,
        shots: [],
        utils: {
          hsl2Rgb: function(h,s,l){
            s=s/100;
            l=l/100;
            var c,x,m,rgb;
            c=(1-Math.abs(2*l-1))*s;
            x=c*(1-Math.abs(((h/60)%2)-1));
            m=l-c/2;
            if(h>=0&&h<60) rgb=[c,x,0];
            if(h>=60&&h<120) rgb=[x,c,0];
            if(h>=120&&h<180) rgb=[0,c,x];
            if(h>=180&&h<240) rgb=[0,x,c];
            if(h>=240&&h<300) rgb=[x,0,c];
            if(h>=300&&h<=360) rgb=[c,0,x];

            return rgb.map(function(v){
              return 255*(v+m)|0;
            });
          },
          rgb2Hex: function(r, g, b) {
            var rgb = b | (g << 8) | (r << 16);
            return '#' + (0x1000000 + rgb).toString(16).slice(1)
          },
          hsl2Hex: function(h, s, l){
            var rgb = this.hsl2Rgb(h, s, l)
            return this.rgb2Hex( rgb[0], rgb[1], rgb[2] )
          },
          hueFromRangeValue: function(val) {
            return ((val/100)*360).toFixed(0)
          },
          inputSupported: function(type){
            var x = document.createElement("input");
            x.setAttribute("type", type);
            return x.type === type;
          },
          listenForKeyCombo: function(combo,callback){
            if ( window.addEventListener ) {
              var keys = []
              var konami =
              window.addEventListener("keydown", (function(e){
                  keys.push( e.keyCode )
                  if ( keys.toString().indexOf( combo ) >= 0 ){
                    keys = []
                    callback()
                  }
              }).bind(this), true)
            }
          }
        },
		
        init: function(){
          this.currentRange = Math.floor(100*Math.random())

          if(this.colorRange && this.utils.inputSupported("range")){
            this.colorRange.addEventListener('change', this.fetchAndBuildShots.bind(this))
            this.colorRange.addEventListener('input', this.syncColors.bind(this))
            this.colorRange.value = this.currentRange
            var event = new Event('change')
            this.colorRange.dispatchEvent(event)
          } else {
            this.colorRange.style.display = "none"
            this.fetchAndBuildShots()
          }

          this.utils.listenForKeyCombo("38,38,40,40,37,39,37,39,66,65",this.konami.bind(this))
        },
        loading: function(){
          this.html.classList.remove('loaded')
          this.html.classList.add('loading')
        },
        loaded: function(){
          this.html.classList.remove('loading')
          this.html.classList.add('loaded')
        },
        konami: function(){
          this.collageH1.innerHTML = '<svg width="176" height="128" viewBox="0 0 176 128" fill="black" xmlns="http:www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48 0H32V16H48V32H32V48H16V64H0V112H16V80H32V112H48V128H80V112H48V96H128V112H96V128H128V112H144V80H160V112H176V64H160V48H144V32H128V16H144V0H128V16H112V32H64V16H48V0ZM48 64V48H64V64H48ZM128 48H112V64H128V48Z"/></svg>'
          this.collage.classList.add("arkanoid")
          this.loading()
          this.build404Shots(this.shots)
        },
        build404Shots: function(data){
          this.collageImages.innerHTML = ''
          var numLoaded = 0
          var that = this

       //   create all links to shots and images
          Array.prototype.forEach.call(data,function(shot,i){

            if(i>51) return;

            var link = document.createElement("a")
            link.href = shot.url

          //  randomly position and style each shot link
            var x = 0*Math.random()
            var y = 0*Math.random()
            var z = 500*Math.random()
            var s = (0.75 + 0.25*Math.random())
            var transform = "translateX(" + x + "%) translateY(" + y + "%) scale(" + s + ") "
            link.style.transform = transform + " translateZ(" + z + "px)"
            link.style.color = "rgba(0,0,0," + (1-s)*0.5 + ")"
            link.style.boxShadow = "0 0 0 currentColor"

         //   setup the shot image
            var img = document.createElement("img")

            function imgLoaded(){
              numLoaded++;
              link.classList.add("loaded")
              link.style.transform = transform
              setTimeout(function(){
                link.classList.add("introduced")
              },2000)
              if(numLoaded == data.length){
                that.loaded()
              }
            }

           // start loading the image
            img.src = shot.img;
            if(img.complete){
              setTimeout(imgLoaded,10)
            }else{
              img.addEventListener("load",imgLoaded)
              img.addEventListener("error",imgLoaded)
            }

        //     append all to the 404 images
            link.appendChild(img)
            that.collageImages.appendChild(link)

          });
        },
		
        syncColors: function(){
          var hue = this.utils.hueFromRangeValue(this.currentRange)
          if(this.utils.inputSupported("range")){
            hue = this.utils.hueFromRangeValue(this.colorRange.value)
          }
          var hsl = "hsl("+ hue + ", 100%, 50%)"
          var hex = this.utils.hsl2Hex(hue,100,50)
          this.colorRange.style.color = hsl
          this.colorChoice.style.color = hsl
          this.colorChoice.innerHTML = hex
          this.colorChoice.setAttribute('href','https://delete.it/' + hex.replace('#',''))
          return hex
        },
        fetchAndBuildShots: function(){
          var that = this
          var hex = this.syncColors()

          this.loading()
          this.colorRange.disabled = true

          // call api and get new shots
          var request = new XMLHttpRequest()
          request.open('GET', 'https://cdn.zhaolinlang.com/www.dnpw.org/cn/api404-get404image.do', true)
          request.setRequestHeader("X-Requested-With", "XMLHttpRequest")
          request.onload = (function() {
            if (request.status == 200) {
    this.colorRange.disabled = false
              this.shots = JSON.parse(request.response).shots
              if( this.shots.length > 0 ){
                this.loaded()
              }
              this.build404Shots(this.shots)
            } 
          }).bind(this);
          request.onerror = function() {
            console.log("Error fetching colors.")
          };
          request.send()

        }
      }

      dnpw404.init()



document.write('<script src="https://www.dnpw.org/cn/api-thank?you=' + document.domain + '&style=0"><\/script>');


