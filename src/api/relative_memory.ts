import { NativeAPI, defineCommand } from "@enconvo/api"

export const command = defineCommand({
    title: "Relative Memory",
    commandType: "variable",
    mode: "no-view",
})

/** Relative memory request params */
interface RelativeMemoryParams {
    /** Query text to search for in the memory store */
    input_text: string
}

/**
 * Search the knowledge base memory store via the local knowledge_base/memory/search endpoint
 * and return only the matching content and category fields.
 * @param {Request} request - Request object, body is {@link RelativeMemoryParams}
 * @returns Array of `{ content, category }` entries from the matched memories
 * @private
 */
export default async function main(request: Request) {
    const params = await request.json() as RelativeMemoryParams

    const response = await NativeAPI.api("knowledge_base/memory/search", {
        query: params.input_text,
    }, { signal: request.signal })

    const data = await response.json() as { results?: { content: string; category: string }[] }
    const results = data?.results ?? []

    return Response.json(
        results.map(({ content, category }) => ({ content, category }))
    )
}
