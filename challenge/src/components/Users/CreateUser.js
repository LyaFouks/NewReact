import Card from "../UI/Card";
import styles from "./CreateUser.module.css";
import Button from "../UI/Button";
import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const CreateUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const createUserHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Некорректный ввод",
        message: "Эти поля не могут быть пустыми",
      });
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "Некорректный возраст",
        message: "Возраст должен быть больше 0",
      });
      return;
    }
    // console.log(inputAge, inputName);
    props.onCreateUser(inputName, inputAge);
    setInputName("");
    setInputAge("");
  };

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <div>
            <div>
              <label htmlFor="name">Имя</label>
              <input
                id="name "
                type="text"
                onChange={nameChangeHandler}
                value={inputName}
              />
            </div>
            <div>
              <label htmlFor="age">Возраст</label>
              <input
                id="age"
                type="number"
                onChange={ageChangeHandler}
                value={inputAge}
              />
            </div>
            <div>
              <Button type="submit">Добавить Пользователя</Button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateUser;
