import { FileContextItem, NativeAPI } from "@enconvo/api"

export default async function main() {
    const resp = await NativeAPI.callCommand('finder_context|get_finder_current_directory_url')
    const items = resp.data?.items?.map((item: FileContextItem) => {
        return {
            url: item.url,
            title: item.title,
        }
    })

    return Response.json(items)
}