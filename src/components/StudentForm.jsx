import React, { Component } from "react";

export default class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      major: "CNTT",
      gpa: "",
      errors: {},
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validate = () => {
    const errors = {};
    const { name, email, gpa } = this.state;

    if (name.trim().length < 3) {
      errors.name = "Họ tên tối thiểu từ 3 ký tự!";
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Email không hợp lệ!";
    }

    // Validate GPA từ 0 đến 4
    const gpaNum = parseFloat(gpa);
    if (gpa === "" || isNaN(gpaNum) || gpaNum < 0 || gpaNum > 4) {
      errors.gpa = "GPA phải là số hợp lệ từ 0 đến 4!";
    }

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.props.onAdd({
        id: Date.now(),
        name: this.state.name,
        email: this.state.email,
        major: this.state.major,
        gpa: parseFloat(this.state.gpa),
      });

      // Reset form
      this.setState({
        name: "",
        email: "",
        major: "CNTT",
        gpa: "",
        errors: {},
      });
    }
  };

  render() {
    const { name, email, major, gpa, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="card-box">
        <h3>Thêm Sinh Viên (Class Component)</h3>

        <div className="form-group">
          <label>Họ tên:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Nhập họ tên..."
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="vd: an@ptit.edu.vn"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>GPA (từ 0 đến 4):</label>
          <input
            type="number"
            step="0.1"
            name="gpa"
            value={gpa}
            onChange={this.handleChange}
            placeholder="Nhập GPA (0 - 4)..."
          />
          {errors.gpa && <p className="error-text">{errors.gpa}</p>}
        </div>

        <div className="form-group">
          <label>Ngành học:</label>
          <select name="major" value={major} onChange={this.handleChange}>
            <option value="CNTT">CNTT</option>
            <option value="ATTT">ATTT</option>
            <option value="DTVT">ĐTVT</option>
          </select>
        </div>

        <button type="submit" className="btn-primary">Thêm Sinh Viên</button>
      </form>
    );
  }
}