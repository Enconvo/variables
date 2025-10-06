import { NativeAPI } from "@enconvo/api"

export default async function main() {
    const resp = await NativeAPI.callCommand('application_context|frontmost_application_content')
    console.log('frontmost_application_content', resp.data)

    return Response.json(resp.data)
}