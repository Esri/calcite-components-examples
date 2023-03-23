import { Layout } from "../interfaces";
export declare const overflowActionsDebounceInMs = 150;
export declare const geActionDimensions: (actions: HTMLCalciteActionElement[]) => {
  actionWidth: number;
  actionHeight: number;
};
export declare const getOverflowCount: ({ layout, actionCount, actionWidth, width, actionHeight, height, groupCount }: {
  layout: Extract<"horizontal" | "vertical", Layout>;
  actionCount: number;
  actionWidth: number;
  width: number;
  actionHeight: number;
  height: number;
  groupCount: number;
}) => number;
export declare const queryActions: (el: HTMLElement) => HTMLCalciteActionElement[];
export declare const overflowActions: ({ actionGroups, expanded, overflowCount }: {
  actionGroups: HTMLCalciteActionGroupElement[];
  expanded: boolean;
  overflowCount: number;
}) => void;
