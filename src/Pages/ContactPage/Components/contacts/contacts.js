import style from "./contacts.module.css";
import { motion } from "framer-motion";
export function Contacts() {
  return (
    <div className={style.block}>
      <motion.div
        className={style.block_2}
        initial={{ opacity: 0, x: "-400px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
      >
        <div className={style.block_4}>
          <div className={style.text}>
            <h1>Контакты</h1>
            <p>Если у вас есть какие нибудь вопросы можете обрашатся по...</p>
          </div>
          <div>
            <div className={style.contact}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#f9b17a"
              >
                <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001zm-.127 6.712c-1.248-.021-5.518-.356-8.873-3.712-3.366-3.366-3.692-7.651-3.712-8.874L7 4.414 9.586 7 8.293 8.293a1 1 0 0 0-.272.912c.024.115.611 2.842 2.271 4.502s4.387 2.247 4.502 2.271a.991.991 0 0 0 .912-.271L17 14.414 19.586 17l-2.006 2.005z"></path>
              </svg>
              <p> +996 500-254-220</p>
            </div>
            <div className={style.contact}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#f9b17a"
              >
                <path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z"></path>
              </svg>
              <p>Planet Earth</p>
            </div>
            <div className={style.contact}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#f9b17a"
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
              </svg>
              <p>kuba.2000.0505.kg@gmail.com</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className={style.block_3}
        initial={{ opacity: 0, x: "-400px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
      >
        <input className={style.input} type="text" placeholder="Введите имя" />
        <input
          className={style.input}
          type="email"
          placeholder="Введите email"
        />
        <textarea
          className={style.message}
          name="message"
          rows="4"
          cols="80"
          placeholder="Напишите свое сообшение"
        />
        <button className={style.btn}>Отправить Сообщение</button>
      </motion.div>
    </div>
  );
}
