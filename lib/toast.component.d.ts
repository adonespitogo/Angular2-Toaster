import { ViewContainerRef, EventEmitter, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Toast } from './toast';
import { BodyOutputType } from './bodyOutputType';
export declare class ToastComponent {
    private sanitizer;
    private componentFactoryResolver;
    private changeDetectorRef;
    toast: Toast;
    iconClass: string;
    componentBody: ViewContainerRef;
    safeCloseHtml: SafeHtml;
    bodyOutputType: typeof BodyOutputType;
    clickEvent: EventEmitter<{}>;
    constructor(sanitizer: DomSanitizer, componentFactoryResolver: ComponentFactoryResolver, changeDetectorRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    click(event: any, toast: Toast): void;
}
