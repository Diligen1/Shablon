import style from "./Banner.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../../../../Image/бургер.png";
export function Banner() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  function handleMenu() {
    navigate("/menu");
  }
  return (
    <div className={style.block}>
      <motion.div
        className={style.block_2}
        initial={{ x: "-100px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className={style.blocker}>
          <motion.p
            className={style.text}
            initial={{ opacity: 0, y: "100px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeIn",
              delay: 0.1,
              duration: 0.3,
              type: "spring",
            }}
          >
            Доставка вкусной еды до 30 минут + напиток в подарок !
          </motion.p>
          <motion.p
            className={style.text_2}
            initial={{ opacity: 0, y: "100px" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeIn",
              delay: 0.3,
              duration: 0.2,
              type: "spring",
            }}
          >
            Доставим заказ вовремя и можете рассчитывать, что еда будет
            доставлен всегда горячим и ароматным.
          </motion.p>
          <motion.button
            className={style.btn}
            initial={{ scale: 1, opacity: 0, y: "1000px" }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleMenu}
            transition={{
              duration: 0.5,
              type: "spring",
            }}
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
            ПЕРЕЙТИ В МЕНЮ!
          </motion.button>
        </div>
      </motion.div>

      <div className={style.block_3}>
        <motion.img
          src={image}
          alt="Баннер"
          className={style.image}
          initial={{ x: "100px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
        />
      </div>
    </div>
  );
}
