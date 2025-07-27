addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const studyFile = url.searchParams.get("file")  // e.g. ?file=abcd.zip

  if (!studyFile) {
    return new Response("Missing file parameter", { status: 400 })
  }

  const proxyUrl = `https://s3.ap-southeast-1.wasabisys.com/admin.zouxo.com/studies/${studyFile}`
  const response = await fetch(proxyUrl)

  return new Response(response.body, response)
}
