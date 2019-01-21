const searchParams = (key: string, searchQuery: string) => {
  const query = new URLSearchParams(searchQuery)
  return query.get(key)
}

export default searchParams
