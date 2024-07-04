import React from "react";
import { H3, Card } from "@blueprintjs/core";

export interface ExampleProps {
  header: string;
}

export const Example: React.FC<ExampleProps> = (props) => {
  return (
    <Card className="example-card">
      <H3>{props.header}</H3>
      {props.children}
    </Card>
  );
};
