import React from "react"
import { navigate } from "gatsby-link"
import styled from "styled-components"
import Layout from "./Layout"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <Root>
          <h1>Contact</h1>
          <form
            className="form"
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <div className="field">
              <label className="label" htmlFor={"name"}>
                Your name
              </label>
              <div className="control">
                <input
                  className="input"
                  type={"text"}
                  name={"name"}
                  onChange={this.handleChange}
                  id={"name"}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={"email"}>
                Email
              </label>
              <div className="control">
                <input
                  className="input"
                  type={"email"}
                  name={"email"}
                  onChange={this.handleChange}
                  id={"email"}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={"message"}>
                Message
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  name={"message"}
                  onChange={this.handleChange}
                  id={"message"}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <button className="button is-link" type="submit">
                Send
              </button>
            </div>
          </form>
        </Root>
      </Layout>
    )
  }
}

const Root = styled.section`
  h1 {
    margin: 0;
    padding: 0 !important;
    text-align: center;
  }
  .form {
    max-width: 400px;
    margin: 10px auto;
    padding: 10px 20px;
    background: #f4f7f8;
    border-radius: 8px;
  }

  input,
  textarea {
    background: rgba(255, 255, 255, 0.1);
    border: none;
    font-size: 16px;
    height: auto;
    margin: 0;
    outline: 0;
    padding: 13px;
    width: 100%;
    background-color: #e8eeef;
    color: #8a97a0;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
    margin-bottom: 30px;
  }

  button {
    padding: 19px 39px 18px 39px;
    color: #fff;
    background-color: #4bc970;
    font-size: 18px;
    text-align: center;
    font-style: normal;
    border-radius: 5px;
    width: 100%;
    border: 1px solid #3ac162;
    border-width: 1px 1px 3px;
    box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;
    margin-bottom: 10px;
  }
`
