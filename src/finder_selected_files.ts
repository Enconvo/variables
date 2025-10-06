import { FileContextItem, NativeAPI } from "@enconvo/api"

export default async function main() {
    const resp = await NativeAPI.callCommand('finder_context|get_finder_selected_items')
    const items = resp.data?.items?.map((item: FileContextItem) => {
        return {
            url: item.url,
            title: item.title,
        }
    })

    return Response.json(items)
}