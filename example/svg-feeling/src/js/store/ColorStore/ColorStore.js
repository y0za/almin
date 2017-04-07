// LICENSE : MIT
"use strict";
import { Store } from "almin";
/*
    Separate Store and State class pattern

    Implementation Note:

    Current, StoreGroup use `XXXStore` as key, is not `XXXState`.
    
 */
import Color from "../../domain/value/Color";
import ColorState from "./ColorState";
export default class ColorStore extends Store {
    /**
     * @param {ColorMixerRepository} colorMixerRepository
     */
    constructor({ colorMixerRepository }) {
        super();
        this.state = new ColorState({
            currentColor: new Color({ hexCode: "#fff" })
        });
        this.colorMixerRepository = colorMixerRepository;
    }

    getState({ color = this.state }, payload) {
        const currentColor = this.colorMixerRepository.lastUsed().currentColor;
        return {
            color: color.update(currentColor)
        };
    }
}
