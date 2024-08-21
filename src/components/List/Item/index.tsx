import style from "../List.module.scss";

export default function Item({ name, time }: { name: string; time: string }) {
  return (
    <li className={style.listItem}>
      <h3>{name}</h3>
      <span>{time}</span>
    </li>
  );
}
