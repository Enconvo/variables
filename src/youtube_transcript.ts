import { NativeAPI } from "@enconvo/api"

export default async function main() {
    const resp = await NativeAPI.callCommand('youtube|get_youtube_transcript', {
        load_content: true
    })
    console.log('youtube variable', resp.data)

    return Response.json(resp.data)
}