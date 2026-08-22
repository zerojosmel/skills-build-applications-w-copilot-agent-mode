import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

export function useCollection(component) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    fetchCollection(component)
      .then((data) => active && setItems(data))
      .catch(() => active && setError('Could not connect to the OctoFit API.'))
      .finally(() => active && setLoading(false))
    return () => { active = false }
  }, [component])

  return { items, loading, error }
}