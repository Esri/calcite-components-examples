import { FunctionalComponent, h } from "preact";
import { Link } from 'preact-router/match';
import * as style from "./style.css";

const Notfound: FunctionalComponent = () => {
    return (
        <div class={style.notfound}>
            <h1>Error 404</h1>
            <p>That page doesn't exist.</p>
            <Link href="/"><h4>Back to Home</h4></Link>
        </div>
    );
};

export default Notfound;