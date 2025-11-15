import { useState } from "react"
import { Card } from "./Card"
import BackCard from "./BackCard"

export const CardWrapper = () => {
  const [toggleDisplayFront, setToggleDisplayFront] = useState<boolean>(true);

  return (
    <>
    {
      toggleDisplayFront ? <Card setToggleDisplayFront={setToggleDisplayFront}/> : <BackCard setToggleDisplayFront={setToggleDisplayFront}/>
    }
    </>
  )
}