"use client";

import { useEffect, useState } from "react";
import styles from "./priceRange.module.scss";
import * as Slider from "@radix-ui/react-slider";
import { useDebounceEffect } from "ahooks";

interface PriceRangeProps {
  maxValue: number;
  startValue: number;
  endValue: number;
  onValueSettle: (value: [number, number]) => void;
}

export default function PriceRange({
  maxValue,
  startValue,
  endValue,
  onValueSettle,
}: PriceRangeProps) {
  const [start, setStart] = useState<"" | number>(0);
  const [end, setEnd] = useState<"" | number>(5000);
  const [max, setMax] = useState<number>(7000);
  const [value, setValue] = useState<number[]>([0, 5000]);

  useEffect(() => {
    if (maxValue) {
      setMax(maxValue);
    }

    if (startValue) {
      setStart(startValue);
      setValue((prevValue) => {
        const copiedValue = [...prevValue];
        copiedValue[0] = startValue;
        return copiedValue;
      });
    }

    if (endValue) {
      setEnd(endValue);
      setValue((prevValue) => {
        const copiedValue = [...prevValue];
        copiedValue[1] = endValue;
        return copiedValue;
      });
    }
  }, []);

  useEffect(() => {
    setStart(value[0]);
    setEnd(value[1]);
  }, [value]);

  useDebounceEffect(
    () => {
      if (start !== "" && end !== "") {
        if (start > end) {
          setStart(end);
          setValue((prevValue) => {
            const copiedValue = [...prevValue];
            copiedValue[0] = end;
            return copiedValue;
          });
        }
      }
    },
    [start],
    {
      wait: 1000,
    }
  );

  useDebounceEffect(
    () => {
      if (start !== "" && end !== "") {
        if (end < start) {
          setEnd(start);
          setValue((prevValue) => {
            const copiedValue = [...prevValue];
            copiedValue[1] = start;
            return copiedValue;
          });
        }
      }
    },
    [end],
    {
      wait: 1000,
    }
  );

  useDebounceEffect(
    () => {
      if (start !== "" && end !== "") {
        onValueSettle([start, end]);
      }
    },
    [start, end],
    {
      wait: 1200,
    }
  );

  useEffect(() => {
    if (end !== "") {
      if (end > max) {
        setMax(end);
      }
    }
  }, [end]);

  return (
    <div className={styles.priceRange}>
      <div className={styles.rangeInputs}>
        <div className={styles.rangeInputWrapper}>
          <input
            className={styles.rangeInput}
            inputMode="numeric"
            value={start}
            onChange={(event) => {
              const value = event.target.value;
              if (value === "") {
                setStart("");
              } else {
                const parsedValue = parseInt(value.replace(" ", ""), 10);
                console.log("Parsed value", parsedValue);
                if (!isNaN(parsedValue)) {
                  setStart(parseInt(value, 10));
                  setValue((prevValue) => {
                    const copiedValue = [...prevValue];
                    copiedValue[0] = parsedValue;
                    return copiedValue;
                  });
                }
              }
            }}
          />
        </div>
        <span className={styles.divider}></span>
        <div className={styles.rangeInputWrapper}>
          <input
            className={styles.rangeInput}
            inputMode="numeric"
            value={end}
            onChange={(event) => {
              const value = event.target.value;
              if (value === "") {
                setEnd("");
              } else {
                const parsedValue = parseInt(value.replace(" ", ""), 10);
                console.log("Parsed value", parsedValue);
                if (!isNaN(parsedValue)) {
                  setEnd(parseInt(value, 10));
                  setValue((prevValue) => {
                    const copiedValue = [...prevValue];
                    copiedValue[1] = parsedValue;
                    return copiedValue;
                  });
                }
              }
            }}
          />
        </div>
      </div>
      <Slider.Root
        className={styles.SliderRoot}
        value={value}
        minStepsBetweenThumbs={0}
        min={0}
        max={max}
        step={100}
        onValueChange={(value) => {
          console.log("range value", value);
          setValue(value);
        }}
      >
        <Slider.Track className={styles.SliderTrack}>
          <Slider.Range className={styles.SliderRange} />
        </Slider.Track>
        <Slider.Thumb className={styles.SliderThumb} />
        <Slider.Thumb className={styles.SliderThumb} />
      </Slider.Root>
    </div>
  );
}
