import styles from './styles.module.css';

type Props = {
  image: string;
}

export function Image({ image }: Props) {
  return (
    <div className={styles.wrapper}>
      {image ? <img src={image} alt="news" className={styles.image} /> : null}
    </div>
  );
}
