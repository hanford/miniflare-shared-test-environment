export async function handleRequest(request: Request, env: Bindings) {
  return new Response("hello!", { status: 200 });
}

const worker: ExportedHandler<Bindings> = { fetch: handleRequest };

export default worker;
