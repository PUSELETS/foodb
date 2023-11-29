"use client"
import Navber from "./components/Navber";
import { useStateContext } from "./context/StateContext";


export default function Home() {
  
  const {menu} = useStateContext();

  return (
    <>
    { menu && <Navber />}
    </>
  )
}
