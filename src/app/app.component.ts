import { Component, OnInit } from '@angular/core';
import Quagga from 'quagga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  state = {
    inputStream: {
      type : 'LiveStream',
      constraints: {
        width: 640,
        height: 480,
        facingMode: 'environment',
        aspectRatio: 1
      }
    },
    locator: {
      patchSize: 'medium',
      halfSample: true,
      debug: {
        showCanvas: true,
        showPatches: true,
        showFoundPatches: true,
        showSkeleton: true,
        showLabels: true,
        showPatchLabels: true,
        showRemainingPatchLabels: true,
        boxFromPatches: {
          showTransformed: true,
          showTransformedBox: true,
          showBB: true
        }
      }
    },
    numOfWorkers: 8,
    frequency: 10,
    decoder: {
      readers : ['code_128_reader'],
      debug: {
        drawBoundingBox: true,
        showFrequency: true,
        drawScanline: true,
        showPattern: true
      }
    },
    locate: true
  };

  ngOnInit() {
    Quagga.init(this.state, function (err) {
      debugger;
      if (err) {
        return console.log(err);
      }
      Quagga.start();
    });

    Quagga.onDetected((data) => console.log(data));
  }
}
