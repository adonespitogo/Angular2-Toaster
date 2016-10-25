import { ToasterService } from './toaster.service';
import { ToasterConfig } from './toaster-config';
export declare class TestComponent {
    toasterService: ToasterService;
    constructor(toasterService: ToasterService);
    toasterconfig: ToasterConfig;
    toasterconfig2: ToasterConfig;
}
export declare class TestComponentModule {
}
export declare class TestDynamicComponent {
}
export declare class TestDynamicComponentModule {
}
export declare class TestBoundDynamicComponent {
    someValue: string;
}
export declare class TestBoundDynamicComponentModule {
}
