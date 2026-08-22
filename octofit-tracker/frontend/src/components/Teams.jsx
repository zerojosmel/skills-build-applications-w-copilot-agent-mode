import { CollectionState } from './CollectionState.jsx'
import { useCollection } from './useCollection.js'

export default function Teams() {
  const { items, loading, error } = useCollection('teams')
  return <CollectionState loading={loading} error={error} empty={items.length === 0 ? 'teams' : ''}>
    <div className="metric-grid">{items.map((team) => <article className="metric-card" key={team._id || team.id || team.name}>
      <span className="eyebrow" style={{ color: team.color }}>{team.members?.length || 0} members</span><h3>{team.name}</h3><p>{team.description}</p>
    </article>)}</div>
  </CollectionState>
}