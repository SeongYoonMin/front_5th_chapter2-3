import { useNavigate } from "react-router-dom";
import { useQueryParams } from "./useQueryParams"

export const useUpdateURL = () => {
  const { skip, limit, searchQuery, sortBy, sortOrder, selectedTag } = useQueryParams();
  const params = new URLSearchParams()
  if (skip) params.set("skip", skip.toString())
  if (limit) params.set("limit", limit.toString())
  if (searchQuery) params.set("search", searchQuery)
  if (sortBy) params.set("sortBy", sortBy)
  if (sortOrder) params.set("sortOrder", sortOrder)
  if (selectedTag) params.set("tag", selectedTag)

  const navigate = useNavigate();
  navigate(`?${params.toString()}`)
}