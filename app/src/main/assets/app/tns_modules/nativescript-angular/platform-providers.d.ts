import { Frame } from 'ui/frame';
import { Page } from 'ui/page';
import { OpaqueToken } from '@angular/core';
import { Device } from "platform";
export declare const APP_ROOT_VIEW: OpaqueToken;
export declare const DEVICE: OpaqueToken;
export declare const defaultPageProvider: {
    provide: typeof Page;
    useFactory: () => Page;
};
export declare function getDefaultPage(): Page;
export declare const defaultFrameProvider: {
    provide: typeof Frame;
    useFactory: () => Frame;
};
export declare const defaultDeviceProvider: {
    provide: OpaqueToken;
    useValue: Device;
};
