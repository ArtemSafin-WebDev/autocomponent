import Play from "@/icons/Play";
import styles from "./ourTeam.module.scss";
import Image from "next/image";
import FancyboxWrapper from "../FancyboxWrapper/FancyboxWrapper";

interface OurTeamProps {
  heading: string;
  text: string;
  video?: {
    preview: string;
    url: string;
  };
  list?: Array<{
    id: number | string;
    text: string;
  }>;
  photos?: Array<{
    id: number | string;
    src: string;
  }>;
}

export default function OurTeam({
  heading,
  text,
  video,
  list,
  photos,
}: OurTeamProps) {
  return (
    <div className={styles.ourTeam}>
      {heading ? <h2 className={styles.heading}>{heading}</h2> : null}
      {text ? <div className={styles.text}>{text}</div> : null}
      {video ? (
        <FancyboxWrapper>
          <a className={styles.video} href={video.url} data-fancybox>
            <Image
              src={video.preview}
              className={styles.videoPreview}
              alt=""
              fill
            />
            <div className={styles.play}>
              <Play />
            </div>
          </a>
        </FancyboxWrapper>
      ) : null}
      {list ? (
        <ul className={styles.list}>
          {list.map((item) => (
            <li className={styles.listItem} key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
      ) : null}
      {photos?.length ? (
        <ul className={styles.photos}>
          {photos.map((item) => (
            <li className={styles.photosListItem} key={item.id}>
              <div className={styles.photosCard}>
                <Image
                  className={styles.photosCardImage}
                  fill
                  alt=""
                  src={item.src}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
