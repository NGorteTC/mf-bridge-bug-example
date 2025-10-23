type WidgetProps = {
    text: string;
    number: number;
};
declare const WidgetBridge: () => {
    render(info: import("@module-federation/bridge-react").RenderFnParams & {
        [key: string]: unknown;
    }): Promise<void>;
    destroy(info: {
        moduleName: string;
        dom: HTMLElement;
    }): Promise<void>;
    rawComponent: import("react").ComponentType<WidgetProps>;
    __BRIDGE_FN__: (_args: WidgetProps) => void;
};
export default WidgetBridge;
