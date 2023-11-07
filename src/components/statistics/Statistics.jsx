import CSS from './Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={CSS.statistics}>
      {title && <h2 className={CSS.title}>{title}</h2>}
      <ul className={CSS.stat_list}>
        {stats.map(el => {
          return (
            <li key={el.id} className={CSS.item}>
              <span className={CSS.label}>{el.label}</span>
              <span className={CSS.percentage}>{el.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
