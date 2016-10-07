import 'globals';
import "./zone.js/dist/zone-nativescript";
import 'reflect-metadata';
import './polyfills/array';
import './polyfills/console';
import { ElementSchemaRegistry, ResourceLoader } from '@angular/compiler';
import { OpaqueToken, PlatformRef, NgModuleRef, EventEmitter } from '@angular/core';
import { NativeScriptElementSchemaRegistry } from './dom-adapter';
import { FileSystemResourceLoader } from './resource-loader';
export interface AppOptions {
    bootInExistingPage: boolean;
    cssFile?: string;
    startPageActionBarHidden?: boolean;
}
export declare class NativeScriptModule {
}
export declare const NS_COMPILER_PROVIDERS: (any[] | {
    provide: OpaqueToken;
    useValue: {
        providers: ({
            provide: typeof ResourceLoader;
            useClass: typeof FileSystemResourceLoader;
        } | {
            provide: typeof ElementSchemaRegistry;
            useClass: typeof NativeScriptElementSchemaRegistry;
        })[];
    };
    multi: boolean;
})[];
export declare function platformNativeScriptDynamic(options?: AppOptions, extraProviders?: any[]): PlatformRef;
export declare const onBeforeLivesync: EventEmitter<NgModuleRef<any>>;
export declare const onAfterLivesync: EventEmitter<NgModuleRef<any>>;
