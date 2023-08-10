import {useEffect, useState} from "react";

interface IUseFilter {
  data: any;
  condition: string | any;
  field: any
}

export default function useFindItem({data, condition, field}: IUseFilter) {
  const [finalArr, setFinalArr] = useState<any>([])

  useEffect(() => {

  }, [data, field, condition])

  return {finalArr}
}