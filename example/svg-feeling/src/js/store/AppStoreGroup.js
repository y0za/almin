// LICENSE : MIT
"use strict";
import {CQRSStoreGroup} from "almin";
import colorMixerRepository from "../infra/ColorMixerRepository";
import ColorStore from "./ColorStore/ColorStore";
import ColorHistoryStore from "./ColorHistoryStore/ColorHistoryStore";
import WallColorStore from "./WallColorStore/WallColorStore";
export default class AppStoreGroup {
    /**
     * StateStore array
     * @type {Store[]}
     */
    static create() {
        return new CQRSStoreGroup([
            new ColorStore({colorMixerRepository}),
            new ColorHistoryStore({colorMixerRepository}),
            new WallColorStore()
        ]);
    }
}
