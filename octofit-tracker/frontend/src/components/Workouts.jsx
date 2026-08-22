import { CollectionState } from './CollectionState.jsx'
import { useCollection } from './useCollection.js'

export default function Workouts() {
  const { items, loading, error } = useCollection('/api/workouts/')
  return <CollectionState loading={loading} error={error} empty={items.length === 0 ? 'workouts' : ''}>
    <div className="workout-grid">{items.map((workout) => <article className="workout-card" key={workout._id || workout.id || workout.title}>
      <span className="eyebrow">{workout.difficulty || 'guided'}</span><h3>{workout.title}</h3><p>{workout.focus} - {workout.durationMinutes} min</p><small>{workout.exercises?.length || 0} exercises</small>
    </article>)}</div>
  </CollectionState>
}