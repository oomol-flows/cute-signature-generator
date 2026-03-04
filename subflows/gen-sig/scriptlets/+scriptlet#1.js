//#region generated meta
/**
 * @typedef {{
 *   name: string | null;
 *   decorations: string | null;
 * }} Inputs;
 * @typedef {{
 *   prompt: string;
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
    let { name, decorations, count } = params;
    count = count || 1;

    if (name && decorations) {
        return { 
            prompt: `Cute handwritten English signature for the name '${name}', decorated with ${decorations}, white background, kawaii style, hand-drawn signature design with cartoon decorations`
        }
    }

    if (name && !decorations) {
        return {
            prompt: `Cute handwritten English signature for the name '${name}', decorated with stars, hearts, and sparkles, white background, kawaii style, hand-drawn signature design with cartoon decorations`
        }
    }

    if (!name && decorations) {
        return {
            prompt: `A showcase of cute cartoon decorations including ${decorations}, arranged neatly on white background, kawaii style illustration, reference sheet for signature customization`
        }
    }

    if (!name && !decorations) {
        return {
            prompt: "A collection of cute handwritten English signature examples on white background, featuring various kawaii style lettering with different cartoon decorations like stars, hearts, flowers, cats, moons, and butterflies. Hand-drawn signature art showcase, clean white background, multiple signature styles displayed together, colorful and playful design"
        }
    }

    return { prompt };
}
