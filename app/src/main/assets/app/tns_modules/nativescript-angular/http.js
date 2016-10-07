var http_1 = require('@angular/http');
var ns_http_1 = require("./http/ns-http");
var ns_file_system_1 = require("./file-system/ns-file-system");
var core_1 = require("@angular/core");
var http_2 = require("@angular/http");
var NativeScriptHttpModule = (function () {
    function NativeScriptHttpModule() {
    }
    NativeScriptHttpModule = __decorate([
        core_1.NgModule({
            providers: [
                { provide: http_2.XSRFStrategy, useValue: new ns_http_1.NSXSRFStrategy() },
                ns_file_system_1.NSFileSystem,
                {
                    provide: http_1.Http, useFactory: function (backend, options, nsFileSystem) {
                        return new ns_http_1.NSHttp(backend, options, nsFileSystem);
                    }, deps: [http_1.XHRBackend, http_1.RequestOptions, ns_file_system_1.NSFileSystem]
                }
            ],
            imports: [
                http_2.HttpModule,
            ],
            exports: [
                http_2.HttpModule,
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], NativeScriptHttpModule);
    return NativeScriptHttpModule;
}());
exports.NativeScriptHttpModule = NativeScriptHttpModule;
//# sourceMappingURL=http.js.map