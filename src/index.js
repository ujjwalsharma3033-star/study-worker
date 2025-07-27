export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathParts = url.pathname.split('/');
    const filename = pathParts[pathParts.length - 1];

    // Only allow .zip files
    if (!filename.endsWith('.zip')) {
      return new Response('Invalid file request', { status: 400 });
    }

    // Signed Wasabi S3 URL base
    const baseWasabiUrl = 'https://s3.ap-southeast-1.wasabisys.com/admin.zouxo.com/studies';
    
    // ⚠️ Replace the query string below with your actual signed S3 query
    const signedQuery = '?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=REPLACE_ME';

    // Redirect to the signed Wasabi URL
    const redirectUrl = `${baseWasabiUrl}/${filename}${signedQuery}`;
    return Response.redirect(redirectUrl, 302);
  }
};
