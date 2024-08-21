"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signInSchema } from "@/schemas/signIn.schema";
import Link from "next/link";
import { authClient } from "@/lib/axios";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    console.log(data);
    setIsSubmitting(true);
    try {
      const response = await authClient.post("/login", data);
      toast({
        title: "Success",
        description: response.data.message,
      });
      form.reset();
      router.replace("/");
    } catch (error) {
      console.log("Error while login user: ", error);
      toast({
        title: "An error occurred",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-[100svh] p-4">
        <div className="border-2 border-gray-200 px-4 py-10 lg:p-10 rounded-md w-full max-w-md shadow-md ">
          <div className=" mb-5 text-center">
            <h1 className="text-3xl mb-1 font-bold">Welcome Back!</h1>

            <p className="text-slate-400">
              Fill out the form below to continue
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-center">
                {isSubmitting ? (
                  <Button disabled>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6"
                  >
                    Login
                  </Button>
                )}
              </div>
            </form>
          </Form>
          <footer className="mt-4 text-center">
            <p>
              Don&apos;t have an account yet?{" "}
              <Link className="text-blue-500" href={"/sign-up"} replace>
                Sign Up
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default SignIn;
