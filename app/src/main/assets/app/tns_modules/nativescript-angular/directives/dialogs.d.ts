import { ComponentFactoryResolver, ViewContainerRef, Type } from '@angular/core';
import { Page } from 'ui/page';
export interface ModalDialogOptions {
    context?: any;
    fullscreen?: boolean;
}
export declare class ModalDialogParams {
    context: any;
    closeCallback: (...args) => any;
    constructor(context: any, closeCallback: (...args) => any);
}
export declare class ModalDialogService {
    private page;
    private resolver;
    private containerRef;
    constructor(page: Page, resolver: ComponentFactoryResolver);
    registerViewContainerRef(ref: ViewContainerRef): void;
    showModal(type: Type<any>, options: ModalDialogOptions): Promise<any>;
    private showDialog(type, options, doneCallback);
}
export declare class ModalDialogHost {
    constructor(containerRef: ViewContainerRef, modalService: ModalDialogService);
}
