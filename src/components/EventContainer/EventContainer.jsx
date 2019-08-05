import React from "react";
// import Joi from "joi-browser";
import Input from "../Inputs/Input";
import Form from "../Form/Form";
import Textarea from "../Inputs/Textarea";
import Select from "../Inputs/Select";
import Radio from "../Inputs/Radio";
import Date from "../Inputs/Date";
import employees from "../../services/employees.json";
import categories from "../../services/categories.json";
import "./EventContainer.module.scss";

const initialState = {
  title: "",
  description: "",
  paid_event: true,
  event_fee: false,
  reward: "",
  date: "", // format: YYYY-MM-DDTHH:mm (example: 2018-01-19T15:15)
  duration: "", // in seconds
  email: ""
};

class EventContainer extends Form {
  state = {
    data: initialState,
    errors: {}
  };

  //Validation Scheme
  //   schema = {
  //     title: Joi.string()
  //       .required()
  //       .label("Title cannot be empty"),
  //     description: Joi.string()
  //       .required()
  //       .label("Description cannot be empty")
  //   };

  onInputChangeHandler = (e, inputName) => {
    this.setState({
      data: {
        ...this.state.data,
        [inputName]: e.target.value
      }
    });
  };

  onValidationCheckHandler = checkList => {
    const checkedList = checkList.map(inputName => {
      if (this.state.data[inputName].trim() === "") {
        this.setState(prevState => ({
          errors: {
            ...prevState.errors,
            [inputName]: `${inputName} should not be empty!`
          }
        }));
        return false;;
      }
      return true;
    });

    return checkedList.some(e => e === false);
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const validation = this.onValidationCheckHandler(["title", "email"]);
    if (validation) return;
    console.log("Submitted:", this.state.data);
    this.props.history.push("/register");
  };

  onResetHandler = () => {
    this.setState({ data: initialState, errors: {} });
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="my-5">
        <form onSubmit={this.onSubmitHandler} onReset={this.onResetHandler}>
          <div className="pb-3">
            <h4>About</h4>
            <hr />
          </div>
          <Input
            name="title"
            value={data.title}
            label="Title"
            type="text"
            error={errors.title}
            onChange={e => this.onInputChangeHandler(e, "title")}
          />
          <Input
            name="email"
            value={data.email}
            label="Email Address"
            type="email"
            error={errors.email}
            onChange={e => this.onInputChangeHandler(e, "email")}
          />
          <Date onInputChangeHandler={this.onInputChangeHandler} />
          <Textarea
            name="description"
            value={data.description}
            label="Description"
            style={{ resize: "none" }}
            rows="3"
            onChange={e => this.onInputChangeHandler(e, "description")}
          />
          <Select name="Categories" options={categories} />
          <div className="my-4">
            <Radio
              name="payment"
              label="Free Event"
              payment={data.payment}
              onChange={e => this.onInputChangeHandler(e, "payment")}
            />
            <Radio
              name="payment"
              label="Paid Event"
              payment={data.payment}
              onChange={e => this.onInputChangeHandler(e, "payment")}
            />
          </div>
          <Input
            name="reward"
            value={data.reward}
            label="Reward"
            type="text"
            onChange={e => this.onInputChangeHandler(e, "reward")}
          />
          <Select name="Employees" options={employees} />
          <button type="submit" className="btn btn-primary px-3">
            Login
          </button>
          <button type="reset" className="btn btn-danger px-3 ml-3 ">
            Reset
          </button>
        </form>
      </div>
    );
  }
}

export default EventContainer;
