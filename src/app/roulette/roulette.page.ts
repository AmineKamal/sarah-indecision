import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

declare var Winwheel: any;

@Component({
  selector: "app-roulette",
  templateUrl: "./roulette.page.html",
  styleUrls: ["./roulette.page.scss"],
})
export class RoulettePage implements OnInit {
  private wheel: any;
  private wheelSpinning = false;
  private options: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.options = params.options;

      this.wheel = new Winwheel({
        numSegments: this.options.length, // Specify number of segments.
        outerRadius: 150, // Set radius to so wheel fits the background.
        innerRadius: 50, // Set inner radius to make wheel hollow.
        textFontSize: 16, // Set font size accordingly.
        textMargin: 0, // Take out default margin.
        // Define segments including colour and text.
        segments: this.options.map((o) => ({ fillStyle: "#eae56f", text: o })),
        // Define spin to stop animation.
        animation: {
          type: "spinToStop",
          duration: 5,
          spins: 8,
          callbackFinished: (indicatedSegment: any) =>
            this.finish(indicatedSegment),
        },
      });
    });
  }

  back() {
    this.router.navigate(["home"]);
  }

  startSpin() {
    if (this.wheelSpinning === false) {
      this.wheel.startAnimation();
      this.wheelSpinning = true;
    }
  }

  resetWheel() {
    this.wheel.stopAnimation(false); // Stop the animation, false as param so does not call callback function.
    this.wheel.rotationAngle = 0; // Re-set the wheel angle to 0 degrees.
    this.wheel.draw(); // Call draw to render changes to the wheel.
    this.wheelSpinning = false; // Reset to false to power buttons and spin can be clicked again.
  }

  finish(indicatedSegment: any) {
    window.alert(indicatedSegment.text);
    this.resetWheel();
  }
}
