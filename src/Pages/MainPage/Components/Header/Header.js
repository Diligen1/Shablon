import style from "./Header.module.css";
import { animate, motion } from "framer-motion";
import image from "../../../../Image/LOgo.png";
import { useNavigate } from "react-router-dom";
export function Header() {
  const navigate = useNavigate();
  function handleContact() {
    navigate("/contact");
  }
  function handleHome() {
    navigate("/");
  }
  function handleRegister() {
    navigate("/register");
  }
  function handleMenu() {
    navigate("/menu");
  }
  const visible = {
    scale: 1.1,
  };
  const animate = {
    scale: 0.9,
  };
  return (
    <motion.div
      className={style.block}
      initial={{ y: "-1000px" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <div className={style.logo_img}>
        <img src={image} alt="image_logo" className={style.img} />
      </div>
      <div className={style.block_title}>
        <motion.button
          className={style.text}
          whileHover={visible}
          whileTap={animate}
          onClick={handleHome}
        >
          Главное
        </motion.button>
        <motion.button
          to="/"
          className={style.text}
          whileHover={visible}
          whileTap={animate}
          onClick={handleMenu}
        >
          Меню
        </motion.button>

        <motion.button
          to="/"
          className={style.text}
          whileHover={visible}
          whileTap={animate}
          onClick={handleContact}
        >
          Контакты
        </motion.button>
        <motion.button
          to="/"
          className={style.text}
          whileHover={visible}
          whileTap={animate}
          onClick={handleRegister}
        >
          Вход
        </motion.button>
        <motion.button
          to="/"
          className={style.text}
          whileHover={visible}
          whileTap={animate}
        >
          Корзина
        </motion.button>
      </div>
    </motion.div>
  );
}
