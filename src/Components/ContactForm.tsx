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

const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 700 } },
};

const stackStyles: Partial<IStackStyles> = {
  root: { width: 650, margin: "auto" },
};
const regexp = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
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
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    this.setState({ name: newValue || "" });
  };

  handleChangeEmail = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    this.setState({ email: newValue || "" });
  };

  handleChangePhone = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    this.setState({ phone: newValue });
  };

  handleChangeMessage = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => {
    if (!newValue || newValue.length <= 300) {
      this.setState({ message: newValue || "" });
    }
  };

  handleSubmit = (event: React.SyntheticEvent<any>) => {
    const { name, phone, email, message } = this.state;
    event.preventDefault();
    if (
      name.length > 0 &&
      phone.length > 0 &&
      email.length > 0 &&
      message.length > 0
    ) {
      toast.success("Thank you for you submission. We will be in touch soon!");
      this.setState({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }
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
      message.length <= 10;
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
            required
            value={name}
            onChange={this.handleChangeName}
            onGetErrorMessage={(value: string) =>
              value.length === 0 ? "This field is required" : ""
            }
          />
          <TextField
            label="Email"
            required
            value={email}
            onChange={this.handleChangeEmail}
            onGetErrorMessage={this.getEmailErrorMessage}
          />
          <MaskedTextField
            label="Phone Number"
            mask="#: (999) 999 - 9999"
            value={phone}
            onChange={this.handleChangePhone}
            description="cannot be empty"
            required
          />
          <TextField
            label="Message"
            multiline
            autoAdjustHeight
            value={message}
            onChange={this.handleChangeMessage}
            onGetErrorMessage={this.getMessageError}
            required
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
