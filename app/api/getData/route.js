let os = require("os")

export async function GET(request) {
    return new Response(os.machine())
}

