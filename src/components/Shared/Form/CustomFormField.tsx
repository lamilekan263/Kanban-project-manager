'use client'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import React from 'react'
import { useFormContext } from 'react-hook-form'


interface ICustomFormField {
    name: string
    placeholder: string
    label: string
    type?: string

    icon?: React.ElementType
    iconProps?: React.HTMLAttributes<HTMLElement>;
}
const CustomFormField = ({ name, placeholder, label, icon, iconProps, type = "text" }: ICustomFormField) => {

    const { control } = useFormContext()
    return (
        <FormField control={control}
            name={name}
            render={({ field, fieldState }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input
                            type={type}
                            Icon={icon}
                            iconProps={iconProps}
                            placeholder={placeholder}
                            className={fieldState.error ? "border-destructive" : ""}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default CustomFormField