// import { Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Component, ViewChild, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
// export class CanvasComponent implements AfterViewInit  {
export class CanvasComponent implements OnInit  {
  @ViewChild('canvas', {static: true}) myCanvas! : ElementRef;
  ngOnInit(): void {
    const canvas: HTMLCanvasElement = this.myCanvas.nativeElement;
    const context = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    if (context) context.fillStyle = 'rgba(30,30,30,1)';
    if (context) context.fillRect(0,0,w,h);

    if(context) {
      
      class firefly {
        x: number = 0;
        y: number = 0;
        s: number = 0;
        ang: number = 0;
        v: number = 0;
        and: number = 0;
      
        constructor() {
          this.x = Math.random()*window.innerWidth;
          this.y = Math.random()*window.innerHeight;
          this.s = Math.random()*2;
          this.ang = Math.random()*2*Math.PI;
          this.v = (this.s * this.s) / 4;
        }

        move() {
          this.x += this.v * Math.cos(this.ang);
          this.y += this.v * Math.cos(this.ang);
          this.and += (Math.random()*20*Math.PI) / 180 - (10 * Math.PI);
        }
        show() {
          context!.beginPath()
          context!.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
          context!.fillStyle = "#fddba3";
          context!.fill();
        } 
      }

      let f: any = [];
      
      const draw = () => {
        if(f.length < 100) {
          for(let j = 0; j<10; j++) {
            f.push(new firefly())
          }
        }
        for (let i = 0; i < f.length; i++) {
          f[i].move();
          f[i].show();
          if(f[i].x < 0 || f[i].x > window.innerWidth || f[i].y < 0 || f[i].y > window.innerHeight) {
            f.splice(i, 1)
          }
        }
      }
      
      let mouse = { x: 0};
      let last_mouse = {x: 0};
      
      canvas.addEventListener("mouseover", (e) => {
          last_mouse.x = mouse.x;
          
          mouse.x = e.pageX - canvas.offsetLeft;
          mouse.x = e.pageY - canvas.offsetTop;
        }, 
        false
      );

      let winfr: any = window.requestAnimationFrame;
      winfr = () => {
        return (
          window.requestAnimationFrame || 
          function (callback: any) {
            window.setTimeout(callback);
          }
        );
      };

      function loop() {
        window.requestAnimationFrame(loop);
        context?.clearRect(0,0,w,h);
        draw();
      }

      window.addEventListener('resize', () => {
        (w = canvas.width = window.innerWidth),
        (h = canvas.height = window.innerHeight)
        loop();
      })
      loop();
      setInterval(loop, 1000/60)

    }

  }
  
}