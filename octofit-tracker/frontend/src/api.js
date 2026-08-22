const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

function getItems(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.items)) return payload.items
  if (Array.isArray(payload?.data?.data)) return payload.data.data
  if (Array.isArray(payload?.data?.results)) return payload.data.results
  return []
}

export async function fetchCollection(endpoint) {
  const response = await fetch(`${apiBaseUrl}${endpoint}`)
  if (!response.ok) throw new Error(`Unable to load ${component}`)
  return getItems(await response.json())
}