//#region generated meta
/**
 * @typedef {{
 *   images: string[];
 * }} Inputs;
 * @typedef {{
 *   output: any;
 * }} Outputs;
 */
//#endregion

/**
 * @import { Context } from "@oomol/types/oocana"
 * @param {Inputs} params
 * @param {Context<Inputs, Outputs>} context
 * @returns {Promise<Partial<Outputs> | undefined | void>}
 */
export default async function (params, context) {

    for (const img of params.images) {
        context.preview({ type: "image", data: img })
    }

    return { output: "output_value" };
}
