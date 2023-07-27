import styles from "./filterModalPrice.module.scss"

interface IFilterModalPrice {
  priceVal: number;
  setPriceVal: any;
  markupVal: number;
  setMarkupVal: any
}

export default function FilterModalPrice({priceVal, setPriceVal, markupVal, setMarkupVal}: IFilterModalPrice) {
  return (
    <div className={styles.price}>
      <div className={styles.price__block}>
      <h5 className={styles.price__title}>Цена, ₽</h5>
        <div className={styles.price__containerInputs}>
          <input
            type="number"
            value={priceVal}
            onChange={(evt: any) => setPriceVal(evt.target.value)}
          />
          <span></span>
          <input
            type="number"
            value={priceVal * 2}
            onChange={(evt: any) => setPriceVal(evt.target.value)}
          />
        </div>
      </div>
      <div className={styles.price__block}>
        <h5 className={styles.price__title}>Цена с наценкой, ₽</h5>
        <div className={styles.price__containerInputs}>
          <input
            type="number"
            value={markupVal}
            onChange={(evt: any) => setMarkupVal(evt.target.value)}
          />
          <span></span>
          <input
            type="number"
            value={markupVal * 4}
            onChange={(evt: any) => setMarkupVal(evt.target.value)}
          />
        </div>
      </div>
    </div>
  )
}