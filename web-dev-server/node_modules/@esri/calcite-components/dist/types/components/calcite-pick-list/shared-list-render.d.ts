import { FunctionalComponent } from "../../stencil-public-runtime";
import { JSXBase } from "../../stencil-public-runtime";
import { handleFilter } from "./shared-list-logic";
import DOMAttributes = JSXBase.DOMAttributes;
interface ListProps extends DOMAttributes {
  disabled: boolean;
  loading: boolean;
  filterEnabled: boolean;
  dataForFilter: any;
  handleFilter: typeof handleFilter;
  filterPlaceholder: string;
  el: HTMLCalcitePickListElement | HTMLCalciteValueListElement;
}
export declare const List: FunctionalComponent<{
  props: ListProps;
} & DOMAttributes>;
export default List;
