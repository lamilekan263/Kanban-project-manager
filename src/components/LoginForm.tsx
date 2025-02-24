
'use client'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import CustomFormField from './Shared/Form/CustomFormField'
import Typography from './Typography'
import { Separator } from './ui/separator'
import { Form } from './ui/form'
import { Eye, EyeOff } from 'lucide-react'


const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email Address"
    }).min(2, {
        message: "Email must be at least 2 characters."
    }),
    password: z.string().min(7, {
        message: "Password must be at least 7 characters"
    })
})


const LoginForm = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })


    const [passwordVisibility, setPasswordVisibility] = useState(false)


    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className='w-full md:w-[500px] ' >
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <CustomFormField
                        name="email"
                        label='Email'
                        placeholder='Enter Email'

                    />
                    <CustomFormField
                        name="password"
                        label='Password'
                        placeholder='Enter Password'
                        type={passwordVisibility ? 'text' : 'password'}
                        icon={passwordVisibility ? Eye : EyeOff}
                        iconProps={{
                            onClick: () => setPasswordVisibility((prev) => !prev),
                            className: "text-primary", // Optional additional styling
                        }}
                    />
                    <Button className='w-full' type="submit">Submit</Button>
                    <div className='flex items-center space-x-2'>
                        <Separator className='flex-1' />
                        <Typography variant='s' className='text-center'>OR</Typography>
                        <Separator className='flex-1' />
                    </div>

                    <Button className='w-full' variant='outline' type="submit">
                        Continue With Google
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default LoginForm