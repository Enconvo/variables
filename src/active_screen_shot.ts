import { NativeAPI, ScreenshotContextItem } from "@enconvo/api"

export default async function main() {
    const resp = await NativeAPI.callCommand('screenshot_context|current_screen_screenshot')
    console.log('active_application_screenshot', resp.data)

    const items = resp.data?.items?.map((item: ScreenshotContextItem) => {
        return {
            url: item.url,
            title: item.title,
        }
    })

    return Response.json(items)
}