"use client"

import React from 'react'
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

interface Customprops {
    control: Control<any>,
}

const CustomFormField = ({control}: Customprops) => {
  return (  
    <FormField
          control={control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
  )
}

export default CustomFormField