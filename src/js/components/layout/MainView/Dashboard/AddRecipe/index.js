import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faEdit,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { addRecipe } from "../../../../../../redux/actions/recipes";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const formInitialValues = {
  ingredients: {},
  steps: {},
  close: false
};

const AddRecipe = () => {
  const [formValues, setFormValues] = useState({ ...formInitialValues });
  const [ingredient, setIngredient] = useState("");
  const [instruction, setInstruction] = useState("");
  const [ingredientCounter, setIngredientCounter] = useState(1);
  const [instructionCounter, setInstructionCounter] = useState(1);

  const history = useHistory();

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = e => {
    if (e.name && e.description) {
      const dataToSend = {
        ...e,
        ...formValues
      };
      dispatch(addRecipe(dataToSend));
      history.push("/foodplan/recipes");
    } else {
      alert("Add values");
    }
  };

  const handleIngredient = e => {
    setIngredient(e.target.value);
  };

  const handleInstruction = e => {
    setInstruction(e.target.value);
  };

  const addIngredient = () => {
    if (ingredient) {
      setFormValues({
        ...formValues,
        ingredients: {
          ...formValues.ingredients,
          [ingredientCounter]: ingredient
        }
      });
      setIngredientCounter(ingredientCounter + 1);
      setIngredient("");
    }
  };

  const addInstruction = () => {
    if (instruction) {
      setFormValues({
        ...formValues,
        steps: {
          ...formValues.steps,
          [instructionCounter]: instruction
        }
      });
      setInstructionCounter(instructionCounter + 1);
      setInstruction("");
    }
  };

  const deleteInstruction = key => {
    delete formValues.steps[key];
    setFormValues({
      ...formValues,
      close: true
    });
  };

  const editInstruction = key => {
    const edit = prompt("Please, edit instruction");
    formValues.steps[key] = edit;
    setFormValues({
      ...formValues,
      close: true
    });
    /* console.log(edit); */
  };

  const deleteIngredient = key => {
    delete formValues.ingredients[key];
    setFormValues({
      ...formValues,
      close: true
    });
  };

  const editIngredient = key => {
    const edit = prompt("Please, edit ingredient");
    formValues.ingredients[key] = edit;
    setFormValues({
      ...formValues,
      close: true
    });
  };

  const listItemsIngredients = Object.keys(formValues.ingredients).map(key => {
    return (
      <li key={key} className="ingridients-element">
        {formValues.ingredients[key]}
        <div className="icon-container">
          <FontAwesomeIcon
            className="recipe__icon-edit"
            icon={faEdit}
            onClick={() => editIngredient(key)}
          />
          <FontAwesomeIcon
            className="recipe__icon-delete"
            icon={faTrashAlt}
            onClick={() => deleteIngredient(key)}
          />
        </div>
      </li>
    );
  });

  const listItemsInstructions = Object.keys(formValues.steps).map(key => {
    return (
      <li key={key} className="instructions-element">
        {formValues.steps[key]}
        <div className="icon-container">
          <FontAwesomeIcon
            className="recipe__icon-edit"
            icon={faEdit}
            onClick={() => editInstruction(key)}
          />
          <FontAwesomeIcon
            className="recipe__icon-delete"
            icon={faTrashAlt}
            onClick={() => deleteInstruction(key)}
          />
        </div>
      </li>
    );
  });

  return (
    <div className="add__recipe__container">
      <div className="add__recipe__header">
        <h1>new recipe</h1>
        <button type="submit" className="add__recipe__button" form="form1">
          Save and close
        </button>
      </div>
      <div className="add__recipe__input">
        <form id="form1" onSubmit={handleSubmit(onSubmit)}>
          <label>
            Recipe's name
            <input
              className="recipe__name-input"
              type="text"
              name="name"
              ref={register}
              placeholder="add recipe's name"
            />
          </label>
          <label>
            Recipe's description
            <textarea
              rows="6"
              ref={register}
              name="description"
              className="recipe__decsription-input"
              placeholder="add recipe's description"
            />
          </label>
        </form>
      </div>

      <div className="add__recipe__content-container">
        <div className="add__recipe__content">
          <div className="add__recipe__content-header">
            <h1>instructions</h1>
            <div className="add__recipe__content-fill">
              <form>
                <label>
                  <textarea
                    name="instruction"
                    rows="5"
                    onChange={handleInstruction}
                    placeholder="add a new instruction"
                    value={instruction}
                  />
                </label>
              </form>
              <FontAwesomeIcon
                className="icon-plus"
                icon={faPlusSquare}
                onClick={() => addInstruction()}
              />
            </div>
          </div>
        </div>

        <div className="add__recipe__content">
          <div className="add__recipe__content-header">
            <h1>ingredients</h1>
            <div className="add__recipe__content-fill">
              <form>
                <label>
                  <textarea
                    placeholder="add an new ingredient"
                    name="ingredient"
                    onChange={handleIngredient}
                    value={ingredient}
                  />
                </label>
              </form>
              <FontAwesomeIcon
                className="icon-2"
                icon={faPlusSquare}
                onClick={() => addIngredient()}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="add__recipe__content-list-container">
        <div className="add__recipe__content-list">
          <ul>{listItemsInstructions}</ul>
        </div>
        <div className="add__recipe__content-list2">
          <ul>{listItemsIngredients}</ul>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
