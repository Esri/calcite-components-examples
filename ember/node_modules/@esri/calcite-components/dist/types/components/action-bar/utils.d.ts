export declare const overflowActionsDebounceInMs = 150;
export declare const getOverflowCount: ({ actionCount, actionHeight, height, groupCount }: {
  actionCount: number;
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
