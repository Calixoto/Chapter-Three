import style from '../styles/home.module.scss';

export default function Home() {
  return (
    <h1
      className={style.title}
    >
      hello <span>world</span>
    </h1>
  )
}
