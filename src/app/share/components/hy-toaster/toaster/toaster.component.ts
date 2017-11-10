import {
  Component, Input, Output, ViewChild, ViewContainerRef, EventEmitter,
  ComponentFactoryResolver, ChangeDetectorRef, OnInit, AfterViewInit
} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {Toast} from './toast';
import {BodyOutputType} from './bodyOutputType';


@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  encapsulation: 2
})
export class ToasterComponent implements OnInit, AfterViewInit {

  @Input() toast: Toast;
  @Input() iconClass: string;
  @Input() toastClass: string;
  @ViewChild('componentBody', {read: ViewContainerRef}) componentBody: ViewContainerRef;

  safeCloseHtml: SafeHtml;

  public bodyOutputType = BodyOutputType;

  @Output()
  public clickEvent = new EventEmitter();

  constructor(private sanitizer: DomSanitizer,
              private componentFactoryResolver: ComponentFactoryResolver,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (this.toast.closeHtml) {
      this.safeCloseHtml = this.sanitizer.bypassSecurityTrustHtml(this.toast.closeHtml);
    }
  }

  ngAfterViewInit() {
    if (this.toast.bodyOutputType === this.bodyOutputType.Component) {
      const component = this.componentFactoryResolver.resolveComponentFactory(this.toast.body);
      const componentInstance: any = this.componentBody.createComponent(component, undefined, this.componentBody.injector);
      componentInstance.instance.toast = this.toast;
      this.changeDetectorRef.detectChanges();
    }
  }

  click(event: MouseEvent, toast: Toast) {
    event.stopPropagation();
    this.clickEvent.emit({
      value: {toast: toast, isCloseButton: true}
    });
  }

}
