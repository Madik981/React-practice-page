import classes from "./Modal__loginContent.module.css"

const Modal__loginContent = () => {
    return(
        <>
          <h1 className={classes.login__textMain}>Вход в аккаунт</h1>
          <div className={classes.login__inputBoxes}>
            <div className={classes.login__box}>
              <div className={classes.login__box__texts}>
              <p className={classes.login__box__text}>Имя пользователя:</p>
              </div>
              <input placeholder='Введите логин...' type="text" className={classes.login__box__input} />
            </div>
            <div className={classes.login__box}>
              <div className={classes.login__box__texts}>
              <p className={classes.login__box__text}>Пароль:</p>
              </div>
              <input placeholder='Введите пароль...' type="text" className={classes.login__box__input} />
              <div className={classes.login__box__texts}>
                <p className={classes.login__box__forgotPasswordText}>Забыли пароль?</p>
              </div>
            </div>
          </div>
          <button className={classes.login__buttonEnter}>Войти</button>
        </>
        )
}

export default Modal__loginContent