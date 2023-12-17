import style from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export function RegisterPage() {
  const navigate = useNavigate();
  function handlehome() {
    navigate("/");
  }
  function handleauthor() {
    navigate("/author");
  }
  return (
    <div className={style.block}>
      <motion.div
        className={style.block_2}
        animate={{ scale: [0, 1] }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className={style.block_4}>
          <p className={style.logo}>FOOD PLANET</p>
          <p className={style.text}>Зарегестрируйся что бы начать </p>
          <motion.button
            className={style.btn}
            onClick={handlehome}
            whileHover={{
              color: "#272d2f",
              transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            whileTap={{ scale: 0.9 }}
          >
            Главная
          </motion.button>
        </div>
        <motion.div
          className={style.block_3}
          animate={{ y: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.5, type: "spring" }}
        >
          <p className={style.logo_2}>Регистрация</p>
          <input type="text" placeholder="name" className={style.input} />
          <input type="text" placeholder="email" className={style.input} />
          <input type="text" placeholder="password" className={style.input} />
          <input type="text" placeholder="password.2" className={style.input} />
          <motion.button
            className={style.btn_2}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(254, 114, 76, 0)",
              color: "#fe724c",
              border: "1px solid #fe724c",
              transition: {
                duration: 0.4,
                type: "spring",
                stiffness: 400,
                damping: 14,
              },
            }}
            whileTap={{ scale: 0.9 }}
          >
            Get started
          </motion.button>
          <p className={style.avtor} onClick={handleauthor}>
            Перейти на Авторизацию
          </p>
        </motion.div>
        <div className={style.block_5}>
          <div className={style.crug_3}></div>
          <div className={style.crug}>
            <div className={style.crug_2}></div>
          </div>
          <p className={style.logo}>Bishkek 2024</p>
        </div>
      </motion.div>
    </div>
  );
}
