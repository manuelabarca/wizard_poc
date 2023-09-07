import { Component, OnInit, ViewChild } from "@angular/core";
import { WizardComponent } from "angular-archwizard";

interface WizardStepDescriptor {
  header: string;
  content: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;

  public wizardSteps: WizardStepDescriptor[];
  public currentStepIndex = 0;
  public stepsToShow: WizardStepDescriptor[] = [];

  title = "poc-wizard";

  constructor() {
    this.wizardSteps = [
      {
        header: "Steptitle 1",
        content: "Content: Step 1",
      },
      {
        header: "Steptitle 2",
        content: "Content: Step 2",
      },
      {
        header: "Steptitle 3",
        content: "Content: Step 3",
      },
      {
        header: "Steptitle 4",
        content: "Content: Step 4",
      },
      {
        header: "Steptitle 5",
        content: "Content: Step 5",
      },
      {
        header: "Steptitle 6",
        content: "Content: Step 6",
      },
    ];
  }

  ngOnInit() {}

  nextStep(event) {
    this.wizard.navigation.goToNextStep();
  }

  backStep() {
    this.wizard.navigation.goToPreviousStep();
  }
}
