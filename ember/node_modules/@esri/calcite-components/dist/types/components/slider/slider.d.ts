import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ColorStop, DataSeries } from "../graph/interfaces";
import { Scale } from "../interfaces";
import { LabelableComponent } from "../../utils/label";
import { FormComponent } from "../../utils/form";
import { InteractiveComponent } from "../../utils/interactive";
export declare class Slider implements LabelableComponent, FormComponent, InteractiveComponent {
  el: HTMLCalciteSliderElement;
  /** Disable and gray out the slider */
  disabled: boolean;
  /** Indicates if a histogram is present */
  hasHistogram: boolean;
  /**
   * List of x,y coordinates within the slider's min and max, displays above the slider track.
   * @see [DataSeries](https://github.com/Esri/calcite-components/blob/master/src/components/graph/interfaces.ts#L5)
   */
  histogram?: DataSeries;
  histogramWatcher(newHistogram: DataSeries): void;
  /**
   * Array of values describing a single color stop, sorted by offset ascending.
   */
  histogramStops: ColorStop[];
  /** Label handles with their numeric value */
  labelHandles: boolean;
  /** Label tick marks with their numeric value. */
  labelTicks: boolean;
  /** Maximum selectable value */
  max: number;
  /** Used as an accessible label (aria-label) for second handle if needed (ex. "Temperature, upper bound") */
  maxLabel?: string;
  /** Currently selected upper number (if multi-select) */
  maxValue?: number;
  /** Minimum selectable value */
  min: number;
  /** Used as an accessible label (aria-label) for first (or only) handle (ex. "Temperature, lower bound") */
  minLabel: string;
  /** Currently selected lower number (if multi-select) */
  minValue?: number;
  /**
   * When true, the slider will display values from high to low.
   *
   * Note that this value will be ignored if the slider has an associated histogram.
   */
  mirrored: boolean;
  /** The name of the slider */
  name: string;
  /** Interval to move on page up/page down keys */
  pageStep?: number;
  /** Use finer point for handles */
  precise: boolean;
  /**
   * When true, makes the component required for form-submission.
   */
  required: boolean;
  /** When true, enables snap selection along the step interval */
  snap: boolean;
  /** Interval to move on up/down keys */
  step?: number;
  /** Show tick marks on the number line at provided interval */
  ticks?: number;
  /** Currently selected number (if single select) */
  value: null | number | number[];
  valueHandler(): void;
  minMaxValueHandler(): void;
  /**
   * Specify the scale of the slider, defaults to m
   */
  scale: Scale;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  componentDidRender(): void;
  render(): VNode;
  private renderGraph;
  private renderTickLabel;
  keyDownHandler(event: KeyboardEvent): void;
  clickHandler(event: PointerEvent): void;
  pointerDownHandler(event: PointerEvent): void;
  handleTouchStart(event: TouchEvent): void;
  /**
   * Fires on all updates to the slider.
   * :warning: Will be fired frequently during drag. If you are performing any
   * expensive operations consider using a debounce or throttle to avoid
   * locking up the main thread.
   */
  calciteSliderInput: EventEmitter;
  /**
   * Fires on when the thumb is released on slider
   * If you need to constantly listen to the drag event,
   * please use calciteSliderInput instead
   */
  calciteSliderChange: EventEmitter;
  /**
   * Fires on all updates to the slider.
   * :warning: Will be fired frequently during drag. If you are performing any
   * expensive operations consider using a debounce or throttle to avoid
   * locking up the main thread.
   * @deprecated use calciteSliderInput instead
   */
  calciteSliderUpdate: EventEmitter;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: Slider["value"];
  private guid;
  private dragProp;
  private lastDragProp;
  private lastDragPropValue;
  private minHandle;
  private maxHandle;
  private trackEl;
  private activeProp;
  private minMaxValueRange;
  private minValueDragRange;
  private maxValueDragRange;
  private tickValues;
  setValueFromMinMax(): void;
  setMinMaxFromValue(): void;
  onLabelClick(): void;
  private shouldMirror;
  private shouldUseMinValue;
  private generateTickValues;
  private dragStart;
  private focusActiveHandle;
  private dragUpdate;
  private emitInput;
  private emitChange;
  private dragEnd;
  private removeDragListeners;
  /**
   * Set the prop value if changed at the component level
   * @param valueProp
   * @param value
   */
  private setValue;
  /**
   * Set the reference of the track Element
   * @internal
   * @param node
   */
  private storeTrackRef;
  /**
   * If number is outside range, constrain to min or max
   * @internal
   */
  private clamp;
  /**
   * Translate a pixel position to value along the range
   * @internal
   */
  private translate;
  /**
   * Get closest allowed value along stepped values
   * @internal
   */
  private getClosestStep;
  private getClosestHandle;
  private getDistanceX;
  private getFontSizeForElement;
  /**
   * Get position of value along range as fractional value
   * @return {number} number in the unit interval [0,1]
   * @internal
   */
  private getUnitInterval;
  private adjustHostObscuredHandleLabel;
  private hyphenateCollidingRangeHandleLabels;
  /**
   * Hides bounding tick labels that are obscured by either handle.
   */
  private hideObscuredBoundingTickLabels;
  /**
   * Returns an integer representing the number of pixels to offset on the left or right side based on desired position behavior.
   * @internal
   */
  private getHostOffset;
  /**
   * Returns an integer representing the number of pixels that the two given span elements are overlapping, taking into account
   * a space in between the two spans equal to the font-size set on them to account for the space needed to render a hyphen.
   * @param leftLabel
   * @param rightLabel
   */
  private getRangeLabelOverlap;
  /**
   * Returns a boolean value representing if the minLabel span element is obscured (being overlapped) by the given handle div element.
   * @param minLabel
   * @param handle
   */
  private isMinTickLabelObscured;
  /**
   * Returns a boolean value representing if the maxLabel span element is obscured (being overlapped) by the given handle div element.
   * @param maxLabel
   * @param handle
   */
  private isMaxTickLabelObscured;
}
