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
export declare type EmployeeInfoCreateFormInputValues = {
    firstname?: string;
    lastname?: string;
    workingyears?: number;
    jobtitle?: string;
    more?: string;
};
export declare type EmployeeInfoCreateFormValidationValues = {
    firstname?: ValidationFunction<string>;
    lastname?: ValidationFunction<string>;
    workingyears?: ValidationFunction<number>;
    jobtitle?: ValidationFunction<string>;
    more?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmployeeInfoCreateFormOverridesProps = {
    EmployeeInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    lastname?: PrimitiveOverrideProps<TextFieldProps>;
    workingyears?: PrimitiveOverrideProps<TextFieldProps>;
    jobtitle?: PrimitiveOverrideProps<TextFieldProps>;
    more?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EmployeeInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: EmployeeInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EmployeeInfoCreateFormInputValues) => EmployeeInfoCreateFormInputValues;
    onSuccess?: (fields: EmployeeInfoCreateFormInputValues) => void;
    onError?: (fields: EmployeeInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EmployeeInfoCreateFormInputValues) => EmployeeInfoCreateFormInputValues;
    onValidate?: EmployeeInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function EmployeeInfoCreateForm(props: EmployeeInfoCreateFormProps): React.ReactElement;
