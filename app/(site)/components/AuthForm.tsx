"use client";
import { useCallback, useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Input from "@/app/components/input/input";
import Button from "@/app/components/Button";
import {BsGithub,BsGoogle} from 'react-icons/bs'
import AuthSocialButton from "./AuthSocialButton";
type Variant = "LOGIN" | "REGISTER";
function AuthForm() {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
    }
    if (variant === "LOGIN") {
    }
  };
  const socialAction = (action: string) => {
    setIsLoading(true);
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form action="" onSubmit={handleSubmit(onSubmit)} className="">
          {variant === "REGISTER" && (
            <Input label="Name" disabled={isLoading} register={register} id="name" errors={errors} />
          )}
          <Input
            label="Email Address"
            type="email"
            register={register}
            id="email"
            errors={errors}
            disabled={isLoading} 
          />
          <Input
            label="Password "
            type="password"
            register={register}
            id="password"
            disabled={isLoading} 
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t bg-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
            </div>
            
          </div>
          <div className="mt-6 flex gap-2">
              <AuthSocialButton icon={BsGithub} onClick={()=>socialAction('github')}/>
              <AuthSocialButton icon={BsGoogle} onClick={()=>socialAction('google')}/>
            </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
            <div>
                {variant === 'LOGIN' ? 'New to Messenger' : 'Already hove an account'}
            </div>
            <div onClick={toggleVariant}
            className="underline cursor-pointer"    
            >
                {variant === 'LOGIN' ? 'Create an account' : 'Login'}
            </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
