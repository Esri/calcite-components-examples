import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>Welcome to Calcite Components</h1>
            <p>We even have support for TypeScript!</p>
            <calcite-icon icon="banana"></calcite-icon>
            <calcite-dropdown oncalciteDropdownClose={() => console.log("closing dropdown")}>
                <calcite-button slot="trigger">Sort</calcite-button>
                <calcite-dropdown-group>
                    <calcite-dropdown-item>Relevance</calcite-dropdown-item>
                    <calcite-dropdown-item>Date modified</calcite-dropdown-item>
                    <calcite-dropdown-item>Title</calcite-dropdown-item>
                </calcite-dropdown-group>
            </calcite-dropdown>
        </div>
    );
};

export default Home;
