import { createBridgeComponent } from "@module-federation/bridge-react/v18";

type WidgetProps = {
  text: string;
  number: number;
};

const Widget = ({ text, number }: WidgetProps) => {
  return (
    <div>
      <h1>{text}</h1>
      <p>{number}</p>
    </div>
  );
};


const WidgetBridge = createBridgeComponent<WidgetProps>({
  rootComponent: Widget,
});

export default WidgetBridge;
