/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DataRowOverridesProps = {
    DataRow?: PrimitiveOverrideProps<FlexProps>;
    label3849486?: PrimitiveOverrideProps<TextProps>;
    value3849506?: PrimitiveOverrideProps<TextProps>;
    label3849528?: PrimitiveOverrideProps<TextProps>;
    value3849590?: PrimitiveOverrideProps<TextProps>;
    value3849616?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DataRowProps = React.PropsWithChildren<Partial<FlexProps> & {
    employeeInfo?: any;
} & {
    overrides?: DataRowOverridesProps | undefined | null;
}>;
export default function DataRow(props: DataRowProps): React.ReactElement;
