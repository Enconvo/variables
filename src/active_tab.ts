import { Commander } from "@enconvo/api"

export default async function main() {
    const resp = await Commander.send("getDocumentUrl")

    return Response.json(resp.data)
}