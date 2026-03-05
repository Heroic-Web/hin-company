"use client"

interface Props {
  search: string
  setSearch: (value: string) => void
}

export default function SearchFilter({ search, setSearch }: Props) {

  return (

    <div className="flex gap-3 mb-6">

      <input
        type="text"
        placeholder="Cari layanan..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      />

    </div>

  )

}