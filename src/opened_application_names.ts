import { spawnSync } from "child_process"

export default async function main() {
    const script = `
ObjC.import('AppKit');
var apps = $.NSWorkspace.sharedWorkspace.runningApplications;
var result = [];
for (var i = 0; i < apps.count; i++) {
    var app = apps.objectAtIndex(i);
    var policy = app.activationPolicy;
    if (policy === $.NSApplicationActivationPolicyRegular) {
        var name = ObjC.unwrap(app.localizedName) || '';
        if (name) result.push(name);
    }
}
JSON.stringify(result);
`

    const result = spawnSync('osascript', ['-l', 'JavaScript', '-e', script], { encoding: 'utf-8' })
    const names = JSON.parse(result.stdout.trim())

    return Response.json(names)
}
