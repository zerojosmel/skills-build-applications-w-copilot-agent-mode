import { CollectionState } from './CollectionState.jsx'
import { useCollection } from './useCollection.js'

export default function Leaderboard() {
  const { items, loading, error } = useCollection('leaderboard')
  const rankedItems = [...items].sort((a, b) => (a.rank || 999) - (b.rank || 999))
  return <CollectionState loading={loading} error={error} empty={items.length === 0 ? 'rankings' : ''}>
    <div className="leaderboard-list">{rankedItems.map((entry) => <article className="rank-row" key={entry._id || entry.id}>
      <span className="rank">{String(entry.rank).padStart(2, '0')}</span><strong>{entry.user?.name || entry.userName || 'OctoFit member'}</strong><span>{entry.points} pts</span>
    </article>)}</div>
  </CollectionState>
}