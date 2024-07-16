"use client"

import React from 'react'
import Image from 'next/image';
import { E164Number } from "libphonenumber-js/core";
import { Control } from 'react-hook-form'; // Add this import statement
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { FormFieldType } from './forms/PatientForm';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';

interface Customprops {
    control: Control<any>,
    fieldType: FormFieldType,
    name: string,
    label? : string,
    placeholder?:string,
    iconSrc?: string,
    iconAlt?: string,
    disabled?: boolean,
    dateFormat?: string,
    showTimeSelect?: boolean,
    children?: React.ReactNode,
    renderSkeleton?: (field: any) => React.ReactNode,
}

const RenderField = ({ field , props }: { field : any; props : Customprops}) => {
  const { fieldType, iconSrc, iconAlt, placeholder} = props;

  switch(fieldType){
    case FormFieldType.INPUT:
      return(
        <div className='flex rounded-md border border-dark-500 bg bg-dark-400'>
          {iconSrc && (
            <Image
              src={iconSrc}
              height={24}
              width={24}
              alt={iconAlt || 'icon'}
              className='ml-2'
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className='shad-input border-0'
            />
          </FormControl>
            
        </div>
      )
      case FormFieldType.PHONE_INPUT:
        return (
          <FormControl>
            <PhoneInput
              defaultCountry="IN"
              placeholder={props.placeholder}
              international
              withCountryCallingCode
              value={field.value as E164Number | undefined}
              onChange={field.onChange}
              className="input-phone"
            />
          </FormControl>
        );
    default:
      break;
  }
}

const CustomFormField = (props: Customprops) => {
  const {control , fieldType, name, label} = props;
  return (  
    <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className='flex-1'>
              {fieldType !== FormFieldType.CHECKBOX && label &&(
                <FormLabel>{label}</FormLabel>
              )}
              <RenderField field = {field} props = {props}/>
              <FormMessage className='shad-error'/>
            </FormItem>
          )}
        />
  )
}

export default CustomFormField