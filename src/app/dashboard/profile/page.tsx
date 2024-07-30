"use client";
import React from "react";
import  Sidebar  from "@/components/Sidebar";
import {
  CircleUserRound
} from "lucide-react";
import { Button } from "@/components/ui/button"
import Image from "next/image"; 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {z} from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
const formSchema = z.object({
  dispname: z.string().min(2).max(50),
  username: z.string().min(6).max(12),
  bio: z
    .string()
    .min(10, {
      message: "About Me must be at least 10 characters.",
    })
    .max(350, {
      message: "About Me must not be longer than 350 characters.",
    })

})


function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dispname: "",
      username: "",
      bio: ""

    },
  })
  return (
    <div>
    <div className="flex flex-col bg-gradient-to-r from-white to-slate-200 min-h-screen min-w-screen">
        <Sidebar />
        <div className="flex flex-col text-sm text-slate-400 p-6">
        Profile Picture
          <div className = "flex flex-row items-center">
          <CircleUserRound size={125} className="pt-2"/>
          <div className="pl-4"><Button variant="secondary"><div className="text-sm">Change picture</div></Button></div>
          <div className="pl-4"><Button variant="destructive"><div className="text-sm">Delete picture</div></Button></div>
          </div>
          <div className="pt-3">
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dispname"
          render={({ field }) => (
            <FormItem>
              <FormLabel><div className="text-sm text-slate-400 font-normal pt-3">Profile Name</div></FormLabel>
              <div className="w-1/2">
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              </div>
              <FormDescription>
                <div className="text-slate-300 text-xs">This is your public display name.</div>
              </FormDescription>
              <FormMessage />
            </FormItem>
             )}
             />
             <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
            <FormItem>
              <FormLabel><div className="text-sm text-slate-400 font-normal">Username</div></FormLabel>
              <div className="w-1/2">
              <FormControl>
                <Input placeholder="@shadcn1234" {...field} />
               </FormControl>
               </div>
              <FormDescription>
              <div className="text-slate-300 text-xs">This is your username ID.</div>
              </FormDescription>
              <FormMessage />
            </FormItem>           
            )}
            />
            <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel><div className="text-sm text-slate-400 font-normal">About Me</div></FormLabel>
              <div className="w-1/2">
              <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                </div>
              
              <FormDescription>
              <div className="text-slate-300 text-xs">You can <span>@mention</span> other users and organizations.</div>
              </FormDescription>
              
              <FormMessage />
            </FormItem>
          )}
          />

            <Button type="submit">Save Changes</Button>
            </form>
            </Form>
            </div>
        </div>
    </div>
    {/* <div className="items-center">
    {/* to put logo in here
    <Image 
                    src=" https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
                    alt=""
                    height="100"
                    width="400"
                />  */}

    {/* </div>  */}
    </div>

  );
}

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values)
}

export default Page;