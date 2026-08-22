export function CollectionState({ loading, error, empty, children }) {
  if (loading) return <div className="state-message">Loading your {empty}...</div>
  if (error) return <div className="state-message state-error">{error}</div>
  if (empty) return <div className="state-message">No {empty} yet.</div>
  return children
}