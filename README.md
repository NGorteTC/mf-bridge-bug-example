# mf-bridge-bug-example

## Compiled types created with @module-federation/bridge-react@0.8.10

```typescript
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
```

## Compiled types created with @module-federation/bridge-react@0.21.1 (import from /v18)

```typescript
declare const WidgetBridge: any;
export default WidgetBridge;
```


## Compiled types created with @module-federation/bridge-react@0.21.1 (legacy)
```typescript
declare const WidgetBridge: () => {
    render(info: import("@module-federation/bridge-react").RenderParams): Promise<void>;
    destroy(info: import("@module-federation/bridge-react").DestroyParams): void;
};
export default WidgetBridge;
```
