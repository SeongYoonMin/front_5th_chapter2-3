import { useState } from "react";

export const useQueryParams = () => {
  const queryParams = new URLSearchParams(location.search);
  const [skip, setSkip] = useState(parseInt(queryParams.get("skip") || "0"))
  const [limit, setLimit] = useState(parseInt(queryParams.get("limit") || "10"))
  const [searchQuery, setSearchQuery] = useState(queryParams.get("search") || "")
  const [sortBy, setSortBy] = useState(queryParams.get("sortBy") || "")
  const [sortOrder, setSortOrder] = useState(queryParams.get("sortOrder") || "asc")
  const [selectedTag, setSelectedTag] = useState(queryParams.get("tag") || "")
  return { skip, limit, setSkip, setLimit, searchQuery, setSearchQuery, sortBy, setSortBy, sortOrder, setSortOrder, selectedTag, setSelectedTag }
}