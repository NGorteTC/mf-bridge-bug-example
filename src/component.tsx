export type WidgetProps = {
  text: string;
  number: number;
};

export const Widget = ({ text, number }: WidgetProps) => {
  return (
    <div>
      <h1>{text}</h1>
      <p>{number}</p>
    </div>
  );
};