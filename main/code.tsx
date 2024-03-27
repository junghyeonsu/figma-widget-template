/**
 * @see https://yuanqing.github.io/create-figma-plugin/utilities/
 */
import { type EventHandler, on } from "@create-figma-plugin/utilities";

/**
 * @see https://www.figma.com/widget-docs/api/api-reference/
 */
const { widget } = figma;
const { AutoLayout, Text } = widget;

export interface SayHelloHandler extends EventHandler {
  name: "SAY_HELLO";
  handler: (message: string) => void;
}

const Widget = () => {
  on<SayHelloHandler>("SAY_HELLO", (message) => {
    figma.notify(message);
  });

  const openPlugin = () => {
    figma.showUI(__html__, { width: 240, height: 240 });
  };

  return (
    <AutoLayout direction="vertical">
      <Text
        onClick={() =>
          // Use async callbacks or return a promise to keep the Iframe window
          // opened. Resolving the promise, closing the Iframe window, or calling
          // "figma.closePlugin()" will terminate the code.
          new Promise(() => {
            openPlugin();
          })
        }
        fontSize={20}
        textDecoration="underline"
        fontWeight={400}
      >
        Hello, World!
      </Text>
    </AutoLayout>
  );
};

widget.register(Widget);
