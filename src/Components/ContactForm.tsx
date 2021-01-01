import React from "react";
import { toast } from "react-toastify";
import {
  TextField,
  MaskedTextField,
} from "office-ui-fabric-react/lib/TextField";
import { PrimaryButton } from "office-ui-fabric-react";
import {
  Stack,
  IStackProps,
  IStackStyles,
} from "office-ui-fabric-react/lib/Stack";
import emailjs from "emailjs-com";

const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 700 } },
};

const stackStyles: Partial<IStackStyles> = {
  root: { width: 650, margin: "auto" },
};
const regexp = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

export class ContactPage extends React.Component<
  ContactPageProps,
  ContactPageState
> {
  constructor(props: ContactPageProps) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
    };
  }
  notify = () => console.log("okay ", this.state);

  handleChangeName = (
    _event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    this.setState({ name: newValue || "" });
  };

  handleChangeEmail = (
    _event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    this.setState({ email: newValue || "" });
  };

  handleChangePhone = (
    _event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    this.setState({ phone: newValue });
  };

  handleChangeMessage = (
    _event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    if (!newValue || newValue.length <= 300) {
      this.setState({ message: newValue || "" });
    }
  };

  handleSubmit = async (event: React.SyntheticEvent<any>) => {
    event.preventDefault();
    const { name, phone, email, message } = this.state;
    let templateParams = {
      from_name: name,
      from_email: email,
      number: phone,
      message_html: message,
    };
    await emailjs.send("", "template_86lvtn8", templateParams, "");
    console.log(templateParams);
    toast.success("Thank you for you submission. We will be in touch soon!");
    this.setState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  };
  getErrorMessage = (value: string): string => {
    if (value.length === 0) {
      return "This field is required";
    } else if (!regexp.test(value)) {
      return "invalid email";
    }
    return "";
  };

  getEmailErrorMessage = (value: string): string => {
    if (value.length === 0) {
      return "This field is required";
    } else if (!regexp.test(value)) {
      return "invalid email";
    }
    return "";
  };
  getMessageError = (value: string): string => {
    if (value.length === 0) {
      return "This field is required";
    } else if (value.length > 300) {
      return "Message cannot be longer than 300 characters";
    }
    return "";
  };

  render() {
    const { name, phone, email, message } = this.state;
    const enabled =
      name.length > 0 &&
      regexp.test(email) &&
      message.length > 0 &&
      message.length <= 300;
    return (
      <Stack styles={stackStyles}>
        <div style={{ marginTop: "90px" }}>
          <h2>Contact Information</h2>
          <h6 style={{ color: "red" }}>
            For Information on the Environmental Justice Institute, please fill
            out the form below
          </h6>
        </div>
        <Stack {...columnProps}>
          <TextField
            label="Full Name"
            name="fullname"
            required
            value={name}
            onChange={this.handleChangeName}
            onGetErrorMessage={(value: string) =>
              value.length === 0 ? "This field is required" : ""
            }
            validateOnLoad={false}
          />
          <TextField
            label="Email"
            name="email"
            required
            value={email}
            onChange={this.handleChangeEmail}
            onGetErrorMessage={this.getEmailErrorMessage}
            validateOnLoad={false}
          />
          <MaskedTextField
            label="Phone Number"
            name="phone"
            mask="#: (999) 999 - 9999"
            value={phone}
            onChange={this.handleChangePhone}
            description="cannot be empty"
            required
          />
          <TextField
            label="Message"
            name="message"
            multiline
            autoAdjustHeight
            value={message}
            onChange={this.handleChangeMessage}
            onGetErrorMessage={this.getMessageError}
            required
            validateOnLoad={false}
          />
          <PrimaryButton
            text="Submit"
            disabled={!enabled}
            onClick={this.handleSubmit}
          />
        </Stack>
      </Stack>
    );
  }
}
interface ContactPageProps {}
interface ContactPageState {
  name: string;
  phone: any;
  email: string;
  message: string;
}
