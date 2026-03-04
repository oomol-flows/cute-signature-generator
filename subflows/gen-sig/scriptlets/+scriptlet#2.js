//#region generated meta
/**
 * @typedef {{
 *   images: string[];
 * }} Inputs;
 * @typedef {{
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

    context.preview({ type: "image", data: params.images })
}
