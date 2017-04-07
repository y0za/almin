// LICENSE : MIT
"use strict";
import { Store } from "almin";
import RGBAColor from "../../domain/value/RGBAColor";
import WallColorState from "./WallColorState";
export default class WallColorStore extends Store {
    constructor() {
        super();
        /**
         * @type {WallColorState}
         */
        this.state = new WallColorState({
            wallColor: new RGBAColor({ rgba: "rgba(0, 0, 0, 0)" })
        });
    }

    getState({ wallColor = this.state }, payload) {
        return {
            wallColor: wallColor.reduce(payload)
        };
    }
}
