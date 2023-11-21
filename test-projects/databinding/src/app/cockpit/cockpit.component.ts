import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // The output decorator is attached to a property of a child component
  // It tells Angular that this property will ne used to emit events from the child component to the parent component.
  // The output decorator requires an instance of EventEmitter to specify the type of events that will be emitted.

  // EventEmitter is a class provided by Angular to create and emit custom events.
  // EventEmitters can emit data of a specific type, which is specified within angle brackets.

  // newServerName = "";
  // newServerContent = "";
  @ViewChild("serverContentInput", { static: true })
  serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  // In the child component, you define methods that perform actions or handle events that should trigger the emission of an event.
  // These methods use the 'emit' method of the event emitter to emit the event along with optional data.
}
