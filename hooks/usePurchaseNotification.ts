import { useEffect, useState } from "react"
import { purchases, Purchase } from "../data/purchases"

export const usePurchaseNotification = () => {
  const [purchase, setPurchase] = useState<Purchase | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        purchases[Math.floor(Math.random() * purchases.length)]

      setPurchase(random)
      setVisible(true)

      setTimeout(() => {
        setVisible(false)
      }, 5000)
    }, 12000)

    return () => clearInterval(interval)
  }, [])

  return { purchase, visible }
}