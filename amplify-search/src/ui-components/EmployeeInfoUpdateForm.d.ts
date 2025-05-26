/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmployeeInfoUpdateFormInputValues = {
    firstname?: string;
    lastname?: string;
    workingyears?: number;
    jobtitle?: string;
    more?: string;
};
export declare type EmployeeInfoUpdateFormValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    workingyears?: ValidationFunction<number>;
    jobtitle?: ValidationFunction<string>;
    more?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmployeeInfoUpdateFormOverridesProps = {
    EmployeeInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    workingyears?: PrimitiveOverrideProps<TextFieldProps>;
    jobtitle?: PrimitiveOverrideProps<TextFieldProps>;
    more?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmployeeInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: EmployeeInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    employeeInfo?: any;
    onSubmit?: (fields: EmployeeInfoUpdateFormInputValues) => EmployeeInfoUpdateFormInputValues;
    onSuccess?: (fields: EmployeeInfoUpdateFormInputValues) => void;
    onError?: (fields: EmployeeInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmployeeInfoUpdateFormInputValues) => EmployeeInfoUpdateFormInputValues;
    onValidate?: EmployeeInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EmployeeInfoUpdateForm(props: EmployeeInfoUpdateFormProps): React.ReactElement;
