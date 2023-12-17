import style from "./columns.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export function Columns() {
  const navigate = useNavigate();
  function handlemenu() {
    navigate("/menu");
  }
  function handleregister() {
    navigate("/register");
  }
  const handleinst = () => {
    window.location.href = "https://www.instagram.com/ku._.ch/";
  };
  return (
    <motion.div className={style.block_2}>
      <motion.div
        className={style.contain}
        initial={{ opacity: 0, y: "-200px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
      >
        <div className={style.contain_block_2}>
          <h1 className={style.name}>Промокод кола</h1>

          <p className={style.title}>
            При заказе от 1310 от coca-cola 1л в подарок
          </p>
        </div>
        <div className={style.contain_block}>
          <button className={style.btn} onClick={handlemenu}>
            Перейти в меню
          </button>
        </div>
      </motion.div>
      <motion.div
        className={style.contain}
        initial={{ opacity: 0, y: "-200px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
      >
        <div className={style.contain_block_2}>
          <h1 className={style.name}>Новый Декабрь</h1>

          <p className={style.title}>
            При регистрации на сайт скидка на пиццу 10%
          </p>
        </div>
        <div className={style.contain_block}>
          <button className={style.btn} onClick={handleregister}>
            Регистрация
          </button>
        </div>
      </motion.div>
      <motion.div
        className={style.contain}
        initial={{ opacity: 0, y: "-200px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
      >
        <div className={style.contain_block_2}>
          <h1 className={style.name}>Санта Клаус</h1>

          <p className={style.title}>
            20% суммы ваше покупки идут на благотворительность
          </p>
        </div>
        <div className={style.contain_block}>
          <button className={style.btn} onClick={handleinst}>
            Соц сети
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
