import { NativeAPI } from "@enconvo/api"
export default async function main() {
    const resp = await NativeAPI.callCommand('browser_context|get_browser_current_tab_url')
    console.log('get_browser_current_tab_url', resp.data)

    return Response.json(resp.data)
}