import { CollectionState } from './CollectionState.jsx'
import { useCollection } from './useCollection.js'

export default function Activities() {
  const { items, loading, error } = useCollection('/api/activities/')
  return <CollectionState loading={loading} error={error} empty={items.length === 0 ? 'activities' : ''}>
    <div className="activity-list">{items.map((activity) => <article className="activity-row" key={activity._id || activity.id}>
      <div><span className="activity-type">{activity.type}</span><strong>{activity.durationMinutes} min</strong></div><span>{activity.calories} kcal</span>
    </article>)}</div>
  </CollectionState>
}