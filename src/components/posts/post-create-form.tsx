'use client';

import {Button, Popover, PopoverContent, PopoverTrigger, Textarea} from "@nextui-org/react";
import {Input} from "@nextui-org/input";
import FormButton from "@/components/common/form-button";
import {useFormState} from "react-dom";
import {createPost} from "@/actions";

interface PostCreateFormProps {
    slug: string;
}

export default function PostCreateForm({slug}: PostCreateFormProps) {
    const [formState, action] = useFormState(
        createPost.bind(null, slug),
        {errors: {}}
    )
    return (
        <Popover>
            <PopoverTrigger>
                <Button color="primary">
                    Create a Post
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <form action={action}>
                    <div className="flex flex-col gap-4 p-4 w-80">
                        <h3 className="text-lg">Create a Post</h3>
                        <Input
                            name="title"
                            label="Title"
                            labelPlacement="outside"
                            placeholder="Title"
                            isInvalid={!!formState.errors.title}
                            errorMessage={formState.errors.title?.join(', ')}
                        />
                        <Textarea
                            name="content"
                            label="Content"
                            labelPlacement="outside"
                            placeholder="Content"
                            isInvalid={!!formState.errors.content}
                            errorMessage={formState.errors.content?.join(', ')}
                        />
                        {
                            formState.errors._form ?
                                <div className="p-2 bg-red-200 border border-red-400 rounded">
                                    {formState.errors._form?.join(', ')}
                                </div> : null
                        }
                        <FormButton>
                            Create Post
                        </FormButton>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    )
}