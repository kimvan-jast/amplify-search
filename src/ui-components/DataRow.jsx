/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { generateClient } from "aws-amplify/api";
import { updateEmployeeInfo } from "../graphql/mutations";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
const client = generateClient();
export default function DataRow(props) {
  const { employeeInfo, overrides, ...rest } = props;
  const buttonOnClick = async () => {
    await client.graphql({
      query: updateEmployeeInfo.replaceAll("__typename", ""),
      variables: {
        input: {
          firstname: "String",
          lastname: "String",
          workingyears: "Int",
          jobtitle: "String",
          more: "String",
          id: employeeInfo?.id,
        },
      },
    });
  };
  return (
    <Flex
      gap="16px"
      direction="row"
      width="991px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="16px 0px 16px 0px"
      {...getOverrideProps(overrides, "DataRow")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="88px"
        height="33px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={employeeInfo?.firstname}
        {...getOverrideProps(overrides, "label3849486")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="86px"
        height="33px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={employeeInfo?.lastname}
        {...getOverrideProps(overrides, "value3849506")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="98px"
        height="33px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={employeeInfo?.workingyears}
        {...getOverrideProps(overrides, "label3849528")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="106px"
        height="33px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={employeeInfo?.jobtitle}
        {...getOverrideProps(overrides, "value3849590")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="430px"
        height="33px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={employeeInfo?.more}
        {...getOverrideProps(overrides, "value3849616")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="small"
        isDisabled={false}
        variation="link"
        children="Edit"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
