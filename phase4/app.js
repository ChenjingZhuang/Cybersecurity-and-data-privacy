pageexport function handleRequest(request) {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || 'home';
    const count = url.searchParams.get('count') || '1';
  
    return new Response(`Page: ${page}, Count: ${count}`); 
  }
  