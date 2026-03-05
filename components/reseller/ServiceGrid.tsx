"use client"

import { useState } from "react"
import { services, Service } from "@/data/services"
import ServiceCard from "./ServiceCard"
import SearchFilter from "./SearchFilter"

interface Props {
  phone: string
  reseller: string
}

export default function ServiceGrid({ phone, reseller }: Props) {

  const [search, setSearch] = useState("")

  const filtered = services.filter((s: Service) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  )

  return (

    <div>

      <SearchFilter
        search={search}
        setSearch={setSearch}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filtered.map((service) => (

          <ServiceCard
            key={service.id}
            service={service}
            phone={phone}
            reseller={reseller}
          />

        ))}

      </div>

    </div>

  )

}