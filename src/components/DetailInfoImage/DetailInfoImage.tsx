"use client"
import {useState, useMemo} from "react";
import detailInfo from "./detailInfo.module.scss"
import plusCircle from "@/assets/images/plusCircle.svg"
import minusCircle from "@/assets/images/minusCircle.svg"
import Image from "next/image";
import detailImg from "@/assets/images/detailImage.png"

export default function DetailInfoImage() {
  const [crnSize, setCrnSize] = useState<number>(100)

  const setImageSize =  useMemo(() => {
    if(crnSize > 200) {
      return setCrnSize(200)
    } else if(crnSize < 20) {
      return setCrnSize(20)
    } else {
      return crnSize
    }
  }, [crnSize])
  return (
    <div className={detailInfo.image}>
      <div className={detailInfo.image__btn}>
        <button onClick={() => setCrnSize((crnVal: number) => crnVal - 10)}>
          <Image src={minusCircle} alt={"icon"}/>
        </button>
        <p>{crnSize}%</p>
        <button onClick={() => setCrnSize((crnVal: number) => crnVal + 10)}>
          <Image src={plusCircle} alt={"icon"}/>
        </button>
      </div>
      <Image className={detailInfo.image__crnImage} width={640 * (setImageSize! / 150)} alt={"image"} src={detailImg}/>
    </div>
  )
}