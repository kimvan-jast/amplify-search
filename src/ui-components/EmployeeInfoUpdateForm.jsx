/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getEmployeeInfo } from "../graphql/queries";
import { updateEmployeeInfo } from "../graphql/mutations";
const client = generateClient();
export default function EmployeeInfoUpdateForm(props) {
  const {
    id: idProp,
    employeeInfo: employeeInfoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstname: "",
    lastname: "",
    workingyears: "",
    jobtitle: "",
    more: "",
  };
  const [firstname, setFirstname] = React.useState(initialValues.firstname);
  const [lastname, setLastname] = React.useState(initialValues.lastname);
  const [workingyears, setWorkingyears] = React.useState(
    initialValues.workingyears
  );
  const [jobtitle, setJobtitle] = React.useState(initialValues.jobtitle);
  const [more, setMore] = React.useState(initialValues.more);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = employeeInfoRecord
      ? { ...initialValues, ...employeeInfoRecord }
      : initialValues;
    setFirstname(cleanValues.firstname);
    setLastname(cleanValues.lastname);
    setWorkingyears(cleanValues.workingyears);
    setJobtitle(cleanValues.jobtitle);
    setMore(cleanValues.more);
    setErrors({});
  };
  const [employeeInfoRecord, setEmployeeInfoRecord] = React.useState(
    employeeInfoModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getEmployeeInfo.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getEmployeeInfo
        : employeeInfoModelProp;
      setEmployeeInfoRecord(record);
    };
    queryData();
  }, [idProp, employeeInfoModelProp]);
  React.useEffect(resetStateValues, [employeeInfoRecord]);
  const validations = {
    firstname: [{ type: "Required" }],
    lastname: [{ type: "Required" }],
    workingyears: [],
    jobtitle: [],
    more: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          firstname,
          lastname,
          workingyears: workingyears ?? null,
          jobtitle: jobtitle ?? null,
          more: more ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateEmployeeInfo.replaceAll("__typename", ""),
            variables: {
              input: {
                id: employeeInfoRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "EmployeeInfoUpdateForm")}
      {...rest}
    >
      <TextField
        label="Firstname"
        isRequired={true}
        isReadOnly={false}
        value={firstname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname: value,
              lastname,
              workingyears,
              jobtitle,
              more,
            };
            const result = onChange(modelFields);
            value = result?.firstname ?? value;
          }
          if (errors.firstname?.hasError) {
            runValidationTasks("firstname", value);
          }
          setFirstname(value);
        }}
        onBlur={() => runValidationTasks("firstname", firstname)}
        errorMessage={errors.firstname?.errorMessage}
        hasError={errors.firstname?.hasError}
        {...getOverrideProps(overrides, "firstname")}
      ></TextField>
      <TextField
        label="Lastname"
        isRequired={true}
        isReadOnly={false}
        value={lastname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname: value,
              workingyears,
              jobtitle,
              more,
            };
            const result = onChange(modelFields);
            value = result?.lastname ?? value;
          }
          if (errors.lastname?.hasError) {
            runValidationTasks("lastname", value);
          }
          setLastname(value);
        }}
        onBlur={() => runValidationTasks("lastname", lastname)}
        errorMessage={errors.lastname?.errorMessage}
        hasError={errors.lastname?.hasError}
        {...getOverrideProps(overrides, "lastname")}
      ></TextField>
      <TextField
        label="Workingyears"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={workingyears}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              workingyears: value,
              jobtitle,
              more,
            };
            const result = onChange(modelFields);
            value = result?.workingyears ?? value;
          }
          if (errors.workingyears?.hasError) {
            runValidationTasks("workingyears", value);
          }
          setWorkingyears(value);
        }}
        onBlur={() => runValidationTasks("workingyears", workingyears)}
        errorMessage={errors.workingyears?.errorMessage}
        hasError={errors.workingyears?.hasError}
        {...getOverrideProps(overrides, "workingyears")}
      ></TextField>
      <TextField
        label="Jobtitle"
        isRequired={false}
        isReadOnly={false}
        value={jobtitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              workingyears,
              jobtitle: value,
              more,
            };
            const result = onChange(modelFields);
            value = result?.jobtitle ?? value;
          }
          if (errors.jobtitle?.hasError) {
            runValidationTasks("jobtitle", value);
          }
          setJobtitle(value);
        }}
        onBlur={() => runValidationTasks("jobtitle", jobtitle)}
        errorMessage={errors.jobtitle?.errorMessage}
        hasError={errors.jobtitle?.hasError}
        {...getOverrideProps(overrides, "jobtitle")}
      ></TextField>
      <TextField
        label="More"
        isRequired={false}
        isReadOnly={false}
        value={more}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              lastname,
              workingyears,
              jobtitle,
              more: value,
            };
            const result = onChange(modelFields);
            value = result?.more ?? value;
          }
          if (errors.more?.hasError) {
            runValidationTasks("more", value);
          }
          setMore(value);
        }}
        onBlur={() => runValidationTasks("more", more)}
        errorMessage={errors.more?.errorMessage}
        hasError={errors.more?.hasError}
        {...getOverrideProps(overrides, "more")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || employeeInfoModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || employeeInfoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
