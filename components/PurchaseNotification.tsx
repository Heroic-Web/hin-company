"use client"

import { usePurchaseNotification } from "@/hooks/usePurchaseNotification"
import "@/styles/purchaseNotification.css"

export default function PurchaseNotification() {
  const { purchase, visible } = usePurchaseNotification()

  if (!purchase) return null

  return (
    <div className={`purchase-container ${visible ? "show" : ""}`}>
      <div className="purchase-card">

        <img
          src={purchase.avatar}
          className="purchase-avatar"
          alt="customer"
        />

        <div className="purchase-text">

          <span className="purchase-name">
            {purchase.name}
          </span>

          <span className="purchase-desc">
            dari {purchase.city} telah memesan
          </span>

          <span className="purchase-product">
            {purchase.product}
          </span>

          <span className="purchase-time">
            {purchase.time}
          </span>

        </div>

      </div>
    </div>
  )
}
