import { NativeAPI } from "@enconvo/api"

export default async function main() {
    const resp = await NativeAPI.callCommand('clipboard_context|get_clipboard_text')
    console.log('get_clipboard_text', resp.data)

    return Response.json(resp.data)
}