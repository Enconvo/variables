import { getFrontmostApplication } from "@enconvo/api"

export default async function main() {
    const application = await getFrontmostApplication()

    return Response.json(application)
}