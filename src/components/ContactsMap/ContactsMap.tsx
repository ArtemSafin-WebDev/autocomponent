"use client";

import { useEffect, useState } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import styles from "./map.module.scss";

type ContactsMapProps = {
  center: [number, number];
  zoom: number;
};

export default function ContactsMap({ center, zoom }: ContactsMapProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      {hydrated && (
        <YMaps>
          <div className={styles.mapWrapper}>
            <Map defaultState={{ center, zoom }} width={"100%"} height={"100%"}>
              <Placemark
                geometry={center}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: "/pin.svg",
                  iconImageSize: [48, 48],
                  iconImageOffset: [-24, -48],
                }}
              />

              <ZoomControl />
            </Map>
          </div>
        </YMaps>
      )}
    </>
  );
}
