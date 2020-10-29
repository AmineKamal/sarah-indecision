import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styleUrls: ["./video-player.component.scss"],
})
export class VideoPlayerComponent implements AfterViewInit {
  @ViewChild("videoPlayer") videoplayer: ElementRef;
  @Input() back: () => Promise<void>;

  constructor() { }

  ngAfterViewInit() {
    this.toggleVideo();
  }

  async toggleVideo() {
    const native: HTMLVideoElement = this.videoplayer.nativeElement;
    await native.requestFullscreen();
    await native.play();
    native.addEventListener("ended", () => this.back());
  }

}
