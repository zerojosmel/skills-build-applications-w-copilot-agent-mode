import { CollectionState } from './CollectionState.jsx'
import { useCollection } from './useCollection.js'

export default function Users() {
  const { items, loading, error } = useCollection('users')
  return <CollectionState loading={loading} error={error} empty={items.length === 0 ? 'members' : ''}>
    <div className="member-grid">{items.map((user) => <article className="member-card" key={user._id || user.id || user.email}>
      <div className="avatar">{user.name?.slice(0, 1) || '?'}</div><div><h3>{user.name || 'Unnamed member'}</h3><p>{user.email}</p></div>
    </article>)}</div>
  </CollectionState>
}